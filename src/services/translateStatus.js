export const translateStatus = (status) => {
	switch (status) {
		case "Unknown":
			return "Неизвестен";
		case "Alive":
			return "Жив(а)";
		default:
			return "Числится мертвым";
	}
};
