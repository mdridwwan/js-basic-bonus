const products = [
    { name: "Samsung s3 phone", price: 12200 },
    { name: "Samsung v9 phone", price: 14200 },
    { name: "Waltone p6 phone", price: 8200 },
    { name: "Apple 10+ phone", price: 32200 },
    { name: "Xaomi mi3 phone", price: 10200 },
    { name: "Asus k45 Laptop", price: 52200 },
    { name: "Samsung lit23 Laptop", price: 102200 },
    { name: "Hp-elitbook 820G1 Laptop", price: 82000 },
    { name: "Dell laptop", price: 72200 },
    { name: "Samsung Watch", price: 72200 },
    { name: "Apple Watch", price: 72200 }
];

function searchProducts(products, searchString) {
    const matched = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchString) != -1) {
            matched.push(product);
        }
    }
    return matched;
}
const matched = searchProducts(products, 'Laptop');
console.log(matched);