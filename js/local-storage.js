function setterStorage(locations) {
	localStorage.setItem('favourite-location', JSON.stringify(...[locations]));
}

function getLocationFromStorage() {
	return JSON.parse(localStorage.getItem('favourite-location')) || [];
}

export { setterStorage, getLocationFromStorage }