import { Container, NavLink, Users, SearchIcon } from './styles'
import { IoPersonCircleOutline, IoSearchOutline } from 'react-icons/io5'

function Header() {
  return (
    <Container>
      <h1>Beauty <span>Dev</span></h1>
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
        <SearchIcon>
        <IoSearchOutline />
          </SearchIcon>       
        
      </Users>
    </Container>
  )
}
export default Header
