export function getAnimal(animal = "none") {
    if (animal === "cats") {
		return "I totally love cats!"
	} else if (animal === "dogs") {
        return "I like dogs!"
    }
	return "I do not like animals at all!";
}
