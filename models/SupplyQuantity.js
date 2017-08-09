//Creating SupplyList schema
var Schema = mongoose.Schema({
	//establishing a property for each ShoppingList Schema created.
	name: String //So all ShoppingList schemas will be labelled by a string.

});
var Supply = new Schema({
	eachItem:{
		item:{
			type:String,
			default:""
		},
		quantity:{
			type:Number,
			default:""
		},
		dosage:{
			type:Number,
			default:"$" + this.type
			//Multiply item quantity by price to find total cost of each list item. 
		},
		total:{
			type:Number,
			calculate:Shopping.quantity * Shopping.price,
			default: ""
		},		
	},
	netTotal: eachItem.total//Add total price of each list item together, excluding tax.	
});
//Exporting shopping list database to server.js
module.exports = Shopping;