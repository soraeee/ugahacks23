<script lang="ts">
	import { curMarker, curLat, curLon, createMarkerState, curImage } from './stores.js';

	export let message = 'Default message';
	export let markerList: any[] = [];
	let avatar: any, fileinput: any, reader;
	var cur = 0;
	curMarker.subscribe((c) => {
		cur = c;
	})
	curImage.subscribe((c) => {
		avatar = c;
	})

	let state = false;
	createMarkerState.subscribe(b => state = b)
	const toggleState = () => {
		createMarkerState.update(b => b = !state)
	}

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
			{#if !state}
				<div class = "marker-container">
					<div class = "toggle-button" on:click = {() => toggleState()}>Add marker</div>
				</div>
			{:else}
				<div class = "marker-container">
					<div class = "toggle-button" on:click = {() => toggleState()}>Cancel</div>
				</div>
				<h1>Upload image link</h1>
				<input bind:value={imageLink}>
					<div class = "submit-button" on:click = {() => submitLink(imageLink)}>Submit</div>
				<br>
			{/if}
			<img class="imgrep" src="{avatar}" alt="avatar" width="400px"/>
		<input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
	</grid>
</div>

<style>
	.imgrep {
		padding: 25px;
		width: 90%;
	}
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
		background-color: #202731;
		width: 30%;
	}
</style>
  
