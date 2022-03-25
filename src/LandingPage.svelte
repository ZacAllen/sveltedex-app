<script>
    import {Container, Row, Col, Button} from 'sveltestrap'
    export let selectedPkmn = "";
    export let data;
    let logo = 'logo.png'

    function selectRandom() {
        selectedPkmn = data[Math.floor(Math.random() * (data.length - 1))].Name.toLowerCase();
    }
</script>

<Container>
    <Row>
        <Col lg="3"></Col>
        <Col lg="6" style="margin-top: 10vh;">
            <Row>
                <Col>
                    <div class="logoContainer text-center">
                        <img id="logo" src={logo} alt="Sveltedex Logo">
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div class="text-center">
                        <h1 class="landingTitle">Search for a Pokemon by Name</h1>
                        <p class="landingSubtitle"><br>Or press the button below for a random Pokemon</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div class="text-center">
                        <Button class="surpriseMe" on:click={selectRandom}>Surprise Me!</Button>
                    </div>
                </Col>
            </Row>
        </Col>
        <Col lg="3"></Col>
    </Row>
</Container>
