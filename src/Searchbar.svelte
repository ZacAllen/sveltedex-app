<script>
    import {Container, Row, Col, Button} from 'sveltestrap'
    import Typeahead from "svelte-typeahead";
    export let data;
    export let selectedPkmn = "";
    
  const extract = (pkmn) => pkmn.Name;

  $:console.log("In searchbar: " + selectedPkmn)

  
</script>

<style>
    #scrollItems {
        color: rgb(0, 0, 0);
    }   
</style>

<Container fluid class="searchbarContainer">
    <Row> 
        <Col>   
                <div class="searchbar">
                    <Typeahead {data} {extract}  let:result id="pkmnList" on:select={({detail}) => selectedPkmn = detail.selected}>
                        <div id="scrollItems">
                            {@html result.string}
                        </div>
                    </Typeahead>
                </div>
        </Col>
    </Row>
</Container>
