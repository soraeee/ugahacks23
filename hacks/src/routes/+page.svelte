<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>dingus</p>

<script lang="ts">
	import Map from './Map.svelte';
	import Window from './Window.svelte'
	import { info } from "./stores.js"
	import type { PageData } from './$types';

	let content: any;

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
      <p>{pin.ImgFile}</p>
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