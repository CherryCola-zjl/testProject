<template>
	{{$store.count}}
</template>

<script>
export default {
	created() {
		this.$store.commit('increment')
	}
}
</script>

<style>
</style>
