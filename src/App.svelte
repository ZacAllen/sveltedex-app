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
        console.log(pkmnData)
    });
	
</script>
{#await fetchJson}
	<div class="text-center">Loading!</div>
{:then result}
	<Container fluid style="padding: 0;" {selectedPkmn}>
		<Searchbar data={pkmnData} bind:selectedPkmn={selectedPkmn}/>
		<DexContainer data={pkmnData} bind:selectedPkmn={selectedPkmn}/>
	</Container>
	
{/await}