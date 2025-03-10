let data = NaN;
console.log(typeof data)

switch (typeof data) {
    case "string":
        console.log("string!")
        break;
    case "number":
        console.log("number!")
        break;
    case "boolean":
        console.log("boolean!")
        break;
    case "undefined":
        console.log("undefined!")
        break;
    default:
        console.log("I have no idea!")
        break;
}