const data = {
  name: "John Doe",
  age: 32,
  title: "Vice President of JavaScript"
}
//JSON.stringify takes a JavaScript object or array and returns a serialized string in the JSON format.
const jsonStr = JSON.stringify(data);
console.log(data);
console.log(typeof data);
console.log(jsonStr);
console.log(typeof jsonStr);

//JSON.parse takes a JSON string and decodes it to a JavaScript data structure.
const data2 = JSON.parse(jsonStr);
console.log(data2);
console.log(typeof data2);

