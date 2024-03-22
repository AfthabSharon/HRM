'use strict';

module.exports = {
  up: (models, mongoose) => {
   return models.users
   .insertMany([
    {
      "id":"65eb1a13212a3c1eb96cb993",
      "name":"salih",
      "email":"salih@gmail.com",
      "password":"$2a$12$LVEHeEgdfjYg0BvZI3qeFOcvb0bWhgZsZwevc2dXXOAEHlq9hcwW6",
      "Address":"ernakulam aluva"
    }
   ])
  },

  down: (models, mongoose) => {
   return models.users
   .deleteMany({
   _id:{
    $in:[
      "65eb1992401d27fa2973c2a5"
    ],
   },
   })
   .then((res)=>{
      console.log(res.deletedCount);
   });
  },
};
