const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const Textarea = document.getElementById("wordhead");
const Textarea2 = document.getElementById("defined");
const Phonetics=document.getElementById("Phonetics2");
const btn = document.getElementById("searchbtn");
btn.addEventListener("click", () => {
  let inputword = document.getElementById("Searchinput").value;
  // let mean =data[0].meanings[0].definitions[0].definition;
  console.log(inputword);

  fetch(`${url}${inputword}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      Textarea.innerHTML = inputword;
      Textarea2.innerHTML= data[0].meanings[0].definitions[0].definition;
      Phonetics.innerHTML=data[0].phonetics[0].text;
    });
    
  //  Textarea2.innerHTML= mean;
});
