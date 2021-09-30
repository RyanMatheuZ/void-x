<template>
	<footer>
		<svg viewBox="0 0 1440 320" class="slanted-shape">
  			<path d="M0,288L1440,192L1440,320L0,320Z"/>
		</svg>

		<div class="py-5 footer">
			<div class="is-flex is-justify-content-center">
				<nuxt-link :to="{ path: '/' }">
					<img src="../../static/logo/void-logo.svg" alt="Void X" title="Void X" width="100">
				</nuxt-link>
			</div>

			<div class="is-size-6 is-flex is-justify-content-center py-5">
				<ul class="is-flex is-justify-content-center is-flex-wrap-wrap">
					<li
						v-for="(item, index) of contactItems"
						:key="index"
						:title="item.title"
						class="has-text-white mx-2"
					>
						{{ item.label }}
					</li>
				</ul>
			</div>

			<p class="is-size-5 has-text-white has-text-centered" title="Copyright Void X">
				&copy; Void X - {{ currentYear }}
			</p>
		</div>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			currentYear: new Date().getFullYear(),

			contactItems: [
				{ label: 'R. Rui Barbosa, 140. Matão-SP', title: 'Endereço' },
				{ label: 'void@void.com.br', title: 'E-mail' },
				{ label: '(16) 98653-8754', title: 'Telefone' }
			]
		}
	}
}
</script>

<style>
	div.footer {
		background-color: var(--purple-color);
	}

	svg.slanted-shape {
		display: block;
		transform: translateY(5%);
	}

	svg.slanted-shape path {
		fill: var(--purple-color);
	}
</style>