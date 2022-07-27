<template>

	<h1>Counter - VueX</h1>
	<h2>Direct Access: {{ $store.state.counter.count }}</h2>
	<h2>Computed: {{ countComputed }}</h2>

	<button @click="increment">+1</button>
	<button @click="incrementBy">+5</button>
	<button @click="incrementRandomInt" :disabled="isLoading">Random</button>


	<h1>mapState</h1>
	<h2>{{ counter }}</h2>

	<h2>{{ lastMutation }}</h2>
</template>

<script>

import { mapState, mapActions } from "vuex";

export default {

	computed: {
		countComputed() {
			return this.$store.state.counter.count
		},
		// ...mapState({
		// 	counter: 'count',
		// 	lastMutation: 'lastMutation',
		// 	isLoading: "isLoading"
		// })
		...mapState( 'counter', [ 'count', 'lastMutation', 'isLoading' ] )
	},
	methods: {
		increment() {
			this.$store.commit( 'counter/increment' )
		},
		incrementBy() {
			this.$store.commit( 'counter/incrementBy', 5 )
		},
		/*...mapActions({
			randoInt: 'incrementRandomInt',
		})*/
		...mapActions('counter', ['incrementRandomInt'])
	}


}
</script>
