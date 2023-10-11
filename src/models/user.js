const { mongoose } = require("./mongoose");

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
      		lowercase:true
		},
		password: {
			type: String,
			required: true,
			min:6,
			max:30,
		},
	},
  {
    timestamps:true,
  }
);

module.exports = mongoose.model("user",UserSchema)
