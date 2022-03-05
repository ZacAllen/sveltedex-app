<script>
    import {Container, Row, Col, Button} from 'sveltestrap'
    export let type1;
    export let type2;
</script>

<div id="type">
    <Row>
        <Col>
            <div class="typeContainer text-center">
                <h1 class="typeText">{type1}</h1>
            </div>
        </Col>
        <Col>
            <div class="typeContainer text-center">
                <h1 class="typeText">{type2}</h1>
            </div>
        </Col>
    </Row>
</div>