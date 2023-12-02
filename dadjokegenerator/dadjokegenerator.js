const btnEl=document.getElementById("btn");
const jokeEl=document.getElementById("joke");
const apiKey="b1//JPJSRG4hH8x0Q2jJzQ==GjBdC9olMfxSXXOg";
const options={
    method:"GET",
    headers:{
        "X-API-Key":apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke(){
    try {
        jokeEl.innerText="Updating...";
        btnEl.disabled=true;
        btnEl.innerText="Loading...";
        const response = await fetch(apiURL, options);
        const data= await response.json();
        btnEl.disabled=false;
        btnEl.innerText="Tell me a joke";
        jokeEl.innerText=data[0].joke;
    } catch (error) {
        console.log(error);
        jokeEl.innerText="AN Error Occured Please Try Again";
        btnEl.disabled=false;
        btnEl.innerText="Tell me a joke";
        
    }
   
}
btnEl.addEventListener("click",getJoke);