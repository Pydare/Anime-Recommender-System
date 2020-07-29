import re 
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.metrics.pairwise import linear_kernel,cosine_similarity

anime_new = pd.read_csv('../DATA/Anime_data_content2.csv')
anime_df = anime_new.copy()

def to_lower(s):
    return s.lower()

#changing the titles to all lower case
anime_df['Title'] = anime_df['Title'].apply(to_lower)


#Construct a reverse map of indices and anime titles
indices = pd.Series(anime_df.index, index=anime_df['Title']).drop_duplicates()

# Function to convert all lists into strings for splitting into lists
def clean_data_lists(s):
    return re.sub(r"[^\sa-zA-Z0-9\.\,\;]","",str(s))

#creating a function to split the particular columns into lists again
def split_columns(x):
    return x.split(',')

# Function to convert all strings to lower case and strip names of spaces
def clean_data(x):
    if isinstance(x, list):
        return [str.lower(i.replace(" ", "")) for i in x]
    else:
        #Check if source exists. If not, return empty string
        if isinstance(x, str):
            return str.lower(x.replace(" ", ""))
        else:
            return ''

def create_soup(x):
    return ' '.join(x['Genre']) + ' ' + ' '.join(x['Producer']) + ' ' + ' '.join(x['Studio']) + ' ' + ' '.join(x['Source'])

def preprocess(anime_df):

    #converting necessary columns to strings for processing
    anime_df['Genre'] = anime_df["Genre"].astype('str')
    anime_df['Producer'] = anime_df["Producer"].astype('str')
    anime_df['Studio'] = anime_df["Studio"].astype('str')

    # Apply clean_data function to your features.
    features = ['Genre', 'Producer', 'Studio', 'Source']

    for feature in features:
        anime_df[feature] = anime_df[feature].apply(clean_data_lists)

    for feature in features:
        anime_df[feature] = anime_df[feature].apply(split_columns)

    #applying the clean_data function
    for feature in features:
        anime_df[feature] = anime_df[feature].apply(clean_data)

    # Create a new soup feature
    anime_df['soup'] = anime_df.apply(create_soup, axis=1)

    #returning the anime df
    return anime_df

#Applying vectorization to the plot summary to get other similar animes, using tf-idf vectorizer
def vectorize_similarity(synopsis):
    #Define a TF-IDF Vectorizer Object. Remove all english stop words such as 'the', 'a'
    tfidf = TfidfVectorizer(stop_words='english')

    #Replace NaN with an empty string
    synopsis = synopsis.fillna('')

    #Construct the required TF-IDF matrix by fitting and transforming the data
    tfidf_matrix = tfidf.fit_transform(synopsis)

    # Compute the cosine similarity matrix
    cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

    #returning the cosine_similarity
    return cosine_sim

def vectorize_similarity2(soup):
    count = CountVectorizer(stop_words='english')
    count_matrix = count.fit_transform(soup)

    cosine_sim2 = cosine_similarity(count_matrix, count_matrix)

    #return cosine similarity
    return cosine_sim2

#writing a function to get recommendations using both storyline and features based on 50% for both
def get_recommendations_both(title, cos_sim1, cos_sim2):
    # Get the index of the movie that matches the title
    idx = indices[title]

    # Get the pairwsie similarity scores of all anime using similarity1
    sim_scores1 = list(enumerate(cos_sim1[idx]))

    # Get the pairwsie similarity scores of all anime using similarity1
    sim_scores2 = list(enumerate(cos_sim2[idx]))

    #Getting the average of both similarity scores
    sim_scores_avg = [(sim_scores1[i][0],(sim_scores1[i][1] + sim_scores2[i][1])/2) for i in range(len(sim_scores1))]

    # Sort the movies based on the similarity scores
    sim_scores_avg = sorted(sim_scores_avg, key=lambda x: x[1], reverse=True)

    #Get the scores of the 10 most similar movies
    sim_scores_avg = sim_scores_avg[1:11]

    #Get the movie indices
    anime_indices = [i[0] for i in sim_scores_avg]

    #Return the top 10 most similar movies
    return anime_new['Title'].iloc[anime_indices]


#exporting to the next file
anime_df = preprocess(anime_df)

#testing the functions
# anime_df = preprocess(anime_df)
# cos_sim1 = vectorize_similarity(anime_df['Synopsis'])
# cos_sim2 = vectorize_similarity2(anime_df['soup'])
# ans = get_recommendations_both('pokemon',cos_sim1,cos_sim2)
# print((type(ans)))
