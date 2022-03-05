<script>
    import {Container, Row, Col, Button} from 'sveltestrap'
    export let name;
    export let number;
    export let genera;
    
</script>

<div id="nameAndNumber">
    <Row class="nameTop">
        <Col lg="3">
            <h1 class="number">{number}</h1>
        </Col>
        <Col lg="9" class="text-center">
            <h1 class="name">{name}</h1>
        </Col>
    </Row>
    <Row class="nameBottom">
        <Col>
            <h1 class="title">The {genera}</h1>
        </Col>
    </Row>

</div>