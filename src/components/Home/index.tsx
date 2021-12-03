import { Container, Content } from "./styles";
import imgGirl from '../../assets/girl.svg';

export function Home(){
  return(
    <Container>
      <Content>
        <figure>
          <img src={imgGirl} alt="Diogo" />
        </figure>
        <article>
          <h1>Nice to meet you! I'm,</h1>
          <h2>Diogo Marques.</h2>
          <p>Building solutions for humans.</p>
        </article>
      </Content>
    </Container>
  );
}