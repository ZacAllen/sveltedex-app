<script>
    import {Container, Row, Col, Button} from 'sveltestrap'
    export let type1;
    export let type2;

    $:if(type1) {
        let types = document.getElementsByClassName("typeContainer");
            types[0].style.backgroundColor = 'var(--' + type1 + ')';

            type2 == "" ? types[1].parentElement.style.visibility="hidden" : types[1].parentElement.style.visibility="visible" ; 
                types [1].style.backgroundColor = 'var(--' + type2 + ')'; 
             
    }
</script>

<style>
    :global(#type) {
        margin: 5%;
        box-shadow: 5px 5px black;
        background-color: white;
        font-family: var(--mainFont);
    }

    .typeContainer {
        background-color: blue;
        border-radius: 5px;
        margin: 5%;
        padding: 5%;
        color: white;
    }
    .typeText {
        /* font-size: 1.5em; */
        margin: auto;
    }
    @media screen and (max-width: 560px) {
    :global(#type) {
        
    }
    :global(#typeContainer) {
        margin-left: 2%;
        margin-right: 2%;
    }   
    .typeText {
        font-size: .8em;
    }
}
</style>

<div>
    <Row id="typeContainer">
        <Col id="type">
            <div class="typeContainer text-center">
                <h4 class="typeText">{type1}</h4>
            </div>
        </Col>
        <Col id="type">
            <div class="typeContainer text-center">
                <h4 class="typeText">{type2}</h4>
            </div>
        </Col>
    </Row>
</div>