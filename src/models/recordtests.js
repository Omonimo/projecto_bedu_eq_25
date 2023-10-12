const { mongoose } = require("./mongoose");

const RecordTestsSchema = new mongoose.Schema(
	{
		score:{
			type:Number,
			required: true
		},
        completed:{
            type:Date,
            required:true
        }
	},
	{
		timestamps:true,
	}
);

module.exports = mongoose.model("recordtests",RecordTestsSchema)
