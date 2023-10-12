const { mongoose } = require("./mongoose");

const CategoriesSchema = new mongoose.Schema(
	{
		name:{
			type:String,
			unique: true,
			required: true,
      		lowercase:true
		}
	},
	{
		timestamps:true,
	}
);

module.exports = mongoose.model("categories",CategoriesSchema)
