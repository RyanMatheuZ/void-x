<template>
	<main>
		<header class="px-3">
			<h1 class="is-size-1-desktop is-size-3-mobile has-text-weight-semibold has-text-centered mb-4">
				Entre em contato
			</h1>
		</header>

		<ContactForm />

		<section class="px-3">
			<div>
				<h2 class="is-size-2-desktop is-size-4-mobile has-text-weight-semibold mx-auto mt-5 mb-3">
					Restam dúvidas?
				</h2>
			</div>

			<p class="is-size-3-desktop is-size-5-mobile has-text-centered">
				Procure <span class="has-text-weight-semibold purple-color">agendar</span> uma conversa com nossos especialistas!
			</p>
		</section>
	</main>
</template>

<script>
export default {
	head() {
		return {
			title: 'Contato | Void X',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Void X. Agende uma conversa com nossos especialistas!'
				},

				// Open Graph
				{
					property: 'og:title',
					content: 'Contato | Void X'
				},
				{
					property: 'og:site_name',
					content: 'Contato | Void X'
				},
				{
					property: 'og:description',
					content: 'Void X. Agende uma conversa com nossos especialistas!'
				}
			]
		}
	}
}
</script>