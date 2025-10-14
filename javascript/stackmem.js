console.log("first");
Promise.resolve().then(console.log("From promises"))
setTimeout(()=>
{
    console.log("Inside TimeOut");
},3000)
console.log("last");