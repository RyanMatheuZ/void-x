<template>
	<main>
		<section class="section">
			<div class="columns container is-fullhd mx-auto">
				<article class="column is-half is-full-tablet is-flex is-align-items-center is-justify-content-center">
					<img src="../static/img/robot-product.jpg" alt="Robô Doméstico para venda" title="Robô Doméstico para venda">
				</article>

				<article class="column is-flex is-align-items-center is-justify-content-center info">
					<div class="p-5">
						<header>
							<h1 class="is-size-1 has-text-weight-semibold">
								Robô Doméstico
							</h1>
						</header>

						<p class="is-size-5">
							A partir de:
							<span class="is-size-6">R$</span> 6.000,00
						</p>

						<h2 class="is-size-4 has-text-weight-bold mt-4">
							Cores disponíveis:
						</h2>

						<div class="choose-color is-flex">
							<article class="is-flex mt-5 mr-3 is-align-items-center is-justify-content-center white" title="Cor: branco">
								Branco
							</article>

							<article class="is-flex mt-5 is-align-items-center is-justify-content-center black" title="Cor: preto">
								Preto
							</article>
						</div>

						<p class="mt-4">
							<span class="has-text-danger has-text-weight-bold">*</span>
							Produto indisponível no momento
						</p>
					</div>
				</article>
			</div>
		</section>

		<section>
			<h2 class="has-text-weight-bold mx-auto mt-5">
				Avaliações
			</h2>

			<b-carousel>
				<b-carousel-item>
					<section>
						<div class="hero-body has-text-centered">
							<img src="../static/img/persons/person-one.png" alt="Cliente João Ribeiro" title="Cliente João Ribeiro">

							<p class="is-size-4 has-text-weight-bold">
								João Ribeiro
							</p>

							<p class="is-size-6 has-text-weight-bold mt-3 mb-4 purple-color">
								Desenvolvedor - Google
							</p>

							<p class="is-size-4 evaluation mx-auto">
								"Desde que me conheço como gente, sempre amei a tecnologia como um todo, desde a parte de programação até a eletrônica. O Robô Doméstico é um grande amigo nas horas vagas, saímos todo final de semana para fazer trilha. É um BAITA AMIGOO!!!"
							</p>
						</div>
					</section>
				</b-carousel-item>

				<b-carousel-item>
					<section>
						<div class="hero-body has-text-centered">
							<img src="../static/img/persons/person-two.png" alt="Cliente Ieda Gabriela" title="Cliente Ieda Gabriela">

							<p class="is-size-4 has-text-weight-bold">
								Ieda Gabriela
							</p>

							<p class="is-size-6 has-text-weight-bold mt-3 mb-4 purple-color">
								Designer - Amazon
							</p>

							<p class="is-size-4 evaluation mx-auto">
								"Durante várias horas, de semana em semana, sempre estudando e trabalhando, acabava
								não tendo tempo para nada. O Robô Doméstico serviu de babá para meus 3 filhos, me ajudou a preparar as refeições e muito mais. RECOMENDADÍSSIMO!"
							</p>
						</div>
					</section>
				</b-carousel-item>

				<b-carousel-item>
					<section>
						<div class="hero-body has-text-centered">
							<img src="../static/img/persons/person-three.png" alt="Cliente Thiago Ramos" title="Cliente Thiago Ramos">

							<p class="is-size-5 has-text-weight-bold">
								Thiago Ramos
							</p>

							<p class="is-size-6 has-text-weight-bold mt-3 mb-4 purple-color">
								Tech Lead - IBM
							</p>

							<p class="is-size-4 evaluation mx-auto">
								"Com a aquisição do Robô Doméstico tive mais agilidade durante o meu dia,
								recomendo demais. Fiz uso dele para limpeza, como despertador e por incrível
								que pareça, é um excelente mecânico!"
							</p>
						</div>
					</section>
				</b-carousel-item>
			</b-carousel>
		</section>
	</main>
</template>

<script>
export default {
	head() {
		return  {
			title: 'Product | Void X'
		}
	}
}
</script>

<style scoped>
	section.section {
		background-color: var(--black-color);
	}

	article.info > div {
		background-color: var(--white-color);
		border-radius: 20px;
		border: 1px solid var(--gray-color);
		width: -moz-fit-content;
		width: fit-content;
	}

	div.choose-color article {
		border-radius: 50%;
		border: 1px solid var(--gray-color);
		cursor: pointer;
		height: 80px;
		width: 80px;
	}

	div.choose-color .white {
		background-color: var(--white-color);
		color: var(--black-color);
	}

	div.choose-color .black {
		background-color: var(--black-color);
		color: var(--white-color);
	}

	p.evaluation {
		max-width: 500px;
	}
</style>