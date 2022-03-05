<script>
    import {Container, Row, Col, Button} from 'sveltestrap'
    import NameAndNumber from './NameAndNumber.svelte'
    import Type from './Type.svelte'
    import Description from './Description.svelte'
    import axios from 'axios'
    import { onMount } from 'svelte';
    let tempImg = 'PokemonDataset/alakazam.png'
    let description = "";
    let number = "";
    let genera = "";
    let type1;
    let type2;


    export let selectedPkmn = "";
    export let data;

    $:if (selectedPkmn) {
            axios.get('https://pokeapi.co/api/v2/pokemon-species/' + selectedPkmn.toLowerCase() +'/')
            .then(function (response) {
                var flavortextArray = response.data.flavor_text_entries;
                var flavortext = "";
                console.log(response);
                for (var i = 0; i < flavortextArray.length; i++) {
                    if (flavortextArray[i].language.name=="en") {
                        flavortext = flavortextArray[i].flavor_text;
                    }
                }
                //In future release, have text selectable by version?
                description = flavortext;

                number = response.data.pokedex_numbers[0].entry_number + "."

                genera = response.data.genera[7].genus;
            })
            .catch(function(error) {
                console.log(error)
            })

            tempImg = 'PokemonDataset/' + selectedPkmn + '.png'
    }
    

</script>

<Container fluid>
    <Row>
        <Col>
            <div class="dexWindow">
            <!-- IMAGE, NAME, AND TYPE -->
                <Row>
                    <Col class="text-center">
                        <img id="dexImage" src={tempImg} alt="alakazam">
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <NameAndNumber name={selectedPkmn} number={number} genera ={genera}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="8">       
                                <Type type1={type1} type2={type2}/>
                            </Col>
                            <Col lg="4">
                            
                            </Col>
                        </Row>
                    </Col>
                </Row>

            <!-- DESCRIPTION AND STATS -->
                <Row>
                    <Col lg="8">
                        <Description desc={description}/>
                    </Col>
                    <Col lg="4">
                        <!-- <Stats/> -->
                    </Col>
                    
                </Row>
            </div>
        </Col>
    </Row>
</Container>