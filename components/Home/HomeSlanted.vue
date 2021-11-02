<template>
	<section class="bg-black my-4 py-6 slanted-shape-box">
		<div>
			<h2 class="is-size-2-desktop is-size-4-mobile has-text-weight-semibold mx-auto mb-3">
				Por que ter um robô?
			</h2>

			<div class="is-flex is-justify-content-center is-flex-wrap-wrap py-3">
				<article
					v-for="(item, index) of cardItems"
					:key="index"
					class="card has-background-white p-4 mx-5 my-3"
				>
					<div>
						<img
							:src="getPicture(item.image)"
							:alt="item.name"
							:title="item.name"
							draggable="false"
							loading="lazy"
							width="50"
							height="50"
						>
					</div>

					<p class="is-size-4 card-header-title px-0 py-2">
						{{ item.name }}
					</p>

					<p class="is-size-6 content">
						{{ item.description }}
					</p>
				</article>
			</div>
		</div>
	</section>
</template>

<script>
import getPicture from '~/mixins/getPicture.js'

export default {
	data() {
		return {
			cardItems: [
				{
					image: 'icon/automation-icon.svg',
					name: 'Automação',
					description: 'Por que não automatizar seus afazeres'
				},
				{
					image: 'icon/friend-icon.svg',
					name: 'Amigo',
					description: 'Que tal um amigo de ferro'
				},
				{
					image: 'icon/agility-icon.svg',
					name: 'Agilidade',
					description: 'Mais agilidade em suas tarefas'
				}
			]
		}
	},

	mixins: [getPicture],
}
</script>

<style scoped>
	section.slanted-shape-box {
		transform: skewY(-3deg);
	}

	section.slanted-shape-box > div {
		transform: skewY(3deg);
	}

	article.card {
		transition: 0.3s ease;
		width: 200px;
	}

	article.card:hover {
		box-shadow: 0 0 20px var(--purple-color);
		transform: scale(1.03);
		transition: 0.3s ease;
	}
</style>