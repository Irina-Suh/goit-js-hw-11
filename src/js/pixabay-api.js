// //key (required) 	str 	Your API key: 48860281-d74be350dbe4d701146d01f08


import axios from 'axios';

const API_KEY = '48860281-d74be350dbe4d701146d01f08'; 
// const baseUrl = "https://pixabay.com";
// const endPoint = "/api";

export function searchImg(searchName) {
 
  const params = new URLSearchParams({
 

      key: API_KEY,
      q: searchName,
        image_type: 'photo',
        orientation: 'horizontal',
    safesearch: 'true',
         per_page: 10,

  });
  const url = `https://pixabay.com/api?${params}`;
 
  return  axios.get(url)

}


