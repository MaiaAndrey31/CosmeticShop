import { Container, NavLink, Users } from "./styles";
import { IoPersonCircleOutline, IoSearch } from "react-icons/io5";

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
            <IoPersonCircleOutline />
            <p>Login</p>
            <IoSearch />
            </Users>
            
        </Container>
    )
}
export default Header