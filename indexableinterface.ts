// Array
// yarrA
interface StringArray{
    [index: number]:string
}

const names:StringArray=["Gofar", "Putra","Perdana"]

console.info(names[0]);
console.info(names[1]);
console.info(names[2]);

//Object
interface StringDictionary{
    [key:string]:string
}

const dictionary:StringDictionary={
    name:"Gofar",
    address:"TPI"
};

console.info(dictionary["name"])
console.info(dictionary["address"])
