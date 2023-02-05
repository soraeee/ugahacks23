<script lang="ts">
	import { curMarker, curLat, curLon, createMarkerState } from './stores.js';

	export let message = 'Default message';
	export let markerList: any[] = [];
	var cur = 0;
	curMarker.subscribe((c) => {
		cur = c;
	})

	let state = false;
	createMarkerState.subscribe(b => state = b)
	const toggleState = () => {
		createMarkerState.update(b => b = !state)
	}

	let avatar: any, fileinput: any, reader;
	let imageLink: string;

	const onFileSelected = (e: any) => {
		let image = e.target.files[0];
		reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			// @ts-ignore
			avatar = e.target.result;
			//markerList[cur].content.push(avatar)
			markerList[cur].hasContent = true;
		};
		console.log(reader);
	};

	const submitLink = (link: string) => {
		avatar = link;
	}
	
</script>

<div id="app">
	<grid>
		<h2>{message}</h2>
		<br>
		<div class = "marker-container">
			{#if !state}
				<div class = "toggle-button" on:click = {() => toggleState()}>Add marker</div>
			{:else}
				<div class = "toggle-button" on:click = {() => toggleState()}>Cancel</div>
			{/if}
		</div>
		<h1>Upload image link</h1>
		<input bind:value={imageLink}>
			<img src="{avatar}" alt="avatar" width="200px" height="200px"/>
			<div class = "submit-button" on:click = {() => submitLink(imageLink)}>Submit</div>
		<br>
		<input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
	</grid>
</div>

<style>
	h2 {
		font-size: 2rem;
		text-align: center;
		color: #FFFFFF;
		font-family: 'IBM Plex Sans', sans-serif;
	}
	h1 {
		font-size: 1rem;
		text-align: center;
		color: #FFFFFF;
		font-family: 'IBM Plex Sans', sans-serif;
	}
	grid {
		align-items: center;
		position: relative;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}
	.upload {
		width: 50px;
		filter: invert(100%);
	}
	.submit-button {
		background-color: #53606e;
		color: #FFFFFF;
		border-radius: 3px;
		text-align: center;
		margin-top: 10px;
		width: 20%;
		padding: 5px 15px 5px 15px;
		font-family: 'IBM Plex Sans', sans-serif;
		filter: drop-shadow(0 0 0.6rem #000000);
	}
	.submit-button:hover {
		cursor: pointer;
		filter: drop-shadow(0 0 0.6rem #13252f);
		background-color: #536b84;
	}
	.toggle-button {
		background-color: #53606e;
		color: #FFFFFF;
		border-radius: 3px;
		text-align: center;
		margin-top: 10px;
		width: 100%;
		padding: 5px 15px 5px 15px;
		font-family: 'IBM Plex Sans', sans-serif;
		filter: drop-shadow(0 0 0.6rem #000000);
	}
	.toggle-button:hover {
		cursor: pointer;
		filter: drop-shadow(0 0 0.6rem #13252f);
		background-color: #536b84;
	}

	.marker-container {
		margin: auto;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	#app {
		background-color: #0d1621;
		width: 30%;
	}
</style>
  
