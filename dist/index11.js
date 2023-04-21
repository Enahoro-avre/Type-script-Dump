"use strict";
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'Hi there!';
}
const errorBag = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};
