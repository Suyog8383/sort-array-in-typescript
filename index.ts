import { Sorter } from "./Sorter";
// import { NumberCollection } from "./NumberCollection";
import { CharacterCollection } from "./CharacterCollection";

const characterCollection = new CharacterCollection("nagawade");
const sorter = new Sorter(characterCollection);
sorter.sort();
console.log(characterCollection.data);

// const numberCollection = new NumberCollection([50, 12, -14, 5, -2, 7, 9, -8]);
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(numberCollection.data);

// class Sorter {
//   constructor(public collection: number[]) {}
//   sort(): void {
//     const { length } = this.collection;
//     for (let i: number = 0; i < length; i++) {
//       for (let j: number = 0; j < length - i - 1; j++) {
//         if (this.collection[j] > this.collection[j + 1]) {
//           let temp = this.collection[j];
//           this.collection[j] = this.collection[j + 1];
//           this.collection[j + 1] = temp;
//         }
//       }
//     }
//   }
// }

// const sorter = new Sorter([12, 5, -2, 7, 9, -8]);
// sorter.sort();
// console.log(sorter.collection);
