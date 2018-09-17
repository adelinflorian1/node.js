module.exports = function(app) {
    var post = require('../controllers/postController');

    app.route('/post')
        .get(post.list_all_posts)
        .post(post.create_a_post);

    app.route('/post/:postId')
        .get(post.get_post_by_id)
        .delete(post.delete_a_post);
};