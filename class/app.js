class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const s1 = new Student("Niladri", 12);
// console.log(s1)
const date1 = s1.age();
console.log(date1);

// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//     age() {
//       const date = new Date();
//       return date.getFullYear() - this.year;
//     }
//   }

//   const myCar = new Car("Ford", 2014);
//   let date= myCar.age()
//   console.log(date)
