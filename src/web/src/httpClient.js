import axios from "axios";

const axiosEndPoint = axios.create({
	timeout: 10000,
	withCredentials: true
});

export default class HttpClient {
	constructor(endpoint){
		this.endpoint = endpoint;
	}

	get(path = "", callback = f =>f){
		axiosEndPoint
			.get(this.endpoint + path)
			.then(res => {
				callback(res);
			});
	}
    
	post(path = "", body = {}, callback = f=> f){
		axiosEndPoint
			.post(this.endpoint + path, body)
			.then(res => {
				callback(res);
			});
	}

	delete(path = "", callback = f => f){
		axiosEndPoint
			.delete(this.endpoint + path)
			.then(res => {
				callback(res);
			});
	}
}
