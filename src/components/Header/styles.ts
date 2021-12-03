import styled from 'styled-components';

export const Container = styled.header`
  background: var(--background);
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1120px;

  padding: 2rem 1rem 3rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    margin: 0 0.25rem;
    padding: 0;
    
  

    li{
      margin: 0 ;
      color: var(--dark-title);
      padding: .5rem .8rem;
      cursor: pointer;

      &:hover {
        color: var(--light-green);
      }
    }

  }

  button { 
    background-color: var(--background);
    border: 1px solid var(--light-green);
    border-radius: 0.25rem;
    color: var(--light-green);
    font-size: 1rem;
    height: 2.6rem;
    padding: 0 1rem;
    width: 7rem;

    transition: filter 0.3s;

    &:hover{
      filter: brightness(0.8);
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;