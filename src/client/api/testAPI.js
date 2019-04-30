import axios from 'axios';

// export const fetchAllTests = () => {
//   return $.ajax({
//     method: 'GET',
//     url: 'api/recipes'
//   });
// };
export const fetchAllTests = axios.get('http://localhost:3000/test/questionsTest')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });