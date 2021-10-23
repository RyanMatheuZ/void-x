<template>
	<main>
		<section class="section bg-black">
			<div class="columns container is-fullhd mx-auto">
				<article class="column is-half is-full-tablet is-flex is-align-items-center is-justify-content-center">
					<img src="../static/img/robot-black.jpg" alt="Robô" title="Robô">
				</article>

				<article class="column is-flex is-align-items-center is-justify-content-center">
					<div>
						<header>
							<h1 class="has-text-weight-semibold">
								ROBÔS SÃO O FUTURO
							</h1>
						</header>

						<span class="phrase">
							"Historicamente, a tecnologia sempre criou mais empregos do que destruiu e não
							há razão para achar que será diferente nesse caso"<span class="is-size-6">, <span class="purple-color">Vint Cerf</span></span>
						</span>
					</div>
				</article>
			</div>
		</section>

		<section class="section">
			<div class="columns container is-fullhd mx-auto">
				<article class="column is-half is-full-tablet is-flex is-align-items-center is-justify-content-center">
					<div>
						<h2 class="has-text-weight-bold mb-3">
							Robô Doméstico
						</h2>

						<p class="is-size-5 mb-3">
							O que você pensa sobre a ideia de <strong class="purple-color">robôs</strong>? Seria o fim da humanidade? Nós lhe asseguramos que nada disso acontecerá, ao logo do tempo cada vez mais a humanidade optou por, de certa forma, <strong class="purple-color">terceirizar</strong> suas <strong class="purple-color">tarefas</strong>.
						</p>

						<p class="is-size-5 mb-3">
							E nós <strong class="purple-color">apostamos</strong> nesse futuro... Trazendo para você, um produto capaz de <strong class="purple-color">mudar o mercado</strong> e como o <strong class="purple-color">mundo funciona!</strong>
						</p>

						<p class="is-size-5 mb-3">
							Por isso, nós iremos te <strong class="purple-color">apresentar</strong> a mais nova <strong class="purple-color">solução</strong> da <strong class="purple-color">Void X</strong> para <strong class="purple-color">seus problemas</strong>.
						</p>
					</div>
				</article>

				<article class="column is-flex is-align-items-center is-justify-content-center">
					<img src="../static/img/robot-construction.jpg" alt="Robô em fase de construção" title="Robô em fase de construção">
				</article>
			</div>
		</section>

		<section class="bg-black my-4 py-6 slanted-shape-box">
			<div>
				<h2 class="has-text-weight-bold mx-auto mb-3">
					Por que ter um robô?
				</h2>

				<div class="is-flex is-justify-content-center is-flex-wrap-wrap py-3">
					<article class="card has-background-white p-4 mx-5 my-3">
						<div>
							<img src="../static/icon/automation-icon.svg" alt="Automação" title="Automação" width="50" height="50">
						</div>

						<p class="card-header-title is-size-4 px-0 py-2">
							Automação
						</p>

						<p class="content is-size-6">
							Por que não automatizar seus afazeres
						</p>
					</article>

					<article class="card has-background-white p-4 mx-5 my-3">
						<div>
							<img src="../static/icon/friend-icon.svg" alt="Amigo" title="Amigo" width="50" height="50">
						</div>

						<p class="card-header-title is-size-4 px-0 py-2">
							Amigo
						</p>

						<p class="content is-size-6">
							Que tal um amigo de ferro
						</p>
					</article>

					<article class="card has-background-white p-4 mx-5 my-3">
						<div>
							<img src="../static/icon/agility-icon.svg" alt="Agilidade" title="Agilidade" width="50" height="50">
						</div>

						<p class="card-header-title is-size-4 px-0 py-2">
							Agilidade
						</p>

						<p class="content is-size-6">
							Mais agilidade em suas tarefas
						</p>
					</article>
				</div>
			</div>
		</section>

		<section id="about" class="section pb-0">
			<div class="container is-max-desktop">
				<h2 class="has-text-weight-bold mx-auto mb-3">
					Sobre nós
				</h2>

				<p class="is-size-5 mb-3">
					A <strong class="purple-color">Void X</strong> é líder em tecnologia, ajudando clientes a usufruir do poder da inovação para prosperar em tempos de mudança. Nascida no Brasil, por meio de uma ideia revolucionária, vem cada vez mais ganhando espaço no mercado.
				</p>

				<p class="is-size-5 mb-3">
					A independência tecnológica da <strong class="purple-color">Void X</strong>, os talentos globais, a expertise e a extensa aliança com parceiros foram combinados para entregar as mais poderosas soluções e serviços da próxima geração. A <strong class="purple-color">Void X</strong> é reconhecida entre as melhores empresas com práticas de cidadania.
				</p>
			</div>
		</section>
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
				{ property: 'og:title', content: 'Início | Void X' },
				{ property: 'og:site_name', content: 'Início | Void X' },
				{ property: 'og:description', content: 'Void X. O futuro está te esperando!' },
				{ property: 'og:url', content: 'https://void-x.vercel.app' }
			]
		}
	}
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