<script lang="ts">
	import { curMarker, curLat, curLon, createMarkerState, curImage } from './stores.js';

	export let message = 'Default message';
	export let markerList: any[];
	let avatar: any, fileinput: any, reader;
	var cur = 0;
	curMarker.subscribe((c) => {
		cur = c;
	});
	curImage.subscribe((c) => {
		avatar = c;
	});

	let state = false;
	createMarkerState.subscribe((b) => (state = b));
	const toggleState = () => {
		createMarkerState.update((b) => (b = !state));
	};

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

	async function doPost(link: string) {
		// var data = JSON.stringify({
		// 	collection: 'pinboard',
		// 	database: 'pinboard',
		// 	dataSource: 'Cluster0',
		// 	projection: {
		// 		_id: 1
		// 	}
		// });

		// const response = await fetch(
		// 	'https://data.mongodb-api.com/app/data-cnpwq/endpoint/webhook',
		// 	{
		// 		method: 'POST',
		// 		mode: 'no-cors',
		// 		body: JSON.stringify({
		// 			collection: 'pinboard',
		// 			database: 'pinboard',
		// 			dataSource: 'Cluster0',
		// 			document: {
		// 				Name: 'Johnathan Doeseph',
		// 				Caption: 'Image',
		// 				ImgFile: link,
		// 				lad: curLat,
		// 				lon: curLon,
		// 				dateadded: new Date().toString()
		// 			}
		// 		}),
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 			'Access-Control-Request-Headers': '*',
		// 			'api-key': 'vBLQm5JcAzEiu9TAzFjFT7ASZDcbeicB77QnM8Bq1ZdcGoKK6SnnlMwXWAK57vCs'
		// 		}
		// 	}
		// );
		
		// const json = await response.json()
		// console.log(JSON.stringify(json))
	}

	const submitLink = (link: string) => {
		avatar = link;
		markerList[cur - 1].hasContent = true;
		markerList[cur - 1].images = [link];
		toggleState();
				// post(link);
		// doPost(link);
	};
</script>

<div id="app">
	<grid>
		<h2>{message}</h2>
		<br />
		{#if !state}
			<div class="marker-container">
				<div class="toggle-button" on:click={() => toggleState()}>Add marker</div>
			</div>
		{:else}
			<div class="marker-container">
				<div class="toggle-button" on:click={() => toggleState()}>Cancel</div>
			</div>
			<h1>Upload image link</h1>
			<input bind:value={imageLink} />
			<div class="submit-button" on:click={() => submitLink(imageLink)}>Submit</div>
			<br />
		{/if}
		{#if avatar}
			<img class="imgrep" src="{avatar}" alt="avatar" width="400px"/>
		{/if}
		<input
			style="display:none"
			type="file"
			accept=".jpg, .jpeg, .png"
			on:change={(e) => onFileSelected(e)}
			bind:this={fileinput}
		/>
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
		color: #ffffff;
		font-family: 'IBM Plex Sans', sans-serif;
	}
	h1 {
		font-size: 1rem;
		text-align: center;
		color: #ffffff;
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
		color: #ffffff;
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
		color: #ffffff;
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
