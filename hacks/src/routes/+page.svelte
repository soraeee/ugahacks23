  <head>
    <title>PictoMap</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="aesthetic.css" />
    <script type="module" src="./index.js"></script>
	<meta charset="utf-8" />
		<link rel="icon" href="%sveltekit.assets%/favicon.png" />
		<meta name="viewport" content="width=device-width" />
  </head>
  <body data-sveltekit-preload-data="hover">
	<div style="display: contents"></div>

	<section>
	<div class="layer1"></div>
    <h1>PictoMap</h1>
    
	<a href="#" class="button">UPLOAD</a>
	</section>
	<div id="map"></div>
  </body>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>dingus</p>

<script lang="ts">
	import Map from './Map.svelte';
	import Modal, { bind } from 'svelte-simple-modal';
	import Window from './Window.svelte'
	import { info } from "./stores.js"

	let content: any;
	let markerList: any[] = [];

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
	<Map markerList = { markerList }></Map>
	<Window message = { content } markerList = { markerList }></Window>
</div>
