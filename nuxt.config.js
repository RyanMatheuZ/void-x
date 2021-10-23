export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Void X',
		htmlAttrs: {
			lang: 'pt-br'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'robots', content: 'index, follow' },
			{ name: 'subject', content: 'Venda de produto' },
			{ name: 'topic', content: 'Tecnologia' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'creator', content: 'Ryan Matheus de Oliveira' },
			{ name: 'generator', content: 'Visual Studio Code' },
			{ name: 'theme-color', content: '#222' },

			// Open Graph
			{ property: 'og:author', content: 'Ryan Matheus de Oliveira' },
			{ property: 'og:type', content: 'Loja virtual' },
		],
		link: [
			{ rel: 'icon', type: 'image/svg', href: '/favicon.svg' },
			{ rel: 'preconnect', href:'https://fonts.googleapis.com' },
			{ rel: 'preconnect', href:'https://fonts.gstatic.com' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
			}
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/css/global',
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/buefy
		'nuxt-buefy',
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
