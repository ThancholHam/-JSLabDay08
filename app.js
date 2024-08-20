// import { sayGoodbye,hi } from "./module1.js"
import * as say from "./module1.js";
import helloJS from "./module2.js";

function sayHi () {
    console.log('Hello modules')
}

// sayHi()
// sayGoodbye()
// hi()

say.hi()
say.sayGoodbye()

helloJS()