const TAX_RATE = 0.08;

function calculateTotal(cartItems) {
    let total = 0;
    for (let item of cartItems) {
        total += item.price;
    }
    return total + (total * TAX_RATE);
}

let cart = [
    { name: "Book", price: 10 },
    { name: "Pen", price: 2 }
];

console.log("Total Price:", calculateTotal(cart));
