interface AddFunction {
    (value1: number, value2: number): number
}

interface ageDetector{
    (name:string, age:number):string
}

interface Person{
    name:string;
    sayHello(name:string):string
}

const data1:ageDetector=(name:string, age:number):string=>{
    if(age<17){
        return `${name}, You are still a kid`
    }else{
        return `${name}, You are an adult now`
    }
}

const add: AddFunction = (value1: number, value2: number): number => {
    return value1 + value2
}

const person:Person={
    name:"Eko",
    sayHello:function(name:string){
        return `Hello ${name}, my name is ${this.name}`
    }
}

console.info(add(2, 2))  

console.info(data1("Gofar", 18))

console.info(person.sayHello("Gofar"))