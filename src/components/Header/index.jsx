import { Container, NavLink, Users, SearchIcon } from './styles'
import { IoPersonCircleOutline, IoSearchOutline } from 'react-icons/io5'

export function Header() {
  return (
    <Container>
      <h1>
        Beauty <span>Dev</span>
      </h1>
      <NavLink>
        <ul>
          <a>
            <li>Ver Tudo</li>
          </a>
          <a>
            <li>Novidades</li>
          </a>
          <a>
            <li>Mais Vendidos</li>
          </a>
          <a>
            <li>Lábios</li>
          </a>
          <a>
            <li>Olhos</li>
          </a>
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
