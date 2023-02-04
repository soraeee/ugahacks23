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
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>dingus</p>

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
    console.log("Exported pinboard")
</script>

{#each data.data.pinboard2 as pin}
    <li>
      <h3>{pin.Name}</h3>
      <p>{pin.Lat}</p>
      <p>{pin.Lon}</p>
	  <img src="{pin.ImgFile}" alt="avatar" width="200px" height="200px"/>
      <p>{pin.Caption}</p>
	  <p>{pin.dateadded}</p>
    </li>
{/each}



<svelte:head>
	<script defer async
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCbMzyBz7JU4pJgad35mYahE67zqJOqtlA&callback=initMap">
	</script>
</svelte:head>

<style>
:global(body) {
	padding: 2.5%;
}
.main {
	display: flex;
	flex-direction: row;
}
.sv {
	position: responsive;
	text-align: center;
}
h1 {
    text-align: center;
    font-family: 'Bebas Neue', cursive;
    font-size: 30px;
    display: inline-block;
    transform: scale(2, 1.5);
}

	body {
		color: white;
		background-image: url("layered-waves.svg");
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		background-color: #202731;
		padding-top: 0px;
	}

	section {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 20px;
		padding: 5px 10vw;

	}


	.button {
		position: absolute;
		top: 15px;
		right: 32px;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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
</style>
<div class="main">
	<Map markerList = { markerList }></Map>
	<Window message = { content } markerList = { markerList }></Window>
</div>
