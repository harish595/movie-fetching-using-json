
let inpt = document.getElementById('psw')

async function search() {
   let a = await fetch(
     `http://www.omdbapi.com/?s=${inpt.value}&apikey=4fa0f3b3`
  );
  let b = await a.json();
  console.log(b);
  let c = b.Search;
  console.log(c);
  let d = document.getElementById('storeValue')
  d.innerHTML = "";
  c.map(x => {
    d.innerHTML += `
    <div>
    <img src=${x.Poster}/>
    <h1>${x.Title}</h1>
    <h1>${x.Year}</h1>
    </div>
    `
  })
}