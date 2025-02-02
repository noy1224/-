<template>
    <HeroRow text-alignment="center">
        <b-h level="2">
            Key Benefits
        </b-h>
    </HeroRow>
    <Row gutter="x-3" columns="1 md-2">
        <Col>
        <Card relative-height="100" class="un-transition-all un-ease-in-out hover:-un-translate-y-0.5"
            background-color="transparent">
            <Background img-src="/unsplash/image/480x220/dlxmedia-hu-U-W8FKeC6Mo-unsplash.jpg" relative-height="100"
                :overlay="true" overlay-color="white" overlay-alpha="0.6" :img-parallax="0.1" rounded>
            </Background>
        </Card>
        </Col>

        <Col padding="y-3">
        <Row>
            <Col col="md-6">
            <BIcon icon="bi:graph-up" text-color="primary" font-size="2" />
            <b-h level="4">
                Interactive Dashboards
            </b-h>
            <b-p text-color="secondary">
                Visualize your ideas and turn them into beautiful designs.
            </b-p>
            </Col>

            <Col col="md-6">
            <BIcon icon="bi:bar-chart-fill" text-color="primary" font-size="2" />
            <b-h level="4">
                Management Center
            </b-h>
            <b-p text-color="secondary">
                Organize and map out your projects efficiently.
            </b-p>
            </Col>

            <Col col="md-6">
            <BIcon icon="bi:lightbulb-fill" text-color="primary" font-size="2" />
            <b-h level="4">
                Data Insights
            </b-h>
            <b-p text-color="secondary">
                Gain deep insights into your data with our analytics engine.
            </b-p>
            </Col>

            <Col col="md-6">
            <BIcon icon="bi:lightning-charge-fill" text-color="primary" font-size="2" />
            <b-h level="4">
                Custom Analytics
            </b-h>
            <b-p text-color="secondary">
                Generate custom reports tailored to your business needs.
            </b-p>
            </Col>
        </Row>
        </Col>
    </Row>
</template>