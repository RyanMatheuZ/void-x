<template>
	<main>
		<HomeMain />

		<HomePresentation />

		<HomeSlanted />
		
		<HomeAbout />
	</main>
</template>

<script>
export default {
	head() {
		return {
			title: 'Início | Void X',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Void X. O futuro está te esperando!'
				},
				{
					name: 'url',
					content: 'https://void-x.vercel.app'
				},

				// Open Graph
				{
					property: 'og:title',
					content: 'Início | Void X'
				},
				{
					property: 'og:site_name',
					content: 'Início | Void X'
				},
				{
					property: 'og:description',
					content: 'Void X. O futuro está te esperando!'
				},
				{
					property: 'og:url',
					content: 'https://void-x.vercel.app'
				}
			]
		}
	}
}
</script>