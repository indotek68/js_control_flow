var data = require("./products.json")
var count = 0;


// Count items
for(var i = 0; i < data.items.length; i++){
	if (data.items[i].kind === "shopping#product"){
		count++;
	}
}
console.log(count)

console.log("-----------------")
//list items that are in back order
for(var i = 0; i < data.items.length; i++){
	if (data.items[i].product.inventories[0].availability === "backorder"){
		console.log(data.items[i].product.title)
	}
}
console.log("-----------------")
for(var i = 0; i < data.items.length; i++){
	if (data.items[i].product.images.length > 1){
		console.log(data.items[i].product.title)
	}
}
console.log("-----------------")

for(var i = 0; i < data.items.length; i++){
	if (data.items[i].product.brand === "Canon"){
		console.log(data.items[i].product.title)
	}
}
console.log("-----------------")

for(var i = 0; i < data.items.length; i++){
	if (data.items[i].product.brand === "Canon" && data.items[i].product.author.name === "eBay" ){
		console.log(data.items[i].product.title);
	}
}
console.log("-----------------")

for(var i = 0; i < data.items.length; i++){
		console.log(data.items[i].product.brand);
		console.log(data.items[i].product.inventories[0].price)
		for(var j = 0; j < data.items[i].product.images.length; j++){
			console.log(data.items[i].product.images[j]);
		}	
}
console.log("-----------------")

















