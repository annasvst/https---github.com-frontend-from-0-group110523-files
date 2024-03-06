interface User {
  id: number;
  name: string;
  age?: number;
}

const user1: User = { id: 1, name: "John" };
const user2: User = { id: 1, name: "Jane", age: 20 };

interface AdminUser extends User {
  superAdmin: boolean;
} 

const user3: AdminUser = { id: 1, name: "Jane", superAdmin: false };


type ID = string | number;

type Person = {
    id: ID;
    name: string;
    age?: number;
};

const person1: Person = { id: "123", name: "John" }; 
const person2: Person = { id: 123, name: "Jane", age: 30 }; 