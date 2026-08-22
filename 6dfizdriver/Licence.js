const hasLicense = true;
const age = 20;
const isDrunk = false;

const canDrive = (hasLicense && age >= 18 && !isDrunk) ? 'может' : 'не может';

console.log(canDrive);