// Creating an object of my Shop-item "Pen".
let myShop: {itemName:string; price:number; color:string; isDiscount:boolean;}
={
    itemName: "Blue pen",
    price: 20,
    color:"blue",
    isDiscount:true,
}
console.log(`My Shop item info: ${myShop.itemName} Price: Rs${myShop.price} color:${myShop.color}
discount:${myShop.isDiscount}`);