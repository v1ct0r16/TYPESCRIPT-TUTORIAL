var phone = {
    id: 1,
    name: "iPhone",
    onStocks: true,
};
function gadget(electronic) {
    return "We have ".concat(electronic.name, " with id\n     number of ").concat(electronic.id, ". it is on stock? ").concat(electronic.onStocks);
}
console.log(gadget(phone));
