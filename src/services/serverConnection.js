import { BASE_URL, CHARACTERS, EPISODES } from "../constants/api";
import { limit } from "../constants/constants";

export class ServerConnection {
	// Все Персонажи -------------------------------->>>>
	static async fetchingChars(offset) {
		try {			
			let res = await fetch(`${BASE_URL}${CHARACTERS}?limit=${limit}&offset=${offset}`);
			if (!res.ok) {				
				return false;
			}
			return await res.json();
		} catch (err) {
			console.log(err.message);
			return false;
		}
	}
	// поиск --------------------------------------->
	static async fetchingSearch(search) {
		try {
			search = search.trim().toLowerCase();
			let res = await fetch(`${BASE_URL}${CHARACTERS}?name=${search}`);
			if (!res.ok) {				
				return false;
			}
			return await res.json();
		} catch (err) {
			console.log(err.message);
			return false;
		}
	}

	// Конкретный персонаж -------------------------------->>>>
	static async fetchingChar(id) {
		try {
			let res = await fetch(`${BASE_URL}${CHARACTERS}/${id}`)
			if (!res.ok) {
				console.log(res.error);
				return false;
			}
			return await res.json()
		} catch (err) {
			console.log(err.message);
			return false;
		}
	}

	// Эпизоды -------------------------------->>>>
	static async fetchingEpisodes() {
		try {
			
			let res = await fetch(`${BASE_URL}${EPISODES}`);
			if (!res.ok) {
				console.log(res.error);
				return false;
			}
			return await res.json();
		} catch (err) {
			console.log(err.message);
			return false;
		}
	}
	

}
