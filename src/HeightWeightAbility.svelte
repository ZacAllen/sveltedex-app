<script>
    import {Container, Row, Col, Button} from 'sveltestrap'
    export let height = "";
    export let weight = "";
    export let ability = "";
    export let abilityText = "";

</script>

<div id="HWAbilityContainer">
    <h3 class="heightWeight">height: <span class="heightWeightText">{height}</span></h3>
    <h3 class="heightWeight">weight: <span class="heightWeightText">{weight}</span></h3>
    <h3 class="ability text-center">{ability}:<span class="abilityText"><br> {abilityText}</span> </h3>
</div>