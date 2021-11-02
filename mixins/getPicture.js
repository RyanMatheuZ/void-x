export default {
	methods: {
		getPicture(picture) {
			return require(`~/static/${picture}`)
		}
	}
}