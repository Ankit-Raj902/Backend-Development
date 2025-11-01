class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    talk() {
        console.log(`Hey there I am ${this.name}`);
    }
};


class Student extends Person {
    constructor(name,age,marks){
        super(name,age); //parent class constructor is being called 
        this.marks=marks;
    }
}; 


class Teacher extends Person {
    constructor(name,age,subject){
        super(name,age); //parent class constructor is being called
        this.subject=subject;
    }
};

let stu1 = new Student ("Adam", "24", "70");
console.log(stu1);
stu1.talk();

let tea1 = new Teacher ("Simran","26","Science");


//new code

class Mammal {
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log("I am eating.");
    }

    bark(){
        console.log("woowh.....");
    }
};

class Dog extends Mammal {
    constructor(name){
        super(name);
    }
    eat(){
        console.log("Dog is eating.");
    }
    meow(){
        console.log("meooow..");
    }
};

class Cat extends Mammal {
    constructor(name){
        super(name);
    }
    eat(){
        console.log("Cat is eating.");
    }
};