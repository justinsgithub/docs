"use strict";
const tip = 'You’ll see that there are two syntaxes for building types: Interfaces and Types. You should prefer interface. Use type when you need specific features.';
const objectArray = [{ name: 'justin' }, { name: 'michael' }];
const myNames = ['justin', 'tyler', 'angeles', 'ward'];
function getLength(obj) {
    return obj.length;
}
const ensureArray = (obj) => {
    if (typeof obj === 'string')
        return [obj];
    return obj;
};
console.log(ensureArray('hello'));
console.log(getLength(tip));
console.log(getLength(myNames));
const exampleUser = {
    username: 'example',
    password: 'password',
    id: 1
};
class UserAccount {
    constructor(username, password, id) {
        this.username = username;
        this.password = password;
        this.id = id;
    }
}
const exampleUser2 = new UserAccount('justin', 'angeles', 26);
const getCurrentUser = () => {
    console.log('getting User');
    return exampleUser;
};
const deleteUser = (user) => {
    console.log(user);
    return user;
};
deleteUser(exampleUser);
