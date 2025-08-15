 const enum CustomerType{
    REGULAR,
    GOLD,
    PLATINUM
};

export type Customer={
    id:number,
    name:string,
    type:CustomerType
};

const customer:Customer={
    id:1,
    name:"Gofar",
    type:CustomerType.GOLD
}

console.info(customer)