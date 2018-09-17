module.exports = function(app) {
    var comment = require('../controllers/commentController');

    app.route('/comment')
        .post(comment.create_a_comment);

    app.route('/comment/:commentId')
        .get(comment.get_comment_by_post_id)
        .delete(comment.delete_a_comment);
};