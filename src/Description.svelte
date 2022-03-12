<script>
    import {Container, Row, Col, Button} from 'sveltestrap'
    export let desc = "";
</script>
<style>
    #descriptionContainer {
        background-color: white;
        max-height: 100%;
        margin: 5%;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .description {
        color: black;
        font-size: 1.2em;
        font-family: var(--secondaryFont);
        margin: 1em;
        max-height: 100%;
        overflow: hidden;
    }
    @media screen and (max-width: 560px) {
        .description {
            font-size: 1em;
        }
    }
</style>

<div id="descriptionContainer">
    <p class="description">{desc}</p>
</div>