<template>
	<header>
		<b-navbar class="container p-4">
			<template #brand>
				<b-navbar-item
					tag="nuxt-link"
					:to="{ path: '/' }"
				>
					<figure class="image">
						<img src="../../static/logo/void-logo.svg" alt="Void X">
					</figure>
				</b-navbar-item>
			</template>

			<template #end>
				<b-navbar-item
					v-for="(item, index) in menuItems"
					:key="index"
					:to="item.path"
					tag="nuxt-link"
					class="has-text-weight-semibold"
				>
					{{ item.label }}
				</b-navbar-item>
			</template>
		</b-navbar>
	</header>
</template>

<script>
export default {
	data() {
		return {
			menuItems: [
				{ label: 'Início', path: '/' },
				{ label: 'Produto', path: '/product' },
				{ label: 'Sobre', path: '/#about'},
				{ label: 'Contato', path: '/contact' }
			]
		}
	}
}
</script>

<style>
	.navbar-menu {
		box-shadow: none;
	}

	.navbar-menu a.navbar-item {
		background-color: var(--white-color);
		border-radius: 5px;
		color: var(--black-color);
		font-size: 1.2rem;
		transition: 0.4s ease;
	}

	.navbar-menu a.navbar-item:hover {
		color: var(--purple-color);
		transition: 0.4s ease;
	}
</style>