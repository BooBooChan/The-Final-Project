//Creating Login schema
var Schema = mongoose.Schema({
	//establishing a property for each Contacts Schema created.
	name: String //So all Contact schemas will be labelled by a string.

});
var LoginSchema = new Schema({
	firstName:{
		type:String,
		default:""
	},
	lastName:{
		type:String,
		default:""
	},
	email:{
		type:String,
		default:""
	},
	password:{
		type:String,
		default:""		
	},
	passwordHint:{
		type:String,
		default:""		
	}
});
var Login = mongoose.model("Login", LoginSchema);


//Exporting login database to server.js
module.exports = Login;