<script>
    import {Container, Row, Col, Button} from 'sveltestrap'
    import NameAndNumber from './NameAndNumber.svelte'
    import Type from './Type.svelte'
    import Description from './Description.svelte'
    let tempImg = 'PokemonDataset/alakazam.png'
    
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
                                <NameAndNumber/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="8">       
                                <Type/>
                            </Col>
                            <Col lg="4">
                            
                            </Col>
                        </Row>
                    </Col>
                </Row>

            <!-- DESCRIPTION AND STATS -->
                <Row>
                    <Col lg="8">
                        <Description/>
                    </Col>
                    <Col lg="4">
                        <!-- <Stats/> -->
                    </Col>
                    
                </Row>
            </div>
        </Col>
    </Row>
</Container>