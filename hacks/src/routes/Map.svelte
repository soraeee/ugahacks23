<script lang="ts">
	import Window from './Window.svelte';

	/**
	 * @type {any}
	 */
	let container: any;
	let map: any;
	let zoom = 8;
    let center = {lat: 0, lng: 0};

	var markerList: any[] = [];
    
    import { onMount, getContext } from 'svelte';
	import { info } from './stores.js';

	const displayInfo = (content: any) => {
		info.update(() => content)
		console.log(content)
	}
    
	onMount(async () => {
		map = new google.maps.Map(container, {
            zoom,
            center,
		});
		google.maps.event.addListener(map, 'click', function(event) {
			placeMarker(event.latLng);
			markerList.push({
				"lat": event.latLng.lat(),
				"lng": event.latLng.lng(),
			})
		});
	});

	function placeMarker(location: any) {
		var marker = new google.maps.Marker({
			position: location, 
			map: map
		});
		marker.addListener('click', function(event) {
			displayInfo(event.latLng.lat() + ", " + event.latLng.lng());
			//console.log(event.latLng.lat());
		})
	}
</script>
<style>
    .full-screen {
        width: 70vw;
        height: 100vh;
    }
</style>

<div class="full-screen" bind:this={container}></div>
