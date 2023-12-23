function setCookie(lastCity) {
	const oneHour = 3600;
	document.cookie = `lastCity=${lastCity}; path=/; max-age=${oneHour}`;
}

function getCookie() {
	const cityName = 1;
	return document.cookie.split('=')[cityName];
}

export { setCookie, getCookie };