	//Creating Contact schema (database)
	var Schema = mongoose.Schema({
		//establishing a property for each Contacts Schema created.
		name: String //So all Contact schemas will be labelled by a string.

	});
	//Turning schema into a model
	var ContactSchema = new Schema({
		name:{type:String};
		location:{type:String};
		phone:{
			countryCode:{
				type:Number,
				default:""
			}, 
			areaCode:{
				type:Number,
				default:""
			}, 
			mainNumber:{
				type:Number,
				default:""
			},
			default:this.countryCode + " + " + "(" + this.areaCode + ") " + this.mainNumber; //the "default" key here seems only to apply when all values being entered into the "phone" key are null. S
		},
		email:{
			username:{
				type:String,
				default:""
			},
			domain:{
				type:String,
				default:""
			},
			default:this.type + "@" + this.domain
		},
		fax:{
			countryCode:{
				type:Number,
				default:""
			}, 
			areaCode:{
				type:Number,
				default:""
			}, 
			mainNumber:{
				type:Number,
				default:""
			}, 
			default:this.countryCode + " + " + "(" + this.areaCode + ") " + this.mainNumber
		},
		location:{
			address1:{
				type:String,
				default:""
			},
			address2:{
				type:String,
				default:""
			},
			city:{
				type:String,
				default:""
			},
			state:{
				type:String,
				default:""
			},
			// country:{

			// },
			zip:{
				type:Number,
				default:""
			}
		}
	});
	//Creating model for each up and coming schema.
	var Contact = mongoose.model("Contact", ContactSchema);

	var demo = new Contact({
		name: "Demo", 
		location:{
				address1:"42 Wallaby Way", 
				city:"Sydney", 
				country:"Australia"}
		phone:{countryCode: 1,
			areaCode:842,
			mainNumber:8228637},
		fax:{
			countryCode: 1,
			areaCode:642,
			mainNumber:6226673}
		email:{
			username:"demon"
			domain:"demonstration.de"
		}
	});


//Exporting Contact schema to server.js
module.exports = Contact;