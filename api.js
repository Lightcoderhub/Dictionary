const dictionary = (word) => {
  const url = 'https://random-word-api.p.rapidapi.com/get_word';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e775ea3349msh7b1c498d0f04abfp12cd1ejsnf68a686e02ae',
      'X-RapidAPI-Host': 'random-word-api.p.rapidapi.com'
    }
  };
  
  
  fetch('https://random-word-api.p.rapidapi.com/get_word' + word, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      wordhead.innerHTML = response.word;
      definition.innerHTML = response.definition;
      
    })
    .catch((error) => console.error(error));
};
searchbtn.addEventListener("click",(e)=>{
  e.preventDefault();
  dictionary(Searchinput.value)
  // document.write(dictionary(Searchinput.value));
  // document.getElementById("definition").innerHTML;
})