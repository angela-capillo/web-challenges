import { Chance } from "chance";
import { createServer } from "node:http";

const chance = new Chance;

let name = chance.name({ nationality: 'it' });
let age = chance.age();
let profession = chance.profession({rank: true});

export const server = createServer((request, response) => {
    response.end(`Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`)
})
