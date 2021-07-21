function addNumber(
  num1: number,
  num2: number,
  prefix: string,
  showResult: boolean = true
): number {
  if (showResult)
    console.log(
      `${prefix} "${num1}" and "${num2}" and Result is -> ${prefix + "->"} ${
        +num1 + num2
      }`
    );
  return num1 + num2;
}

const result = addNumber(2, 5, "Summing");

console.log(result);

const person: {
  name: string;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Bhupen",
  hobbies: ["songs", "playing"],
  role: [2, "author"],
};

person.role.push(5);
console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

const admin = "admin",
  readOnly = "Read Only",
  restricted = "Restricted user";

enum Role {
  ADMIN,
  READONLY,
  RESTRICTED,
}

const data = {
  name: "Bhupen",
  hobbies: ["songs", "playing"],
  role: Role.ADMIN,
};

if (data.role === Role.ADMIN) console.log("this is admin");

type Combinable = number | string
type options = "as-num" | "as-string" 
function combine(
  num1: Combinable,
  num2: Combinable,
  resultConv: options
): number {
  console.log("Combine function started");

  if (resultConv === "as-num") {
    console.log("adding numbers");
  } else if (resultConv === "as-string") {
    console.log("adding Strings");
  } else {
    console.log("No Decision");
  }
  return +num1 + +num2;
}

const combineRslt = combine("2", "5", "as-string");

console.log(combineRslt);
