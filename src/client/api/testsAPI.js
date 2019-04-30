import axios from 'axios';

//not manipulating any data so don't need try/catch
export const fetchAllTests = async () => await axios.get('http://localhost:3000/test/questionsTest')
