const fetchApi=async()=>
{
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data= await response.json();
        data.map((user)=>
        {
            console.log(user.address.geo.lat)
        })
    }catch(err)
        {
              console.log(err);
        }
    
}
fetchApi();