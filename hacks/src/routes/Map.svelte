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

	let markerCount = 0;

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
		});
	});

	function placeMarker(location: any) {
		var marker = new google.maps.Marker({
			position: location, 
			map: map,
			zIndex: markerCount // this isn't garbage at all! this will cause no problems in the future! trust me!
		});
		marker.addListener('click', () => {
			//displayInfo(event.latLng.lat() + ", " + event.latLng.lng());
			map.setZoom(8);
    		map.setCenter(marker.getPosition() as google.maps.LatLng);
		})
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				displayInfo("This is marker " + i);
			}
		})(marker, markerCount));
		markerList.push(marker);
		markerCount += 1;
	}
</script>
<style>
    .full-screen {
        width: 70vw;
        height: 100vh;
    }
</style>

<div class="full-screen" bind:this={container}></div>
