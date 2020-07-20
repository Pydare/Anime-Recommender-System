from flask import Flask, jsonify, abort, make_response, request, url_for
from content_based_plot import vectorize_similarity, get_recommendations, trim, anime_new

app = Flask(__name__)

@app.route('/recommender/<string:anime>', methods=['GET','POST'])
def recommend(anime):
    try:
        indices, anime_new = trim(anime_new)
        cos_sim = vectorize_similarity(anime_new['Synopsis'])
        preds = get_recommendations(anime,cos_sim,indices).tolist()
        preds = {i:preds[i] for i in range(len(preds))}
        return jsonify( {'predictions': preds}) 
    except KeyError:
        abort(404)


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error':'Anime not found'}), 404)
    


if __name__ == '__main__':
    app.run(debug=True)