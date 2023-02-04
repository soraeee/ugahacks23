<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>dingus</p>

<script>
	import Map from './Map.svelte';
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
</style>

<Map></Map>