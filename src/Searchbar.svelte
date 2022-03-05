<script>
    import {Container, Row, Col, Button} from 'sveltestrap'
    import Typeahead from "svelte-typeahead";
    export let data;
    export let selectedPkmn = "";
    
  const extract = (pkmn) => pkmn.Name;

  $:console.log("In searchbar: " + selectedPkmn)

  
</script>

<Container fluid class="searchbarContainer">
    <Row> 
        <Col>   
                <div class="searchbar">
                    <Typeahead {data} {extract}  id="pkmnList" on:select={({detail}) => selectedPkmn = detail.selected}/>
                </div>
        </Col>
    </Row>
</Container>
