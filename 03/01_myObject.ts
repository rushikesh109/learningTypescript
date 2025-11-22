const user = {
  name: "rushi",
  email: "r@r.com",
  isActive: true,
};

function createUser(): { name: string; email: string; isActive: boolean } {
  return {
    name: "rushi",
    email: "rushi@gmail.com",
    isActive: true,
  };
}


function createCourse(user: {
  name: string;
  isPaid: boolean;
//   email: string;
}) {}

let newUser = {
  name: "rushi",
  isPaid: false,
//   email: "rushi@gmail.com",
};

console.log(createCourse(newUser));




export {};
