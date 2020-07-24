import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel

anime_new = pd.read_csv('../DATA/Anime_data_content.csv')

def to_lower(s):
    return s.lower()

#changing the titles to all lower case
anime_new['Title'] = anime_new['Title'].apply(to_lower)


#Construct a reverse map of indices and anime titles
indices = pd.Series(anime_new.index, index=anime_new['Title']).drop_duplicates()


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


# Function that takes in anime title as input and outputs most similar anime
def get_recommendations(title, cosine_sim):
    # Get the index of the anime that matches the title
    idx = indices[title]

    # Get the pairwsie similarity scores of all anime with that anime
    sim_scores = list(enumerate(cosine_sim[idx]))

    # Sort the anime based on the similarity scores
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    # Get the scores of the 10 most similar anime
    sim_scores = sim_scores[1:11] 

    # Get the anime indices
    anime_indices = [i[0] for i in sim_scores]

    # Return the top 10 most similar anime
    return anime_new['Title'].iloc[anime_indices]

#to be exported to the next file
cos_sim = vectorize_similarity(anime_new['Synopsis'])

#testing the functions above (comment)
cos_sim = vectorize_similarity(anime_new['Synopsis'])
ans = get_recommendations('bleach', cos_sim)
print(ans)
