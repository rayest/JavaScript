class Student {
    fullName: string;

    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = this.firstName + " " + this.middleInitial + " " + this.lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Ray", "", "Lee");

document.body.innerHTML = greeter(user);