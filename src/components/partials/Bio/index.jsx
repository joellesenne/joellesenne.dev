/* eslint-disable import/no-unresolved */
import React from 'react'

// components
import Button from '../../elements/Button'
import { Title, Paragraph } from '../../Typographies/StyledTypographies'
import { Content } from '../../views'
import { Grid, Col, Items, Item, Icon } from './StyledBio'
import { StyledAvatar } from '../../elements/Avatar/StyledAvatar'
import avatarImg from '../../../medias/images/avatar.png'

const SectionPage = () => (
  <Content>
    <Title>Biographie</Title>
    <Grid>
      <Col>
        <StyledAvatar src={avatarImg} alt="Joël Lesenne" />
      </Col>
      <Col>
        <Items>
          <Item>
            <Icon>👨‍💻</Icon>
            Bonjour, je suis un développeur et créateur Web
          </Item>
          <Item>
            <Icon>🇫🇷</Icon>
            Je suis né près de Lille(59), je vis près de Lyon(69) France.
          </Item>
          <Item>
            <Icon>💻</Icon>
            Je crée des interfaces UX/UI originale et moderne
          </Item>
        </Items>
      </Col>
    </Grid>
    <Button url="/a-propos" title="En savoir plus" />
  </Content>
)

export default SectionPage
