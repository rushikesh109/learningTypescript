function detectType(val: number | string) {
    if(typeof val === "string"){
        return val.toLowerCase
    }
    return val + 3
}

function provideId(id: string | null) {
    if(!id){
        console.log("Please provide ID");
        return
    }
    id.toLowerCase()
}

//DOCS EXAMPLE

function printAll(strs: string | string[] | null){
    if(strs){
        if(typeof strs === "object"){
            for(const s of strs){
                console.log(s);
            }
        }else if (typeof strs === "string"){
            console.log(strs);
        }

    }
}



//IN OPERATOR IN TYPE NORROWING

interface user {
    name: string,
    email: string,
}

interface admin{
    name: string,
    email: string,
    isAdmin : boolean
}

function isAdminPresent (account: admin | user){
    if("isAdmin" in account){
        return account.isAdmin
    }
    
}