export interface Seller{
    id: number,
    name:string,
    address?:string
    readonly nib:string,
    readonly npwp:string
}

const seller1:Seller={
    id:1,
    name:"Gofar",
    address:"Jl.Jalan",
    nib:"123",
    npwp:"456"
}

const seller2:Seller={
    id:2,
    name:"Putra",
    nib:"789",
    npwp:"101112"
}

seller1.name="Gopro";
console.info(seller1)
console.info(seller2)
