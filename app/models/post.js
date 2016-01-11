var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
	name: { type: String },
	email: { type: String, required: true },
	phone: { type: String },
	city: { type: String, required: true },
	location: { type: String },
	price: { type: String },
	condition: { type: String },
	make: { type: String },
	size: { type: String },
	title: { type: String, required: true },
	color: { type: String },
	posting: { type: String, required: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

PostSchema.pre('save', function(next) {
	now = new Date();
	this.updated_at = now;
	if (!this.created_at) {
		this.created_at = now;
	}
	next();
});

module.exports = mongoose.model('plh-post', PostSchema); // Mongoose changes this to map-users