from flask import Flask, jsonify, abort, make_response, request, url_for
from content_based_plot import vectorize_similarity, get_recommendations, anime_new
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/recommender', methods=['GET', 'POST'])
def recommend():
    try:
        if request.method == 'POST':
            anime = request.get_json()['anime']
        
        cos_sim = vectorize_similarity(anime_new['Synopsis'])
        preds = get_recommendations(anime,cos_sim).tolist()
        preds = {i:preds[i] for i in range(len(preds))}
        return jsonify( preds) 
    except KeyError:
        abort(404)

@app.route('/', methods=['GET'])
def get_all(): 
    return "get all"

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error':'Anime not found'}), 404)
    


if __name__ == '__main__':
    app.run(debug=True) 