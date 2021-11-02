<template>
	<main>
		<ProductBuy />

		<ProductFeedback />
	</main>
</template>

<script>
export default {
	head() {
		return  {
			title: 'Produto | Void X',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Void X. Faça a melhor aquisição de sua vida!'
				},

				// Open Graph
				{
					property: 'og:title',
					content: 'Produto | Void X'
				},
				{
					property: 'og:site_name',
					content: 'Produto | Void X'
				},
				{
					property: 'og:description',
					content: 'Void X. Faça a melhor aquisição de sua vida!'
				}
			]
		}
	}
}
</script>