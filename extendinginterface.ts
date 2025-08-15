export interface Employee{
    id:string;
    name:string;
    division:string
}

export interface Manager extends Employee{
    numberOfEmployee:number;
}

const employee:Employee={
    id:"1",
    name:"Gofar",
    division:"IT"
}

const manager:  Manager={
    id:"2",
    name:"Putra",
    division:"IT",
    numberOfEmployee:10
}

console.info(manager)