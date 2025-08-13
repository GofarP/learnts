let sample:number |string | boolean="Eko"
sample=100
sample=true;

if (typeof sample === "string") {
    console.log(sample.toUpperCase());
}
else if(typeof sample==="number"){
    console.log( sample + 2);
}
else{
    console.log(!sample);
}
