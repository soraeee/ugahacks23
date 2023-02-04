<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>dingus</p>

<script lang="ts">
	import Map from './Map.svelte';
	import Modal, { bind } from 'svelte-simple-modal';
	import Window from './Window.svelte'
	import { info } from "./stores.js"

	let content: any;

	info.subscribe(con => {
		content = con;
	})
</script>

<svelte:head>
	<script defer async
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCbMzyBz7JU4pJgad35mYahE67zqJOqtlA&callback=initMap">
	</script>
</svelte:head>

<style>
:global(body) {
	padding: 0;
}
.main {
	display: flex;
	flex-direction: row;
}
</style>
<div class="main">
	<Map></Map>
	<Window message = { content }></Window>
</div>