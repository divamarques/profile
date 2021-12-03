import imgLogo from '../../assets/logo.svg';
import { Container, Content, Nav } from "./styles";


export function Header(){
  return (
    <Container>
      <Content>
        <img src={imgLogo} alt="" />
        <Nav>
          <ul>
            <li> <a href="/about"></a> About</li>
            <li>Projects</li>
            <li>Experience</li>
            <li>Contact</li>
          </ul>
          <button type="button">Resume</button>
        </Nav>
      </Content>
    </Container>
  );
}