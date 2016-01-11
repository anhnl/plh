var mongoose = require('mongoose');
var Post = require('./app/models/post.js');

module.exports = function(app) {
	app.get('/postings', function(req, res) {

		var query = Post.find({});
		query.exec(function(err, posts) {
			if (err)
				res.send(err);
			res.json(posts);
		});
	});

	app.post('/postings', function(req, res) {

		var newPost = new Post(req.body);
		newPost.save(function(err) {
			if (err) {
				return res.redirect('#posts');
			} else {
				return res.redirect('#posts');
			}
		});
	});
};