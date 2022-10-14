export function getFromLS(key) {
	switch (key) {
		case "auth":
			return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : { auth: false, login: "" };
		case "commentsStore":
			return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
		default:
			return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
	}
}

export function setToLS(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}
