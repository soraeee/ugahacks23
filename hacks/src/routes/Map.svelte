<script lang="ts">
	import Window from './Window.svelte';

	/**
	 * @type {any}
	 */
	let container: any;
	let map: any;
	let zoom = 2.5;
    let center = {lat: 0, lng: 0};

	export let markerList: any[] = [];
    
    import { onMount, getContext } from 'svelte';
	import { info, curMarker, createMarkerState } from './stores.js';

	let markerCount = 0;
	let state = false;
	createMarkerState.subscribe(b => state = b)

	// Change content displayed in Window.svelte
	const displayInfo = (content: any) => {
		info.update(() => content)
		//console.log(content)
	}
    
	// Add the map
	onMount(async () => {
		map = new google.maps.Map(container, {
            zoom,
            center,
			minZoom: 2.5
		});
		google.maps.event.addListener(map, 'click', function(event) {
			console.log(state)
				// Delete markers with no content added
				// kind of sucks because clicking on a marker with no content is really buggy and jank but whatever
				for (let i = 0; i < markerList.length; i++) {
					//console.log("kill")
					if (!markerList[i].hasContent) {
						markerList[i].marker.setMap(null)
						markerList = markerList.filter(item => item != markerList[i])
						markerCount -= 1;
					}
				}
			if (state) {
				displayInfo("Add an image to marker " + markerCount); // placeholder?
				placeMarker(event.latLng);
			}
		});
	});

	// Place a marker
	function placeMarker(location: any) {
		var marker = new google.maps.Marker({
			position: location, 
			map: map,
			zIndex: markerCount // this isn't garbage at all! this will cause no problems in the future! trust me!
		});

		// Add a listener to center the map on a clicked marker
		marker.addListener('click', () => {
			//displayInfo(event.latLng.lat() + ", " + event.latLng.lng());
			map.setZoom(6);
    		map.setCenter(marker.getPosition() as google.maps.LatLng);
		})

		// Changes the display info when a marker is clicked
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				displayInfo("This is marker " + i);
				curMarker.set(i);
			}
		})(marker, markerCount));

		// the only sane way i can think of identifying markers
		markerList.push({
			marker: marker,
			hasContent: false,
			images: [],
			id: markerCount
		});
		markerCount += 1;
	}
</script>
<style>
    .full-screen {
        width: 70%;
        height: 100vh;
    }
</style>

<div class="full-screen" bind:this={container}></div>
