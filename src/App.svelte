<script>
    export let name;
    import { curRoute, curSearchParam, docTitle } from "./store";
    curSearchParam.set(window.location.search);
    docTitle.set(name);
    import state from "./services/pagestate.js";
    // import Link from "./components/Link.svelte";

    import Container from "./Container.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        curRoute.set(window.location.pathname);
        if (!history.state) {
            window.history.replaceState({ path: window.location.pathname }, "", window.location.href);
        }
    });
    const handlerBackNavigation = (event) => {
        curRoute.set(event.state.path);
    }
</script>

<style>
	main {
		text-align: center;
	}

	.gmnoprint {
		background: transparent;
	}

	@media only screen and (max-width: 640px) {
		
	}
</style>
<svelte:window on:popstate="{handlerBackNavigation}" />
<main>
    <!-- <header>
        <nav>
            <Link page="{{ path: '/', name: 'Home' }}">
                <div class="logo">TRQ</div>
            </Link>
            <Link page="{{ path: '/plans', name: 'Plans' }}" color="white" />
            <Link page="{{ path: '/about', name: 'About' }}" color="white" />
        </nav>
        <Login />
    </header> -->
    
    <Container />
    
</main>
