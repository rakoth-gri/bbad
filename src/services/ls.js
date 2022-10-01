export function getFromLS(key) {
	return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
}

export function setToLS(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}
