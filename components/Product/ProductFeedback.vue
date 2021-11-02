<template>
	<section>
		<h2 class="is-size-2-desktop is-size-4-mobile has-text-weight-semibold mx-auto mt-5">
			Avaliações
		</h2>

		<b-carousel>
			<b-carousel-item v-for="(item, index) of carouselItems" :key="index">
				<section>
					<div class="hero-body has-text-centered">
						<img
							:src="getPicture(item.image)"
							:alt="item.image"
							:title="item.name"
							draggable="false"
							loading="lazy"
						>

						<p class="is-size-4 has-text-weight-bold" title="Nome do(a) cliente">
							{{ item.name }}
						</p>

						<p class="is-size-6 has-text-weight-bold mt-3 mb-4 purple-color" title="Profissão">
							{{ item.profession }}
						</p>

						<p class="is-size-4-desktop is-size-6-mobile evaluation mx-auto" title="Descrição">
							{{ item.description }}
						</p>
					</div>
				</section>
			</b-carousel-item>
		</b-carousel>
	</section>
</template>

<script>
import getPicture from '~/mixins/getPicture.js'

export default {
	data() {
		return {
			carouselItems: [
				{
					image: 'img/persons/person-one.png',
				  	name: 'João Ribeiro',
					profession: 'Desenvolvedor - Google',
					description: '"Desde que me conheço como gente, sempre amei a tecnologia como um todo, desde a parte de programação até a eletrônica. O Robô Doméstico é um grande amigo nas horas vagas, saímos todo final de semana para fazer trilha. É um BAITA AMIGOO!!!"'
				},
				{
					image: 'img/persons/person-two.png',
				  	name: 'Ieda Gabriela',
					profession: 'Designer - Amazon',
					description: '"Durante várias horas, de semana em semana, sempre estudando e trabalhando, acabava não tendo tempo para nada. O Robô Doméstico serviu de babá para meus 3 filhos, me ajudou a preparar as refeições e muito mais. RECOMENDADÍSSIMO!"'
				},
				{
					image: 'img/persons/person-three.png',
				  	name: 'Thiago Ramos',
					profession: 'Tech Lead - IBM',
					description: '"Com a aquisição do Robô Doméstico tive mais agilidade durante o meu dia, recomendo demais. Fiz uso dele para limpeza, como despertador e por incrível que pareça, é um excelente mecânico!"'
				}
			]
		}
	},

	mixins: [getPicture],
}
</script>

<style scoped>
	p.evaluation {
		max-width: 500px;
	}
</style>