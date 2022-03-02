<script>
    import {Container, Row, Col, Button} from 'sveltestrap'
    import Typeahead from "svelte-typeahead";
    let data;
    let fetchJson = fetch('PokemonDb.json').then(res => res.json())
    .then(pkmn => {
        data = pkmn;
        // console.log(Array.isArray(pkmnData))
        console.log(data)
    });
    
  const extract = (pkmn) => pkmn.Name;

  
</script>

<Container fluid class="searchbarContainer">
    <Row> 
        <Col>
            {#await fetchJson}
            <div></div>
            {:then result}
                <div class="searchbar">
                    <Typeahead {data} {extract}  id="pkmnList"/>
                </div>
            {/await}
            
            
        </Col>
    </Row>
</Container>
