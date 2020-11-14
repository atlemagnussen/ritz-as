<script>
    import { onMount } from "svelte";
    import googleService from "../services/googleService.js";
    export let lat;
    export let lng;
    export let title;
    let element;
    let map;
    let pos;
    let pointer;
    onMount(() => {
        pos = { lat, lng };
        mapProperties.center = pos;
        map = new google.maps.Map(element, mapProperties);
        pointer = new google.maps.Marker({
            position: pos,
            map,
            title
        });
    });
    //let posString = pos.toString();

    const mapProperties = {
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        zoomControl: false,
        styles: googleService.getStyle(),
        backgroundColor: "hsla(0, 0%, 0%, 0)",
    };

</script>
<style>
    .map {
        text-align: center;
        height: 400px; /* The height is 400 pixels */
        width: 100%;
    }
</style>
<div name="map" class="map" bind:this={element}></div>