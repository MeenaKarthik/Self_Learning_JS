class Astronaut {
    constructor(name, age, mass = 54){
        this.name = name;
        this.age = age;
        this.mass = mass;
    }
}

let fox = new Astronaut('Fox', 7, 12);
let hippo = new Astronaut('Hippo', 25, 1500);
let tortoise = new Astronaut('Speedy', 120);

console.log(typeof fox, typeof hippo);
console.log(hippo, fox);
console.log(tortoise.name, tortoise.age, tortoise.mass);

