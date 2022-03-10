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

<div>
    <Row>
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