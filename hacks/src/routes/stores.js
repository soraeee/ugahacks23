import { writable } from 'svelte/store';

export const info = writable("No location selected");
export const curMarker = writable(0);
export const lastImage = writable();

export const markerList = writable([]);

export const createMarkerState = writable(false);