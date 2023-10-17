const { mongoose } = require("./mongoose");

const QuestionsSchema = new mongoose.Schema(
	{
		question:{
			type:String,
			required: true
		},
        answers:{
            type:Array,
            required:true
        },
        categoryId:{ type: mongoose.Schema.ObjectId, ref: "categories"},
	},
	{
		timestamps:true,
	}
);

module.exports = mongoose.model("questions", QuestionsSchema)