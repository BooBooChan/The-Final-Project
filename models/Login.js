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
	username:{
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

var demo = new Login ({
	firstName: "Demo N.",
	lastName: "Stration",
	username:"DemoTheDemon"
	email:"demo@demonstration.de",
	password:"password",
	passwordHint:"the easiest password to guess"

});
//Exporting login database to server.js
module.exports = Login;