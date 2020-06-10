<script>
    import Link from "../components/Link.svelte";
    let navElement, svgElement;
    let show = false;
    let toggle = () => {
        //navElement.classList.toggle("show");
        show = !show;
    }
</script>

<style>
    div {
        display: flex;
    }
    svg {
        cursor: pointer;
        margin-top: 0.5rem;
        width: 32px;
        height: 32px;
        fill: white;
        z-index: 100;
    }
    nav {
        display: none;
        position: absolute;
        font-size: 1.5rem;
        left: -200px;
        width: 100px;
        background: rgba(200, 200, 200, 0.2);
        padding: 5rem;
    }
    nav.show {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        animation: slide 0.5s forwards;
        animation-delay: 0;
    }
    @keyframes slide {
        100% { left: 100px; }
    }
</style>
<div>
    {#if show}
        <svg viewBox="0 0 100 100" width="100" height="100" on:click={toggle}>
            <path stroke="white" stroke-width="12" stroke-linecap="square" d="M 10,10 90,90 M 10,90 90,10"/>
        </svg>
    {:else}
        <svg id="menu-icon" viewBox="0 0 32 32" on:click={toggle}>
            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
        </svg>
    {/if}
    <nav class:show={show}>
        <Link page={{name: "Hjem", path: "/"}} />
        <a href="#go-to-map" style="color: white">Kart</a>
        <Link page={{name: "Bestill", path: "/bestill"}} />
    </nav>
</div>