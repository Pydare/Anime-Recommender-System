import re 
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.metrics.pairwise import linear_kernel, cosine_similarity

anime_new = pd.read_csv('DATA/Anime_data_content2.csv')
anime_df = anime_new.copy()

def to_lower(s):
    return s.lower()

# changing the titles to all lower case
anime_df['Title'] = anime_df['Title'].apply(to_lower)

# construct a reverse map of indices and anime titles
indices = pd.Series(anime_df.index, index=anime_df['Title']).drop_duplicates()

# function to convert all lists into strings for splitting into lists
def clean_data_lists(s):
    return re.sub(r"[^\sa-zA-Z0-9\.\,\;]", "", str(s))

# creating a function to split the particular columns into lists again
def split_columns(x):
    return x.split(',')

# function to convert all strings to lower case and strip names of spaces
def clean_data(x):
    if isinstance(x, list):
        return [str.lower(i.replace(" ", "")) for i in x]
    else:
        # check if source exists. If not, return empty string
        if isinstance(x, str):
            return str.lower(x.replace(" ", ""))
        else:
            return ''

def create_soup(x):
    return ' '.join(x['Genre']) + ' ' + ' '.join(x['Producer']) + ' ' + ' '.join(x['Studio']) + ' ' + ' '.join(x['Source'])

def preprocess(anime_df):

    # converting necessary columns to strings for processing
    anime_df['Genre'] = anime_df["Genre"].astype('str')
    anime_df['Producer'] = anime_df["Producer"].astype('str')
    anime_df['Studio'] = anime_df["Studio"].astype('str')

    # apply clean_data function to your features.
    features = ['Genre', 'Producer', 'Studio', 'Source']

    for feature in features:
        anime_df[feature] = anime_df[feature].apply(clean_data_lists)

    for feature in features:
        anime_df[feature] = anime_df[feature].apply(split_columns)

    # applying the clean_data function
    for feature in features:
        anime_df[feature] = anime_df[feature].apply(clean_data)

    # create a new soup feature
    anime_df['soup'] = anime_df.apply(create_soup, axis=1)

    # returning the anime df
    return anime_df

# applying vectorization to the plot summary to get other similar animes, using tf-idf vectorizer
def vectorize_similarity(synopsis):
    # define a TF-IDF Vectorizer Object. Remove all english stop words such as 'the', 'a'
    tfidf = TfidfVectorizer(stop_words='english')

    # replace NaN with an empty string
    synopsis = synopsis.fillna('')

    # construct the required TF-IDF matrix by fitting and transforming the data
    tfidf_matrix = tfidf.fit_transform(synopsis)

    # compute the cosine similarity matrix
    cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

    # returning the cosine_similarity
    return cosine_sim

def vectorize_similarity2(soup):
    count = CountVectorizer(stop_words='english')
    count_matrix = count.fit_transform(soup)

    cosine_sim2 = cosine_similarity(count_matrix, count_matrix)

    # return cosine similarity
    return cosine_sim2

def get_recommendations_both(title, cos_sim1, cos_sim2):
    # get the index of the movie that matches the title
    idx = indices[title]

    # get the pairwsie similarity scores of all anime using similarity1
    sim_scores1 = list(enumerate(cos_sim1[idx]))

    # get the pairwsie similarity scores of all anime using similarity1
    sim_scores2 = list(enumerate(cos_sim2[idx]))

    # getting the average of both similarity scores
    sim_scores_avg = [(sim_scores1[i][0], (sim_scores1[i][1] + sim_scores2[i][1])/2) for i in range(len(sim_scores1))]

    # sort the movies based on the similarity scores
    sim_scores_avg = sorted(sim_scores_avg, key=lambda x: x[1], reverse=True)

    # get the scores of the 10 most similar movies
    sim_scores_avg = sim_scores_avg[1:100]
    
    # mapping the index to its similarity score
    index_score_dict = dict(sim_scores_avg)
    
    # get the movie indices
    anime_indices = [i[0] for i in sim_scores_avg]
      
    # ensuring recommendations don't have the same name with title input
    # anime_map = dict(zip(anime_indices,anime_data['title'].iloc[anime_indices]))
    # print(anime_map)
    # making a copy of the dataset to enable spilting of the title column
    
    final_indices = []
    for i in anime_indices:
        if title not in anime_new['Title'].iloc[i]:
            final_indices.append(i)
        else:
            pass
    
    # return the top 10 most similar anime
    final_indices = final_indices[0:11]
    
    # getting the similarity scores of the animes
    sim_score = []
    for i in final_indices:
        sim_score.append(index_score_dict[i]*100)

    sim_score = [float("{:.2f}".format(i)) for i in sim_score]
    
    # doubling the sim score if the highest sim score is less than 50
    if sim_score[0] < 50.0:
        sim_score = [ "{:.2f}".format(i*2.0) for i in sim_score]
        
    # creating a new dataframe for the top animes
    top_sim =pd.DataFrame(anime_new[['Title', 'Genre', 'Link']].iloc[final_indices])
    top_sim['Similarity_score'] = sim_score
    return top_sim[['Title', 'Link', 'Similarity_score']]

# exporting to the next file
anime_df = preprocess(anime_df)

#testing the functions
# anime_df = preprocess(anime_df)
# cos_sim1 = vectorize_similarity(anime_df['Synopsis'])
# cos_sim2 = vectorize_similarity2(anime_df['soup'])
# ans = get_recommendations_both('pokemon',cos_sim1,cos_sim2)
# print(ans)
