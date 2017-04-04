/**
 * 
 * Objects and functions
 * 
 * Objects and The Dot
 * 
 * Objects are collections of name - value pairs
 * 
 *                                         [Object]
 *                                            |
 *                                            |
 *           --------------------------------------------------------------------
 *          |                                 |                                  |
 * [Primitive "property"]              [Object "property"]            [Function "method"]
 * 
 */

var person = new Object();

// Operator is brackets
person['firstName'] = 'Ramasubbaiya';
person['lastName'] = 'Adaikkalam';

var firstNameProperty = 'firstName';

console.log(person);
console.log(person[firstNameProperty]);
console.log(person[firstNameProperty]);
console.log(person['firstName']);

person.address = new Object();
person.address.street = '630 Huron St';
person.address.city = 'London';
person.address.province = 'ON';

// preferred opertor - dot operator
console.log(person.address.street);

console.log(person['address']['province']);

/**
 * Object and Object Literals
 */

// shorthand of creating object
// This is faster in creating empty Object than new Object()
var person = {};

person = {
    firstName: 'Ramasubbaiya',
    lastName: 'Adaikkalam',
    address: {
        street: '630 Huron St',
        city: 'London',
        province: 'ON'
    }
};

console.log(person);

function hello(object) {
    console.log(object.firstName);
}

hello(person);

// create object on the fly!
hello({ firstName: 'Guna' });