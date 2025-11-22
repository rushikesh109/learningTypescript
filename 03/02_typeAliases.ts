// type User = {
//     name: string;
//     email: string;
//     isActive : boolean
// } //this is type aliases 

// function createUser(user : User) : User {
//     return {
//         name: "",
//         email: "",
//         isActive : true
//     }
// }


// // createUser({name: "" , email: "", isActive: true})


//READONLY and Optional

type User = {
   readonly _id : number,
    name: string;
    email: string;
    isActive : boolean
}

let myuser : User = {
  
    _id: 1232,
    name: "rushi",
    email:"r@r.com",
    isActive :false
}


myuser.email = "rushi@gmail.com";
// myuser._id = q3423  --> gives error cause we declear this one read only 

type cardNumber = {
    cardnumber : string

}

type cardDate = {
   carddate : string
}

type cardDetails = cardNumber & cardDate & {
  cvv : number
} // HERE & is use to combine all this things toghter 


let userAccount: cardDetails = {
    cardnumber:"",
    carddate: "",
    cvv :2342,
};