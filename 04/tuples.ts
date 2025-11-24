// const user: (string | number)[] = [1, "hc"]
let tUser: [string, number, boolean]

tUser = ["hc", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type tUser = [number, string]

const newUser: tUser = [112, "example@google.com"]

newUser[1] = "hc.com"
newUser.push(true) 



export {}