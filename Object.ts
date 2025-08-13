type Person = {
    id: string;
    name: string;
    hobies?: string
}

const person: Person = {
    id: "1",
    name: "Gofar",
    hobies: "rebahan"
};

function printPerson(p: Person) {
    if (p.id === "1") {
        console.info(p)
    } else {
        const {hobies, ...rest}=p;
        console.info(rest);
    }
}

printPerson(person);


person.id="2"
person.name="Putra"

printPerson(person)