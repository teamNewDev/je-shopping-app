module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{js,png,svg,css,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};