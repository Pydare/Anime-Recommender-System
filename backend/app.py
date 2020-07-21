from flask import Flask, jsonify, abort, make_response, request, url_for
from content_based_plot import vectorize_similarity, get_recommendations, anime_new
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/recommender/<string:anime>', methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def recommend(anime):
    try:
        cos_sim = vectorize_similarity(anime_new['Synopsis'])
        preds = get_recommendations(anime,cos_sim).tolist()
        preds = {i:preds[i] for i in range(len(preds))}
        return jsonify( {'predictions': preds}) 
    except KeyError:
        abort(404)

@app.route('/recommender/', methods=['GET'])
@cross_origin(supports_credentials=True)
def get_all():
    return "get all"


@app.errorhandler(404)
@cross_origin(supports_credentials=True)
def not_found(error):
    return make_response(jsonify({'error':'Anime not found'}), 404)
    


if __name__ == '__main__':
    app.run(debug=True) 