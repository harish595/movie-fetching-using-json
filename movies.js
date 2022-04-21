// let inpt = document.getElementById("movies");
// let btn = document.querySelector(".btn1");
// btn.addEventListener('click', () => {
//   if (inpt.value === "") {
//     alert("please enter a movies name")
//   } else {
//     inpt.value=""
//   }
// })


// async function popcornMovie() {
//   let res = await fetch(
//     `http://www.omdbapi.com/?s=${inpt.value}&apikey=4fa0f3b3`
//   );
//   let data = await res.json();
//   console.log(data);
//   let output = data.Search;
//   console.log(output);
//   let div = document.getElementById("StoreMovies");
//   div.innerHTML = "";
//   output.map(x => {
//     div.innerHTML += `<div>
      
//       <img src=${x.Poster} alt=${x.Title}>
//       <h1>${x.Title}</h1>
//       <h2>${x.Year}</h2>
//         </div>`;
//   });
// }

// voice recognition
// function voice() {
//   var recognition = new webkitSpeechRecognition();
//   recognition.lang = "en-GB";

//   recognition.onresult = function (event) {
//     // console.log(event);
//     document.getElementById("movies").value =
//       event.results[0][0].transcript;
//   };
//   recognition.start();
// }
