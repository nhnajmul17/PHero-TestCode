let vaxTrail = [
    {
        "name": "Najmul",
        "age": 24,
        "temperature": 96
    },
    {
        "name": "Siam",
        "age": 30,
        "temperature": 95
    },
    {
        "name": "Tahir",
        "age": 35,
        "temperature": 102
    },
    {
        "name": "Tanvir",
        "age": 37,
        "temperature": 95
    },
    {
        "name": "Sadik",
        "age": 42,
        "temperature": 95
    },
    {
        "name": "Karim",
        "age": 24,
        "temperature": 100
    },
    {
        "name": "Nabil",
        "age": 65,
        "temperature": 98
    }
]

let a = [];
let b = [];
let c = [];
let d = [];


let Temp = (element) => {
    if (element.temperature < 100) {
        Age(element)
    }
    else {
        d.push(element)
    }
}

let Age = (element) => {
    if (element.age > 19 && element.age < 31) {
        a.push(element)
    }
    else if (element.age > 30 && element.age < 41) {
        b.push(element)
    }
    else if (element.age > 40 && element.age < 51) {
        c.push(element)
    }
}

vaxTrail.map(element => Temp(element));


let Final_output = {};
Final_output.A = a;
Final_output.B = b;
Final_output.C = c;
Final_output.D = d;

console.log(Final_output)