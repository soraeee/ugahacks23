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
}
	
</script>
<div id="app">
	<h1>Upload Image</h1>
		<img class="upload" src="https://static.thenounproject.com/png/625182-200.png" alt="" on:click={()=>{fileinput.click();}} />
        <div class="chan" on:click={()=>{fileinput.click();}}>Choose Image</div>
        <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
</div>
<style>
	h2 {
		  font-size: 2rem;
		  text-align: center;
	  }
</style>
  
<h2>{message}</h2>