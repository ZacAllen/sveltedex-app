<script>
    import {Container, Row, Col, Button} from 'sveltestrap'
    import NameAndNumber from './NameAndNumber.svelte'
    import Type from './Type.svelte'
    import Description from './Description.svelte'
    import HeightWeightAbility from './HeightWeightAbility.svelte';
    import Stats from './Stats.svelte'
    import LandingPage from './LandingPage.svelte';
    import axios from 'axios'
    import { onMount } from 'svelte';
    let tempImg = 'PokemonDataset/alakazam.png'
    let description = "";
    let number = "";
    let genera = "";
    let type1, type2;
    let stats;
    let height, weight, ability, abilityText;


    export let selectedPkmn = "";
    export let data;

    $:if (selectedPkmn) {
            axios.get('https://pokeapi.co/api/v2/pokemon-species/' + selectedPkmn.toLowerCase() +'/')
            .then(function (response) {
                var flavortextArray = response.data.flavor_text_entries;
                var flavortext = "";
                // console.log(response);
                for (var i = 0; i < flavortextArray.length; i++) {
                    if (flavortextArray[i].language.name=="en") {
                        flavortext = flavortextArray[i].flavor_text;
                    }
                }
                //In future release, have text selectable by version?
                description = flavortext;

                number = response.data.pokedex_numbers[0].entry_number + "."

                genera = response.data.genera[7].genus;
                var selectedPkmnData;
                
                selectedPkmnData = data.filter(data => data.Name == selectedPkmn)

                type1 = selectedPkmnData[0].Type1
                type2 = selectedPkmnData[0].Type2
                stats = {
                    HP: selectedPkmnData[0].HP,
                    Attack: selectedPkmnData[0].Attack,
                    Defense: selectedPkmnData[0].Defense,
                    SpAtk: selectedPkmnData[0].SpAtk,
                    SpDef: selectedPkmnData[0].SpDef,
                    Speed: selectedPkmnData[0].Speed
                }
                // console.log(selectedPkmnData)
            })
            .catch(function(error) {
                console.log(error)
            })

            axios.get('https://pokeapi.co/api/v2/pokemon/' + selectedPkmn.toLowerCase() + '/')
            .then(function (response) {
                height = parseFloat(response.data.height * 10).toFixed(1) + " cm";
                weight = parseFloat(response.data.weight * .01).toFixed(1) + " kg";
                ability = response.data.abilities[0].ability.name.toUpperCase();
                axios.get(response.data.abilities[0].ability.url)
                    .then(function(response) {
                        var abTextArray = response.data.effect_entries;
                        var flavorTextArray = response.data.flavor_text_entries;
                        if (abTextArray.length != 0) {
                            for (var i = 0; i < abTextArray.length; i++) {
                                if (abTextArray[i].language.name=="en") {
                                    abilityText = abTextArray[i].short_effect;
                                }
                            }
                        } else {
                            for (var k = 0; k < flavorTextArray.length; k++) {
                                if (flavorTextArray[k].language.name=="en") {
                                    abilityText = flavorTextArray[k].flavor_text;
                                }
                            }
                        }
                        
                    }).catch(function(error) {
                        console.log(error)
                    })
            })
            .catch(function(error) {
                console.log(error)
            })

            tempImg = 'PokemonDataset/' + selectedPkmn + '.png'
    }
    

</script>
<style>
    .dexWindow {
        /* height: 80vh; */
        background-color: #F4F4F4;
        margin: 3%;
        
    }

    #dexImage {
        width: 45%;
    }
    @media screen and (max-width: 560px) {
        #dexImage {
            width: 300px; /*Probably bad practice*/
        }
    }

</style>
{#if selectedPkmn == ""}
<div><LandingPage bind:selectedPkmn={selectedPkmn} data={data}/></div>
{/if}
{#if selectedPkmn != ""} 
<Container fluid>
    <Row>
        <Col>
            <div class="dexWindow">
            <!-- IMAGE, NAME, AND TYPE -->
                <Row>
                    <Col class="text-center">
                        <img id="dexImage" src={tempImg} alt={tempImg}>
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
                    <Col lg="5">
                        <Description desc={description}/>
                    </Col>
                    <Col lg="4">
                        {#if stats}
                        <Stats stats={stats}/>
                        {/if}
                    </Col> 
                    <Col lg="3">
                        <HeightWeightAbility height={height} weight={weight} ability={ability} abilityText={abilityText}/>
                    </Col>
                </Row>
            </div>
        </Col>
    </Row>
</Container>
{/if}
