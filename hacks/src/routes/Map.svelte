<script lang="ts">
	/**
	 * @type {any}
	 */
	let container: any;
	let map: any;
	let zoom = 8;
    let center = {lat: 0, lng: 0};
    
    import { onMount } from 'svelte';
    
	onMount(async () => {
		map = new google.maps.Map(container, {
            zoom,
            center,
		});
		google.maps.event.addListener(map, 'click', function(event) {
			placeMarker(event.latLng);
		});
	});

	function placeMarker(location: any) {
		var marker = new google.maps.Marker({
			position: location, 
			map: map
		});
	}
</script>
<style>
    .full-screen {
        width: 100vw;
        height: 100vh;
    }
</style>

<div class="full-screen" bind:this={container}></div>
