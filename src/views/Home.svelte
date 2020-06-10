<script>
    import FacebookLogo from "../components/FacebookLogo.svelte";
    import InstagramLogo from "../components/InstagramLogo.svelte";
    import GoogleMaps from "../components/GoogleMaps.svelte";
</script>

<style>
    .logo {
		width: 50%;
	}
</style>

<p><img class="logo" src="assets/logo_medium_trans.png" alt="logo for Ritz Herrefrisør"></p>

<div class="info">
    <h2>FOSNAVÅG BRYGGE</h2>
    <h3>Tlf 908 06 036</h3>
    <h3>Mandag:&nbsp;stengt</h3>
    <h3>Tirsdag:&nbsp;10.00-16.30</h3>
    <h3>Onsdag:&nbsp;10.00-16.30</h3>
    <h3>Torsdag:&nbsp;10.00-18.00</h3>
    <h3>Fredag:&nbsp;10.00-16.30</h3>
    <h3>Lørdag:&nbsp;10.00-14.00</h3>
    <h1><a href="https://fixit.no/frisor/ritz-herrefrisor/1962">Bestill her</a></h1>
    <p><a href="https://www.facebook.com/ritzherrefrisor"><FacebookLogo /></a></p>
    <p><a href="https://www.instagram.com/ritzherrefrisor"><InstagramLogo /></a></p>
    
</div>

<GoogleMaps lat={62.342218} lng={5.633821} title="Salong Ritz Herrefrisør" />