/* eslint-disable import/no-unresolved */
import React from 'react'

// elements
import { ButtonWrapper, Button } from 'components/elements/Button'
import { Title, Paragraph } from 'components/elements/Typographies'
import { Content } from 'components/views'
import { Avatar } from 'components/elements/Avatar'

// images
import avatarImg from '../../images/avatar.png'

const SectionPage = () => (
  <Content>
    <Title>A propos de moi</Title>
    <Avatar src={avatarImg} alt="Joël Lesenne" />
    <Paragraph>
      Je suis un développeur Front-End, j’ai la passion du code et des nouvelles technologies (React.js, Vue.js,
      Angular), je suis aussi, électricien de métier, photographe amateur, et assidue d’apprentissage continu.
    </Paragraph>
    <Paragraph>
      Je me d'écrit, comme un amoureux du code et des interfaces graphiques, comme un autodidacte avec l’envie
      d’apprendre et resté informer sur les nouvelles technologies. Pendant mes temps libres, j’aime faire de la
      photographie, j’aime développer mes photos et actuellement je m’intéresse à la vidéo. Bref, je suis un passionné
      du pixel.
    </Paragraph>
    <ButtonWrapper>
      <Button to="/a-propos">A-Propos</Button>
    </ButtonWrapper>
  </Content>
)

export default SectionPage
