let arr=[13,15,20,35,27];
const div=arr.filter((n)=>{
    if(n%5==0)
    {
        return true;
    }
})
console.log(div);