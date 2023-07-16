// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   age() {
//     const date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// const s1 = new Student("Niladri", 12);
// // console.log(s1)
// const date1 = s1.age();
// console.log(date1);


//Before ES6
//let Student = function(name,age){
//   this.name = name;
//   this.age = age;
// }

// Student.prototype.printName =function(){
//   console.log(this.name)
// }

// let s1 = new Student("Niladri",3)
// let s2 = new Student("Rahul",1)



// console.log(s1)
// s1.printName()


// console.log(Student.prototype === s1.__proto__)


//After ES6
class Student{
  constructor(name,age){
    this.name = name
    this.age = age
  }

  printName(){
    console.log("My Name Is "+this.name)
  }

  get printAge(){
    console.log("My Age Is "+this.age)
  }

  set _setAge(age){
    this.age = age
  }
}

const s1 = new Student("Raj",11);
console.log(s1)
s1.printName()
//Getter method call korte hole () function parenthsesis lagate hoyna it acts as a property
s1.printAge
s1._setAge = 35
s1.printAge

class Baccha extends Student{
  constructor(name,age,paka)
  {
    super(name,age)
    this.paka=paka
  }
  printPaka(){
    console.log(this.name + " is " + this.paka)
  }
}

const b1 = new Baccha("Golu",6,"Vey Paka")
b1.printName()
b1.printPaka()