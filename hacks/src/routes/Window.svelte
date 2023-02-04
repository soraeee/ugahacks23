<script>
	export let message = 'Default message';

	let  avatar, fileinput,reader;
	
	const onFileSelected =(e)=>{
  	let image = e.target.files[0];
				reader = new FileReader();
				reader.readAsDataURL(image);
				reader.onload = e => {
					avatar = e.target.result
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
		<hr width="100%">

		<grid class="dbimages">
			<h2>Current Saved Images</h2><br>
			<img src="{avatar}" alt="avatar" width="70px" height="70px"/>
		</grid>
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
  
