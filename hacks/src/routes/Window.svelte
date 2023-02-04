<script lang="ts">
	import { curMarker } from './stores.js';

	export let message = 'Default message';
	export let markerList: any[] = [];
	var cur = 0;
	curMarker.subscribe(c => {
		cur = c;
	})

	let avatar: any, fileinput: any, reader;
	
	const onFileSelected =(e: any)=>{
  	let image = e.target.files[0];
				reader = new FileReader();
				reader.readAsDataURL(image);
				reader.onload = e => {
					// @ts-ignore
					avatar = e.target.result
					//markerList[cur].content.push(avatar)
					markerList[cur].hasContent = true;
				};
				console.log(reader);
}
	
</script>
<div id="app">
	<grid>
		<h2>{message}</h2>
		<br>
		<h1>Upload Image</h1>
		{#if avatar} 
			<img src="{avatar}" alt="avatar" width="200px" height="200px"/>
		{/if}
		<img class="upload" src="https://static.thenounproject.com/png/625182-200.png" alt="" on:click={()=>{fileinput.click();}} width="80px"/>
		<br>
		<input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
	</grid>
</div>
<style>
	h2 {
		font-size: 2rem;
		text-align: center;
	}
	grid {
		align-items: center;
		position: relative;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		width: 450px;
		background-color: #202731;
	}
</style>
  
