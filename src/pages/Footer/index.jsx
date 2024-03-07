import {
  Collumn,
  Container,
  Content,
  Link,
  Subscribe,
  Text,
  Title,
  Icons,
  TextCopy,
  InputList
} from './styles'
import {Button} from '../../components'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

export function Footer() {
  return (
    <Container>
      <Subscribe>
     <h1>Você está <span>na lista?</span></h1> 
    <h6>Receba ofertas e descontos exclusivos</h6>
    <InputList>
    <label>Insira seu email aqui*</label>
    <div>
      <input type="email" placeholder='Email' />
      <Button title="Enviar"/>
    </div>

    </InputList>

      </Subscribe>
      <Content>
        <Collumn>
          <Title>Compre</Title>
          <Link>Todos os produtos</Link>
          <Link>Novidades</Link>
          <Link>Mais vendidos</Link>
          <Link>Lábios</Link>
          <Link>Olhos</Link>
          <Link>Rosto</Link>
        </Collumn>
        <Collumn>
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
        </Collumn>

        <Collumn>
          <Title>Políticas</Title>
          <Link>Entregas e devoluções</Link>
          <Link>Política da loja</Link>
          <Link>Métodos de pagamento</Link>
          <Link>Política de Cookies</Link>
          <Link>FAQ</Link>
        </Collumn>
        <Collumn>
          <Title>Atendimento</Title>
          <div>
          <Text>Tel: (11) 3456-7890</Text>
          <Link>Email: info@meusite.com</Link>
          </div>
          <div>
          <Icons>
            <a href="">
              <FiInstagram />
            </a>
            <a href="">
              <FaFacebookF />
            </a>
            <a href="">
              <FaYoutube />
            </a>
            <a href="">
              <FaTwitter />
            </a>
          </Icons>
          </div>
        </Collumn>
      </Content>
      
          <TextCopy> © 2024 Orgulhosamente criado por Dev Partners</TextCopy>
    </Container>
  )
}

