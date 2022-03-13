<script>
	import DexContainer from "./DexContainer.svelte";
	import Searchbar from "./Searchbar.svelte";
	import {Container, Row, Col, Button} from 'sveltestrap'
	// let name = 'world';
	let pkmnData;
	let selectedPkmn = "";
	let fetchJson = fetch('PokemonDb.json').then(res => res.json())
    .then(pkmn => {
        pkmnData = pkmn;
        // console.log(pkmnData)
    });
	
</script>
{#await fetchJson}
	<div class="text-center">Loading!</div>
{:then result}
	<Container fluid style="padding: 0;" {selectedPkmn}>
		<Searchbar data={pkmnData} bind:selectedPkmn={selectedPkmn}/>
		<DexContainer data={pkmnData} bind:selectedPkmn={selectedPkmn}/>
	</Container>
	<Container fluid>
		<div class="footer text-center"><p id="footerText">Created by <a href="https://zachsallen.com" target={'_blank'}>Zach Allen</a></p></div>
	</Container>
	
	
{/await}