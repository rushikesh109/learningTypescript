

function twoNumber(num : number): number{      //)(num : number): number -> means is also return number not a string 
    return num + 5;
    // return "hello"
}

console.log(twoNumber(6));


function getUpperCase(value: string){

        return value.toLocaleUpperCase();
}

console.log(getUpperCase('hitesh'));


function signUpUser(name: string, email:string, isPaid :boolean= false ){
   return [name, email, isPaid]
}

console.log(signUpUser("rushi", "r@3.com" ,true));

const arrow = (s :string) : string => {
    return "";
}

const mandBhadak = [ "sakshi" , "kamble"];
console.log(mandBhadak);


const hy = mandBhadak.map((hapen: string): string => {
    return hapen.slice(3)
})

console.log(hy);


//error and handel error 

function error(msg: string) :void{  // void means the void no return any value or cant use return keyword
    console.log(msg);
}

function handelError (msg: string): never{   // NEVER means type represent values which are never observed in return type this means that function throws an exception or terminates of the program
    
    throw new Error(msg);
}

export {};