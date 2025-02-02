<template>
    <HeroRow text-alignment="center">
        <b-h level="2">
            深められる４つのこと
        </b-h>
    </HeroRow>
    <Row gutter="x-3" columns="1 md-2">
        <Col>
        <Card relative-height="100" class="un-transition-all un-ease-in-out hover:-un-translate-y-0.5"
            background-color="transparent">
            <Background img-src="/unsplash/image/480x220/22977869.jpg" relative-height="100"
                :overlay="true" overlay-color="white" overlay-alpha="0.6" :img-parallax="0.1" rounded>
            </Background>
        </Card>
        </Col>

        <Col padding="y-3">
        <Row>
            <Col col="md-6">
            <b-h level="4">
                自然界の新たな発見
            </b-h>
            <b-p text-color="secondary">
                未確認生物が実際に存在する場合、新しい種が発見されることになります。これにより、現在知られていない生物の生態や進化の過程を理解する手がかりが得られるかもしれません。生物学的な知識の向上に寄与することができます。


            </b-p>
            </Col>

            <Col col="md-6">
            <b-h level="4">
                生態系の理解
            </b-h>
            <b-p text-color="secondary">
                未確認生物が生息している場所や環境を特定できれば、その地域の生態系についての新しい情報が得られる可能性があります。これにより、現存する動植物の関係や生態系のバランスについての理解が深まります。
            </b-p>
            </Col>

            <Col col="md-6">
            <b-h level="4">
                文化や伝承の背景の解明
            </b-h>
            <b-p text-color="secondary">
                伝説や神話に登場する未確認生物を研究することで、古代の文化や人々の自然観、宗教的な象徴などが明らかになることがあります。未確認生物が地域の歴史や民間伝承に与えた影響を理解する手がかりとなります。
            </b-p>
            </Col>

            <Col col="md-6">
            <b-h level="4">
                科学的証明と疑似科学の区別
            </b-h>
            <b-p text-color="secondary">
                未確認生物の存在が科学的に証明されれば、信じられてきた伝説や目撃情報が事実であったことになります。一方で、証拠が得られなければ、そうした話がどのように広まったのか、そして人々の心理や認識についての理解が深まります。
            </b-p>
            </Col>
        </Row>
        </Col>
    </Row>
</template>