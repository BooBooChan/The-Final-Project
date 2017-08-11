//Creating Login schema
var Schema = mongoose.Schema({
	//establishing a property for each Contacts Schema created.
	name: String //So all Contact schemas will be labelled by a string.

});
var MealPlanSchema = new Schema({
	day:{
		type:String,
		default:""
	},
	meal:{
		type:String,
		default:""
	},
	ingredientQuantity:{
		type:String,
		quantity:{
			unitMeasurement:{
				type:String,
				default:""
			},
			count:{
				type:Number,
				default:""
			}
		},
		default:""
	},
	servingsPerMeal:{
		type:Number,
		default:""		
	},
	estimatedPrepTime:{
		type:String,
		time:{
			minimum:{
				hours:{
					type:Number,
					default:""
				},
				minutes:{
					type:Number,
					default:""
				},
				default:this.hours + ":" + this.minutes
			},
			maximum:{
				hours:{
					type:Number,
					default:""
				},
				minutes:{
					type:Number,
					default:""
				},
				default:this.hours + ":" + this.minutes
			},			
			
			default:this.minimum + "-" this.maximum
		}
		default:""		
	}
});
var MealPlan = mongoose.model("MealPlan", MealPlan);

var demo = new MealPlan({
	
});
//Exporting meal plans database to server.js
module.exports = MealPlan;