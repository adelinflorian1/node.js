module.exports = function(app) {
    var post = require('../controllers/postController');

    app.route('/post')
        .get(post.list_all_posts)
        .post(post.create_a_post);

    app.route('/post/:post')
        .delete(post.delete_a_post);
};