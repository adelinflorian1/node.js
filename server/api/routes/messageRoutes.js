module.exports = function(app) {
    var message = require('../controllers/messageController');

    app.route('/message')
        .get(message.list_all_messages)
        .post(message.create_a_message);
};
