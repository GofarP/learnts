let sample = "Eko";
sample = 100;
sample = true;
if (typeof sample === "string") {
    console.log(sample.toUpperCase());
}
else if (typeof sample === "number") {
    console.log(sample + 2);
}
else {
    console.log(!sample);
}
export {};
//# sourceMappingURL=union.js.map