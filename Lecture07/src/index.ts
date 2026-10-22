// Id -> number | string

// const name = 455;
// console.log(typeof name);

// id -> number | string -> string
//  id -> string -> string
//  id -> number -> string
// function formatId(id: number | string): string {
//   if (typeof id === "number") {
//     const stringId = String(id); // Type conversion
//     return stringId;
//   }

//   return id;
// }

// const id1 = "wertyui";
// const id2 = 5456;

// console.log(formatId(id1), typeof formatId(id1));

// console.log(formatId(id2), typeof formatId(id2));

// reduce

// array  - [1, 2, 3, 4, 5] -> summation

//  loop -> varible -> add -> 4 loc
// reduce -> addition -> value -> carry forword

//  (a, b) => {
//  a + b
// }

//  (a, b) => a + b

// const arr = [1, 2, 4, 5];

// const sum = arr.reduce((a, b) => {
//   return a + b;
// });

// function anm(a: number, b: number): number {}

// Map Function
// const arr = [1, 2, 4, 5];

//  arr -> values, element -> +10 -> arr -> ?

// const newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   const value = arr[i];
//   if (value) {
//     newArr.push(value + 10);
//   }
// }

// Mentos Solution

// const arr = [1, 2, 4, 5];
// const newArr = arr.map((value) => value + 10);
// loop 1 => value 1 => [11]
// loop 2 => value 2 => [11, 12]
// loop 3 => value 4 => [11, 12, 14]
// loop 4 => value 5 => [11, 12, 14, 15]

// const arr = [1, 2, 4, 5];
// const newArr = arr.map((value, i, arr) => String(value));

// type Product = { id: string; price: number };

// const products: Product[] = [
//   { id: "p1", price: 250 },
//   { id: "p2", price: 400 },
// ];

// const expensive = products.filter((p) => p.price > 300);
// const prices = products.map((p) => p.price);
// const total = prices.reduce((sum, p) => sum + p, 0);

// backend -> server -> apis -> data return -> type -> similar

// respone - {
//  message: "Successfull",
//  data: []
// }

// Response - {
// msg: "Failed"
// }

// Response - {
// success: false
// }

// Generic typings

// interface ApiResponse<T> {
//   msg: string;
//   data: T;
//   totalNumberOfData: number;
//   page: number;
// }

// const prodRes: ApiResponse<{ price: number }> = {
//   data: {
//     price: 56,
//   },
//   msg: "Success",
//   page: 1,
//   totalNumberOfData: 200,
// };

let num: any = 45678;

console.log(num);
