import axios from 'axios'

// export const wordQuizApi = axios.create ( {
//       baseURL : 'https://twinword-word-association-quiz.p.rapidapi.com/type1/' ,
//       headers : {
//             'X-RapidAPI-Key' : 'd91bda661emsh33c1da8ab8b313dp1e4f67jsn6c933af012cc' ,
//             'X-RapidAPI-Host' : 'twinword-word-association-quiz.p.rapidapi.com'
//       }
// } );

export const wordQuizApi = axios.create ( {
      baseURL : 'http://localhost:3000/wordGame' ,
} );