//OBJECT LITEREL :-

let person = {
    first_Name: 'Arpit',
    last_Name: 'Pandey',

    // method
    getfunction: function() {
        return `The name of the person is ${person.first_Name} ${this.last_Name}`;
    },

    // OBJECT WITHIN OBJECT
    phone_number : {
        mobile: '12345',
        landline: '07662'
    }
}

console.log(person);
console.log(person.first_Name);
console.log(person.phone_number.landline);
console.log(person.getfunction()); 

