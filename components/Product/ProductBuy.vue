<template functional>
	<section class="section">
		<div class="columns container is-fullhd mx-auto">
			<article class="column is-half is-full-tablet is-flex is-align-items-center is-justify-content-center">
				<img
					src="~/static/img/robot-product.jpg"
					alt="Robô Doméstico para venda"
					title="Robô Doméstico para venda"
					draggable="false"
					loading="lazy"
				>
			</article>

			<article class="column is-flex is-align-items-center is-justify-content-center info">
				<div class="p-5">
					<header>
						<h1 class="is-size-1-desktop is-size-3-mobile has-text-weight-semibold">
							Robô Doméstico
						</h1>
					</header>

					<p class="is-size-5">
						A partir de:
						<span class="is-size-6">R$</span> 6.000,00
					</p>

					<h2 class="is-size-4 has-text-weight-semibold mt-4">
						Cores disponíveis:
					</h2>

					<div class="choose-color is-flex">
						<article
							class="is-flex mt-5 mr-3 is-align-items-center is-justify-content-center white" title="Cor: branco"
						>
							Branco
						</article>

						<article
							class="is-flex mt-5 is-align-items-center is-justify-content-center black"
							title="Cor: preto"
						>
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
</template>

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
		cursor: no-drop;
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
</style>