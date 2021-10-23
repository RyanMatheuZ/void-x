<template>
	<main>
		<header>
			<h1 class="has-text-weight-semibold has-text-centered mb-4">
				Entre em contato
			</h1>
		</header>

		<section>
			<form @submit.prevent="send" class="p-5">
				<div class="mx-auto mb-4">
					<b-field :type="{ 'is-danger': $v.name.$error }">
						<b-input
							placeholder="Nome:"
							v-model="$v.name.$model"
							type="text"
							icon="account"
							rounded
							title="Seu nome aqui"
							>
						</b-input>
					</b-field>

					<span v-if="$v.name.$error" class="has-text-danger">
						Informe seu nome corretamente!
					</span>

					<span v-if="!$v.name.minLength" class="has-text-danger">
						O mínimo de letras são {{ $v.name.$params.minLength.min }}!
					</span>
				</div>

				<div class="mx-auto mb-4">
					<b-field :type="{ 'is-danger': $v.email.$error }">
						<b-input
							placeholder="E-mail:"
							v-model="$v.email.$model"
							type="email"
							icon="email"
							rounded
							title="Seu email aqui"
						>
						</b-input>
					</b-field>

					<span v-if="$v.email.$error" class="has-text-danger">
						Informe um E-mail válido!
					</span>
				</div>

				<div class="mx-auto mb-4">
					<b-field :type="{ 'is-danger': $v.message.$error }">
						<b-input
							placeholder="Mensagem:"
							v-model="$v.message.$model"
							type="textarea"
							rounded
							title="Sua mensagem aqui"
						>
						</b-input>
					</b-field>

					<span v-if="$v.message.$error" class="has-text-danger">
						Informe sua mensagem corretamente!
					</span>

					<span v-if="!$v.message.minLength" class="has-text-danger">
						O mínimo são {{ $v.message.$params.minLength.min }} caracteres!
					</span>
				</div>

				<div class="mx-auto">
					<b-button
						native-type="submit"
						type="is-primary"
						icon-right="send"
						rounded
						title="Botão de envio"
					>
						Enviar
					</b-button>
				</div>

				<b-message
					title="Tudo certo!"
					type="is-success"
					aria-close-label="Close message"
					:class="{ 'd-none': messageBox }"
				>
					Sua mensagem foi enviada com sucesso, agradecemos a mensagem!
				</b-message>
			</form>

			<div class="map m-0 p-0">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.6771565227787!2d-48.37543615700471!3d-21.598521504227158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b91fc16f020435%3A0x58043798f6ebb54f!2sR.%20Rui%20Barbosa%2C%20140%20-%20Centro%2C%20Mat%C3%A3o%20-%20SP%2C%2015990-820!5e0!3m2!1spt-BR!2sbr!4v1632767789910!5m2!1spt-BR!2sbr" width="100%" height="300" title="Localização da Void X"></iframe>
			</div>
		</section>

		<section>
			<div>
				<h2 class="has-text-weight-bold mx-auto mb-3 mt-5">
					Restam dúvidas?
				</h2>
			</div>

			<p class="is-size-2 has-text-centered">
				Procure <span class="has-text-weight-semibold purple-color">agendar</span> uma conversa com nossos especialistas!
			</p>
		</section>
	</main>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength } from 'vuelidate/lib/validators'

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
				{ property: 'og:title', content: 'Contato | Void X' },
				{ property: 'og:site_name', content: 'Contato | Void X' },
				{ property: 'og:description', content: 'Void X. Agende uma conversa com nossos especialistas!' }
			]
		}
	},

	mixins: [ validationMixin ],

	data() {
		return {
			messageBox: true,
			name: '',
			email: '',
			message: ''
		}
	},

	validations: {
		name: { required, minLength: minLength(4) },
		email: { required, email },
		message: { required, minLength: minLength(20) }
	},

	methods: {
		send() {
			this.$v.$touch()

			if (this.$v.$invalid) return

			this.messageBox = false

			this.name = ''
			this.email = ''
			this.message = ''

			this.$v.$reset()
		}
	}
}
</script>

<style scoped>
	.d-none {
		display: none;
	}

	form {
		background-color: var(--black-color);
	}

	form div {
		max-width: 600px;
	}

	.message {
		bottom: 1%;
		max-width: 500px;
		position: fixed;
		right: 1%;
		transition: 0.4s ease;
		z-index: 2;
	}

	.map iframe {
		border-bottom: 3px solid var(--black-color);
	}
</style>