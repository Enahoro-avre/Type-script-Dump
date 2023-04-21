interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

// user1 = {
//   name: 'Max',
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   }
// };

// user1.greet('Hi there - I am');


user1 = {
  name: 'Mitchell',
  age: 20,
  greet(phrase: String) {
    console.log(phrase  + " weds " + this.name)
  }
}

user1.greet('Precious')