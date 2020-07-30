import re 
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.metrics.pairwise import linear_kernel,cosine_similarity

data_scored = pd.read_csv('../DATA/genre_data.csv')
#mapping each title to its genre
anime_map = dict(zip(range(data_scored.shape[0]),data_scored['genres']))

#function to get recommendation based on genre
def get_genre_recommendations(genre):
    
    #checking if the genre is in the map inorder to pick the top ones
    index = []
    for i in range(data_scored.shape[0]):
        if genre in anime_map[i]:
            index.append(i)
        
    # Scores of the 10 most similar movies
    anime_index = index[0:10]

    # Movie indices
   # movie_indices = [i[0] for i in sig_scores]

    # Top 10 most similar movies
    return data_scored['title'].iloc[anime_index]


#testing the function
# res = get_genre_recommendations('Action')
# print(res)