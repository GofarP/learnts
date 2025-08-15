function sayHello(name?:string | null){
    if(name){
        console.info(`Hello ${name}`)
    }else{
        console.info("Hello")
    }
}

sayHello("Gofar");
const name:string | undefined=undefined;
sayHello(name);
sayHello(null);