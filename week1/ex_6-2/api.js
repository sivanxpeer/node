
//getting data from api with axios:

// const axios = require('axios');

// const fetch=async()=>{
// const {data} =await axios.get(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2`);
// console.log(data[1].text);
// }

// fetch();



//getting data from api with request module:
const request = require('request');

request(
    { url: `https://api.chucknorris.io/jokes/random` },
    (err, response) => {
        if (err) { console.log(err) }
        else {
            console.log(JSON.parse(response.body).value)
        }

    }
)
    
// fetch();
