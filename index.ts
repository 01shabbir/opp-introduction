#!/usr/bin/env node
import inquirer from "inquirer";


class student {
    name : string;
    constructor (n:string){
        this.name = n;
    }
}

class person{
    students:student[] = [];

    addstudent(obj:student) {
        this.students.push(obj);
    }
}
const persons = new person();

console.log(persons)

const programstart = async(persons:person) =>{

do{console.log("welcome")

const ans = await inquirer.prompt({
    type:"list",
    message:"ap kis se bat krna chahen ge",
    name: "select",
    choices:["kud se:self", "students"]
})

if (ans.select == "kud se:self"){
    console.log("me typescript sekh raha hon")
    console.log("welcome shabbir Raza")
    console.log("Allah ne chaha tw kamyabi zaror mele gi")


}

if (ans.select == "students"){
    const ans = await inquirer.prompt({
        type:"input",
        message:"ap kis se bat krna chahn ge",
        name:"student",
  });

const student1 = persons.students.find ((val) => val.name == ans.student);

if (!student1) {
    const name = new student (ans.student);
    persons.addstudent(name);

    console.log(`hello i am ${name.name},or mein thik hon`);
    console.log(persons.students);

}

if (student1){
    console.log(`hello i am ${student.name}, or mein thik hon......`);
    console.log(persons.students);

}
}}while(true)
}

programstart(persons);

