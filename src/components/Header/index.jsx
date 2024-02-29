import { Container, NavLink, Users } from './styles'
import { IoPersonCircleOutline, IoSearchOutline } from 'react-icons/io5'

function Header() {
  return (
    <Container>
      <h1>Beauty Dev</h1>
      <NavLink>
        <ul>
          <li>Ver Tudo</li>
          <li>Novidades</li>
          <li>Mais Vendidos</li>
          <li>Rosto</li>
          <li>Lábios</li>
          <li>Olhos</li>
        </ul>
      </NavLink>
      <Users>
        <div>
          <IoPersonCircleOutline />
          <p>Login</p>
        </div>        
        <IoSearchOutline />
      </Users>
    </Container>
  )
}
export default Header
