type User = {
    name: string;
    email: string;
    isActive : boolean
} //this is type aliases d

function createUser(user : User) : User {
    return {
        name: "",
        email: "",
        isActive : true
    }
}


createUser({name: "" , email: "", isActive: true})
