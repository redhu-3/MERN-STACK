async function  fetchApi()
{
    try{
        const response=await fetchApi('https://jsonplaceholder.typicode.com/users')
        const data=await response.json();
        data.map((user)=>
        {
            console.log(user.name)
        })
    }catch(err)
        {
              console.log(err);
        }
    
}
fetchApi();