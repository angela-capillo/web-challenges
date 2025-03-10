let data = NaN;
console.log(typeof data)

// switch (typeof data) {
//     case "string":
//         console.log("string!")
//         break;
//     case "number":
//         console.log("number!")
//         break;
//     case "boolean":
//         console.log("boolean!")
//         break;
//     case "undefined":
//         console.log("undefined!")
//         break;
//     default:
//         console.log("I have no idea!")
//         break;
// }

switch (true) {
    case typeof data === "string":
        console.log("string!");
        break;
    case typeof data === "number":
        console.log(isNaN(data) ? "not a number!" : "number!");
        break;
    case typeof data === "boolean":
        console.log("boolean!");
        break;
    case data === undefined:
        console.log("undefined!");
        break;
    case data === null:
        console.log("null!");
        break;
    case typeof data === "function":
        console.log("function!");
        break;
    case Array.isArray(data):
        console.log("array!");
        break;
    case typeof data === "object":
        console.log("object!");
        break;
    default:
        console.log("I have no idea!");
}