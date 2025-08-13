export type Category={
    id:string;
    name:string
}

export type Product={
    id:string;
    name:string;
    price:number;
    category:Category
}

const category:Category={
    id:"1",
    name:"Handphone"
}

const product:Product={
    id:"1",
    name:"Samsung S20",
    price:20000000,
    category:category
}


console.info(category)
console.info(product.name)


//union type alias
export type ID=string|number;

export type unionCategory={
    id:ID;
    name:string;
}

export type unionProduct={
    id:ID;
    name:string;
    price:number;
    category:unionCategory
}

const newCategory:unionCategory={
    id:2,
    name:"Rice Cooker"
}

const newProduct:unionProduct={
    id:"2",
    name:"Cosmos",
    price:500000,
    category:newCategory
}

console.log(newProduct)




