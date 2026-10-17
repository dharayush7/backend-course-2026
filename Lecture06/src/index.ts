// function printUser({
//   user,
// }: {
//   user: {
//     name: string;
//   };
// }) {
//   const name = user.name.toUpperCase();
//   console.log(name);
// }

// printUser({
//   user: {
//     name: "Sameer",
//   },
// });

// let age = 22;
// age = "Fourty";
// void function -> no value return

// const result = printUser({
//   user: {
//     name: "String",
//   },
// });

// console.log(result);

// const re: number | null = null;

// const result: number[] = [1, 2, 3, 9];

// const arr: Array<number> = [1, 2, 4];
// const arr2: Array<string> = ["33", "bujdh"];

// type Array<T> = T[];

// type nullable<T> = T | null | undefined;

// type User = {
//   name: string;
//   age: number;
//   city: string;
// };

// type AdminUser = {
//   name: string;
//   age: number;
//   city: string;
//   role: string;
//   permission: string[];
// };

// interface User {
//   name: string;
//   age: number;
//   city: string;
// }

// interface AdminUser extends User {
//   role: string;
//   permission: string[];
// }

// const adminUser: AdminUser = {

// }

// type Status = "fail" | "pass";

// const status: Status = "fail";
// const status2: Status = "pass";

// const num1 = 34;
// const name = "Sameer";

// const numberType = typeof num1;

// console.log(numberType == "number");

// type TimpStamp = {
//   createdAt: Date;
//   UpdatedAt: Date;
// };

// type User = {
//   name: string;
//   age: number;
//   city: string;
//   createdAt: Date;
// };

// type StoredUser = User & TimpStamp;

// const user: User = {
//   age: 23,
//   city: "",
//   name: "",
// };

// const ts: TimpStamp = {
//   createdAt: new Date(),
//   UpdatedAt: new Date(),
// };

// const su: StoredUser = {
//   createdAt: new Date(),

// };

// function greet(name: string, title = "Mr"): string {
//   if (title) {
//     return `${title} ${name}`;
//   } else return name;
// }

// console.log(greet("Sameer", "Mr."));

// function add(a: number, b: number, c: number): number {
//   return a + b + c;
// }

// console.log(add(23, 8, 89));

// Rest Oparator In Function

// function add(...values: number[]): number {
//   return values.reduce((a, b) => a + b);
// }

// console.log(
//   add(
//     23,
//     8,
//     89,
//     23,
//     8,
//     89,
//     23,
//     8,
//     89,
//     23,
//     8,
//     89,
//     23,
//     8,
//     89,
//     23,
//     8,
//     89,
//     23,
//     8,
//     89,
//   ),
// );

// [1, 2, 4, 6, 7, 8]
// a = 0, b = 1 => a = 1
// a = 1, b = 2 => a = 3
// a = 3

// Filter on Array
// const arr = [1, 2, 4, 6, 7, 8];
// Simple Solution
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//   const value = arr[i];

//   if (value && value <= 6) {
//     result.push(value);
//   }
// }

//  array => 6 & greater than 6

//  Mentos Solution

// const result = arr.filter((val) => val >= 6);

// [6, 7, 8]
//  value = 1 >= 6 -> false
// value = 6 >= 6 -> true -> [6]
// console.log(result);
