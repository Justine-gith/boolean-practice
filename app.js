//javascript_BOOLEAN
let isActive = true;
let inSubscribed = false;
console.log(isActive);
console.log(inSubscribed);


let isEmpty = Boolean('');
let isNotEmpty = Boolean('Helllo World');
console.log(isEmpty);
console.log(isNotEmpty);


let a = 5;
let b = 5;
let isGreater = a > b;
let isEquals = a == b;
console.log(isGreater);
console.log(isEquals);


let zero = 0;
let nonZero = 42;
console.log(Boolean(zero));
console.log(Boolean(nonZero));


let isAdult = true;
let hasPermission = false;
let canEnter = isAdult && hasPermission;
console.log(canEnter);


let obj = {};
let arr = [];
console.log(Boolean(obj));
console.log(Boolean(arr));