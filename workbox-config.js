module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,svg,js,css,html}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'sw.js'
};