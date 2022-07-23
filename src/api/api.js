import axios from 'axios';

export const getGeolocation = () => {
	return axios.get('https://geolocation-db.com/json/')
}