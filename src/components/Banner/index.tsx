import { Imagem, Precos, Titulo } from './style'
import Tag from '../Tag'

import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Button from '../Button'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Titulo>Marvel&apos;s Spider-man: Miler Morales PS4 & PS5</Titulo>
        <Precos>
          De <span>R$ 250,00</span>
          <br />
          por apenasR$ 99,90
        </Precos>
      </div>
      <Button
        type="link"
        to="/produto"
        title="Clique aqui para aproveitar essa oferta"
      >
        Aproveitar
      </Button>
    </div>
  </Imagem>
)

export default Banner
