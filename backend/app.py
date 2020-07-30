from flask import Flask, jsonify, abort, make_response, request, url_for
from content_based_q import preprocess, vectorize_similarity, vectorize_similarity2, get_recommendations_both, anime_df, anime_new
from genre_recommender import get_genre_recommendations, data_scored
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/recommender', methods=['GET', 'POST'])
def recommend():
    try:
        if request.method == 'POST':
            anime = request.get_json()['anime']
        
        cos_sim1 = vectorize_similarity(anime_df['Synopsis'])
        cos_sim2 = vectorize_similarity2(anime_df['soup'])
        preds = get_recommendations_both(anime,cos_sim1,cos_sim2).tolist()
        preds = {i:preds[i] for i in range(len(preds))}
        return jsonify( preds) 
    except KeyError:
        abort(404)

@app.route('/recommender/genre', methods=['GET', 'POST'])
def recommend_genre():
    if request.method == 'POST':
        anime_genre = request.get_json()['genre']
    
    preds = get_genre_recommendations(anime_genre).tolist()
    preds = {i:preds[i] for i in range(len(preds))}
    return jsonify( preds)

@app.route('/', methods=['GET'])
def get_all(): 
    return "get all"

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error':'Anime not found (Try Entering In Lowercases)'}), 404)
    


if __name__ == '__main__':
    app.run(debug=True) 