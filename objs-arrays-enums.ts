// const person: {
//     name: string;
//     age: number;
//     hobbbies: string[];
//     role: [number, string];
// } = {
//     name: 'yota',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author'],
// };
enum Role {
    ADMIN = 'ADMIN',
    READ_ONLY = 100,
    AUTHOR = 200,
}

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

const person = {
    name: 'yota',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}

if (person.role === Role.ADMIN) {
    console.log('管理者ユーザー');
}