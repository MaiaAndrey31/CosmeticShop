import {
  Collum,
  Container,
  Content,
  Link,
  Spacer,
  Text,
  Title,
  Icons,
  TextCopy
} from './styles'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <Container>
      <Spacer />
      <Content>
        <Collum>
          <Title>Compre</Title>
          <Link>Todos os produtos</Link>
          <Link>Novidades</Link>
          <Link>Mais vendidos</Link>
          <Link>Lábios</Link>
          <Link>Olhos</Link>
          <Link>Rosto</Link>
        </Collum>
        <Collum>
          <Title>Nossa Loja</Title>
          <div>
            <Text>Rua Prates, 194 - Bom Retiro</Text>
            <Text>São Pualo - SP, 01121-000</Text>
          </div>
          <div>
            <Text>Segunda a Sexta: 11:00 às 22:00</Text>
            <Text>Sábado e Domingo: 11:00 às 00:00</Text>
          </div>
          <div>
            <Text>Tel: (11) 3456-7890</Text>
            <Link>Email: info@meusite.com</Link>
          </div>
        </Collum>

        <Collum>
          <Title>Políticas</Title>
          <Link>Entregas e devoluções</Link>
          <Link>Política da loja</Link>
          <Link>Métodos de pagamento</Link>
          <Link>Política de Cookies</Link>
          <Link>FAQ</Link>
        </Collum>
        <Collum>
          <Title>Atendimento</Title>
          <div>
          <Text>Tel: (11) 3456-7890</Text>
          <Link>Email: info@meusite.com</Link>
          </div>
          <div>
          <Icons>
            <FiInstagram />
            <FaFacebookF />
            <FaYoutube />
            <FaTwitter />
          </Icons>
          </div>
        </Collum>
      </Content>
      
          <TextCopy> © 2024 Orgulhosamente criado por Dev Partners</TextCopy>
    </Container>
  )
}

export default Footer
