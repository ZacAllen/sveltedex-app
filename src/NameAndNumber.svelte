<script>
    import {Container, Row, Col, Button} from 'sveltestrap'
    export let name;
    export let number;
    export let genera;
    
</script>
<style>
    #nameAndNumber {
        margin: 5%;
        box-shadow: 15px 5px black;
        font-family: var(--mainFont);
    }
    :global(.nameTop) {
        background-color: var(--mainRed);
    }
    .name {
        font-size: 3rem;
        margin-top: 4px;
        
    }
    .number {
        font-size: 3rem;
    }
    @media screen and (max-width: 560px) {
        #nameAndNumber {
            margin: 10%;
        }
        .name {
            font-size: 1.5rem;
        } .number {
            font-size: 1.5rem;
        }
    }
    :global(.nameBottom) {
        background-color: white;
        padding: 10px;
        font-family: var(--tertiaryFont);
    }
    .number {
        color: white;
    }

</style>
<div id="nameAndNumber">
    <Row class="nameTop">
        <Col lg="3" xs="3">
            <h1 class="number">{number}.</h1>
        </Col>
        <Col lg="9" xs="9" class="">
            <h1 class="name">{name}</h1>
        </Col>
    </Row>
    <Row class="nameBottom">
        <Col>
            <h1 class="title">The {genera}</h1>
        </Col>
    </Row>

</div>