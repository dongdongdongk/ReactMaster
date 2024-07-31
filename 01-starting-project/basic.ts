// Primitives

let age: number = 24;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// 배열 및 객체 유형

let hobbies: string[]

hobbies = ['Sports', 'Cooking', '12']


// let person: any;

let person: {
    name: string;
    age: number;
}

person = {
    name: 'Max',
    age: 32
}

// 객체 배열로 사용 
let people: {
    name: string;
    age: number;
}[];


// 

let course = 'React - The Complete Guide';

course = '12341';

function add2(a: number,b: number ) {
    return a + b;
}

// 제네릭

function insertAtBee<T>(array: T[],value: T ) {
    const newArray = [value, ...array]
    return newArray;
}

const demoArray = [1,2,3];

const updateArray = insertAtBee(demoArray, -1)