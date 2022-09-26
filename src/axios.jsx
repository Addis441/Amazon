import axios from 'axios';

const instance = axios.create({
	baseURL: "https://us-central1-project-eff29.cloudfunctions.net/api",
});
export default instance;


// http://localhost:5001/fir-9e294/us-central1/api