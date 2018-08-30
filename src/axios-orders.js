import axios from 'axios';


const instance = axios.create({
  //baseurl
  baseURL:'https://react-redux-burguer.firebaseio.com/'
});


export default instance;
