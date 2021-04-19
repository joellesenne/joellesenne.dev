import React from 'react'

// components
import Button from '../../elements/Button'
import { Title } from '../../Typographies/StyledTypographies'
import { Content } from '../../views'
import { Grid, Col, Items, Item, Icon } from './Styled'
import { StyledProfile } from '../../elements/Profile/Styled'
import profileImg from '../../../medias/images/profile.jpg'

const SectionPage = () => (
  <Content>
    <Title>Biographie</Title>
    <Grid>
      <Col>
        <StyledProfile src={profileImg} alt="Joël Lesenne" />
      </Col>
      <Col>
        <Items>
          <Item>
            <Icon>👨‍💻</Icon>
            Je suis un développeur et intégrateur Web.
          </Item>
          <Item>
            <Icon>🇫🇷</Icon>
            Je suis né près de Lille(59), je vis à Lyon(69) France.
          </Item>
          <Item>
            <Icon>💻</Icon>
            Je crée des interfaces UX/UI originale et moderne.
          </Item>
        </Items>
      </Col>
    </Grid>
    <Button url="/a-propos" title="En savoir plus" />
  </Content>
)

export default SectionPage
