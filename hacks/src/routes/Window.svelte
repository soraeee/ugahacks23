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
				
}
	
</script>
<div id="app">
	<h1>Upload Image</h1>
	<grid>
		{#if avatar}
			<img src="{avatar}" alt="avatar" width="70px" height="70px"/>
		{/if}
		<img class="upload" src="https://static.thenounproject.com/png/625182-200.png" alt="" on:click={()=>{fileinput.click();}} width="80px"/>
        <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
	</grid>
</div>
<style>
	h2 {
		  font-size: 2rem;
		  text-align: center;
	  }
</style>
  
<h2>{message}</h2>