<script lang="ts">
	import Map from './Map.svelte';
	import Window from './Window.svelte'
	import { info } from "./stores.js"
	import type { PageData } from './$types';

	let content: any;
	let markerList: any[] = [];

	info.subscribe(con => {
		content = con;
	})



  export let data: PageData
	// // let pinboard = data.data.pinboard2;
	// export let pinboard = data.data.pinboard2;
    // console.log("Exported pinboard")
</script>

<svelte:head>
	<title>PictoMap</title>
	<script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
	<script type="module" src="./index.js"></script>
	<meta charset="utf-8" />
	<link rel="icon" href="%sveltekit.assets%/favicon.png" />
	<meta name="viewport" content="width=device-width" />
	<script defer async
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCbMzyBz7JU4pJgad35mYahE67zqJOqtlA">
	</script>
</svelte:head>

<section>
	<div class="layer1"></div>
	<div class = "title">PictoMap</div>
	
<!--<a href="#" class="button">UPLOAD</a>-->
</section>
<div id="map"></div>

<style>
	:global(body) {
		padding: 2.5%;
	}
	.main {
		display: flex;
		flex-direction: row;
		padding: 25px;
		background-color: #202731;
	}
	.sv {
		position: responsive;
		text-align: center;
	}
	.title {
		text-align: center;
		font-family: 'Bebas Neue', cursive;
		font-size: 3.25em;
		font-weight: 600;
		display: inline-block;
		transform: scale(1.75, 1.5);
		font-family: 'IBM Plex Sans', sans-serif;
		color: white;
		text-shadow: 3px 3px #13252f;

		margin-bottom: 10px;
		margin-top: 20px;
	}
	h1 {
		text-align: center;
		font-family: 'Bebas Neue', cursive;
		font-size: 30px;
		display: inline-block;
		transform: scale(1.75, 1.5);
		font-family: 'IBM Plex Sans', sans-serif;
	}

	body {
		background-image: url('images/layered-waves.svg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		padding-top: 0px;
		font-family: 'IBM Plex Sans', sans-serif;
	}

	section {
		background-image: url('images/layered-waves.svg');
		background-size: cover;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 160px;
		width: 100%;
		margin: 0 auto;
		padding-top: 35px;
	}


	.button {
		position: absolute;
		top: 15px;
		right: 32px;
		font-family: 'IBM Plex Sans', sans-serif;
		background-color: none;
		border: 2px solid black;
		color: black;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		vertical-align: right;
		font-size: 16px;
		border-radius: 12px;
		box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2),  0 6px 20px 0 rgba(0,0,0,0.19);
	}
	
	.dingus {
		all: unset;
	}

	.credits {
		align-items: center;
		font-family: 'IBM Plex Sans', sans-serif;
		font-weight: 400;
		background-color: #202731;
		color: #FFFFFF;
		padding-bottom: 20px;

		display: flex;
		justify-content: center;
	}
</style>
<div class="main">
	<Map markerList = { markerList } pinboard = { data.pinboard }></Map>
	<Window message = { content } markerList = { markerList }></Window>
</div>
<div class = "credits">Made by Amelia, Andrew, Jason, Toni for UGAHacks 8</div>