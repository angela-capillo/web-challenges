console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
    console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
    console.log("Access denied!");
};

// Part 2: Even / Odd
const number = 7;

if (number % 2 == 0) {
    console.log("Even number!");
} else {
    console.log("Odd number!");
};

// Part 3: Hotdogs
const numberOfHotdogs = 489;

if (numberOfHotdogs < 5) {
    console.log("Hotdog price: 2€");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
    console.log("Hotdog price: 1.50€");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
    console.log("Hotdog price: 1€");
} else if (numberOfHotdogs >= 1000000){
    console.log("Hotdog price: 0.10€");
};

// Part 4: Daytime
const currentHour = 19;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Marcell";

const greeting = "Hello " + (userName === "Marcell" ? "coach" : userName) + "!";

console.log(greeting);
