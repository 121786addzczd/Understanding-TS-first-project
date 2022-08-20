type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

// interface ElevatedEmploee extends Employee, Admin {}

type ElevatedEmploee = Admin & Employee;

const e1: ElevatedEmploee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
}

type Combinable = string | number;
type Numeric = number | boolean;

type universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Hello', 'TypeScript');
result.split(' ');

const fetchedUserData = {
  id: 'u1',
  name: 'user1',
  job: {
    title: 'Developer',
    description: 'TypeScript',
  },
};

console.log(fetchedUserData?.job?.title);

const userInput = '';

const storedData = userInput ?? 'DEFAULT'; // NULL合体演算子

console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log(emp.name);
//   if ('privileges' in emp) {
//     console.log('Privileges: ' + emp.privileges);
//   }
//   if ('startDate' in emp) {
//     console.log('startDate: ' + emp.startDate);
//   }
// }

// printEmployeeInformation({ name: 'Manu', startDate: new Date() });

// class Car {
//   drive() {
//     console.log('運転中...');
//   }
// }

// class Truck {
//   drive() {
//     console.log('トラックを運転中...');
//   }

//   loadCargo(amount: number) {
//     console.log('荷物を載せています...' + amount);
//   }
// }


// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(Vehicle: Vehicle) {
//   Vehicle.drive();
//   if (Vehicle instanceof Truck) {
//     Vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: 'bird',
//   flyingSpeed: number;
// }

// interface Horse {
//   type: 'horse',
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//     case 'horse':
//       speed = animal.runningSpeed;
//   } 
//     console.log('移動速度: ' + speed);
// }

// moveAnimal({ type: 'bird', flyingSpeed: 10 });

// // const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
// const userInputElement = document.getElementById(
//   'user-input',
// // )! as HTMLInputElement; // Reactでよく使う
// );

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = 'こんにちは';  //!マークの代わりに使う方法
// }
// // userInputElement.value = 'こんにちは';

// interface ErrorContainer { // { email: '正しいメールアドレスではありません', username: 'ユーザー名に記号を含めることはできません。' }
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: '正しいメールアドレスではありません',
//   username: 'ユーザー名に記号を含めることはできません',
// };