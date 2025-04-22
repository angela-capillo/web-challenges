import Chance from "chance";

const chance = new Chance();
const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    spiritAnimal: chance.animal()
  };

export default function handler(request, response) {
	response.status(400).json(character);
}