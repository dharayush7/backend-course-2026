// console.log("Hello World 4");
// console.log("Hello World 4");
// console.log("Hello World 4");
// console.log("Hello World 4");
// console.log("Hello World 4");
// console.log("Hello World 4");
// console.log("Hello World 4");
// console.log("Hello World 4");
// console.log("Hello World 4");
// document.querySelector(".gt");

// function multiplication(a: number, b: number) {
//   return a * b;
// }

// console.log(multiplication(23, 4));

// const numbers: number[] = [8, 9, 8];

// const isActive: boolean = true;

// function double(a: number): number {
//   return a * 2;
// }

type User = {
  name: string;
  age: number;
  city: string;
};

const user1: User = {
  name: "Sameer",
  age: 56,
  city: "Bhopal",
};

const user2: User = {
  name: "Ayush",
  age: 22,
  city: "Kolkata",
};

function getCity(user: User): string {
  return user.city;
}

function getAge(user: User): number {
  return user.age;
}

console.log("The city is", getCity(user1));
console.log("The city is", getCity(user2));
console.log("The age of the user1 is", getAge(user1));
console.log("The age of the user2 is", getAge(user2));
