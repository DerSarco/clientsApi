const {model, Schema } = require("mongoose");

const schema = Schema({
	name: String,
	email: String,
	phone: String,
	providers: [{type: Schema.Types.ObjectId, ref: "providers"}],
})

module.exports = model("clients", schema)