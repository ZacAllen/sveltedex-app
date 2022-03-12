<script>
    import {Container, Row, Col, Button} from 'sveltestrap'
    export let height = "";
    export let weight = "";
    export let ability = "";
    export let abilityText = "";

</script>
<style>
    #HWAbilityContainer {
    background-color: var(--mainRed);
    max-height: 100%;
    margin: 5%;
    overflow: hidden;
    border-radius: 10px;
    /* font-size: 22px; */
    }
    .heightWeight {
        font-family: var(--mainFont);
        margin: 1em;
    }
    .heightWeightText {
        color: white;
    }
    .ability {
        font-family: var(--mainFont);
        margin: 1em;
    }
    .abilityText {
        font-family: var(--secondaryFont);
        font-size: .5em;
        color: white;
    }

</style>
<div id="HWAbilityContainer">
    <p class="heightWeight">height: <span class="heightWeightText">{height}</span></p>
    <p class="heightWeight">weight: <span class="heightWeightText">{weight}</span></p>
    <h4 class="ability text-center">{ability}:<span class="abilityText"><br> {abilityText}</span> </h4>
</div>