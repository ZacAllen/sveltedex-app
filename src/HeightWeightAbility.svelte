<script>
    import {Container, Row, Col, Button} from 'sveltestrap'
    export let height = "";
    export let weight = "";
    export let ability = "";
    export let abilityText = "";

</script>

<div id="HWAbilityContainer">
    <p class="heightWeight">height: <span class="heightWeightText">{height}</span></p>
    <p class="heightWeight">weight: <span class="heightWeightText">{weight}</span></p>
    <h4 class="ability text-center">{ability}:<span class="abilityText"><br> {abilityText}</span> </h4>
</div>