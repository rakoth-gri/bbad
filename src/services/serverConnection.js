import { BASE_URL, CHARACTERS, EPISODES } from "../constants/api";
import { limit } from "../constants/constants";

export class ServerConnection {
	// Все Персонажи -------------------------------->>>>
	static async fetchingChars(offset, search) {
		try {
			search = search.trim().toLowerCase();
			let res = await fetch(`${BASE_URL}${CHARACTERS}?limit=${limit}&offset=${offset}&name=${search}`);
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
