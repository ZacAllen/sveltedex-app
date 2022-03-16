<script>
    import {Container, Row, Col, Button} from 'sveltestrap'
    import Typeahead from "svelte-typeahead";
    export let data;
    export let selectedPkmn = "";
    let logo = 'logo.png'
    
  const extract = (pkmn) => pkmn.Name;

    function returnHome() {
        selectedPkmn = "";
    }

  $:console.log("In searchbar: " + selectedPkmn)

  
</script>

<style>
    #scrollItems {
        color: rgb(0, 0, 0);
    } 
    :global(.searchbarContainer) {
        position: fixed;
        height: 8vh;
        background-color: var(--mainRed);
        margin: 0 !important;
    }
    .searchbar {
        margin-right: 5%;
        margin-left: 2%;
        margin-top: 10px;
    }
    #searchbarLogo {
        width: 80%;
        margin-top: 10%;
        cursor: pointer;
    }
    .homeButton {
       
    }
    @media screen and (max-width: 560px) {
        #searchbarLogo {
            width: 35px;
        }
        .searchbar {
            margin-left: 5%;
            margin-top: 0;
        }
        :global(#logoContainer) {
            width: 8.33%;
        }
    }
    :global(#pkmnList) {
        background-color: rgba(0, 0, 0, 0);
        color: black;
        font-family: var(--mainFont);
        font-size: 1.5rem;
        line-height: 0px;
        width: 100%;
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom: 5px solid white;
    }       :global(#pkmnList:focus) {
                outline: none;
            }
    :global([data-svelte-search] label) {
        display: none !important;
    }
    :global([data-svelte-typeahead]) {
        background-color: rgba(0, 0, 0, 0) !important;
        /* background-color: var(--mainRed) !important; */
        
    }
    :global(.svelte-typeahead-list.svelte-typeahead-list) {
        max-height: 30vh !important;
        overflow-y: scroll;
        border-radius: 10px;
    }
    :global(.svelte-j5n77y.svelte-j5n77y) {
        border-bottom: none !important;
        background-color: white;
        
    }
    :global(ul.svelte-j5n77y) {
        margin-top: 2%;
        box-shadow: 10px 5px black !important;
    }
    :global(.svelte-j5n77y::-webkit-scrollbar) {
        width: 10px;
    }
    :global(.svelte-j5n77y::-webkit-scrollbar-track) {
        background: white;
    }
    :global(.svelte-j5n77y::-webkit-scrollbar-thumb) {
        background: #888;
    }
    
    :global(option) {
        background-color: #54E250;
    }
    ::-webkit-calendar-picker-indicator {
        display: none;/* remove default arrow */
        visibility: hidden;
    }
    :global(#logoContainer) {
        width:5%;
    }
</style>

<Container fluid class="searchbarContainer">
    <Row>
        <Col lg="1" xs="2" id="logoContainer" style="margin:auto;">
            <div class="homeButton text-center align-middle">
                <a on:click={returnHome}><img id="searchbarLogo" src={logo} alt="Sveltedex Logo"></a>
            </div>
        </Col> 
        <Col lg="11" xs="10">   
                <div class="searchbar">
                    <Typeahead {data} {extract}  let:result id="pkmnList" on:select={({detail}) => selectedPkmn = detail.selected.toLowerCase()}>
                        <div id="scrollItems">
                            {@html result.string}
                        </div>
                    </Typeahead>
                </div>
        </Col>
    </Row>
</Container>
