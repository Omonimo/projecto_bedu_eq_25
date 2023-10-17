const { connect } = require("./models/mongoose");
const User = require("./models/user");
const RecordTests = require("./models/recordtests");
const Question = require("./models/question");
// const Post = require("./models/post");
// const Comment = require("./models/comment");

// // "Un usuario crea muchas publicaciones"
// User.hasMany(Post);
// Post.belongsTo(User);

// // "Una publicación tiene muchos comentarios"
// Post.hasMany(Comment);
// Comment.belongsTo(Post);

// // "Un usuario crea muchos comentarios"
// User.hasMany(Comment);
// Comment.belongsTo(User);

exports.initDatabase = async function () {
	await connect();
};
