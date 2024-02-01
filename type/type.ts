type stringOrNumber = string | number;

type product ={
    id: stringOrNumber,
    name: string;
    onStocks: boolean,
}

const phone: product = {
    id: 1,
    name: "iPhone",
    onStocks: true,
}

function gadget(electronic:product){
    return `We have ${electronic.name} with id
     number of ${electronic.id}. it is on stock? ${electronic.onStocks}`
}

console.log(gadget(phone));

