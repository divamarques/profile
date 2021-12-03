import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  img { 
    max-width: 50%;
    margin-left: 4rem;
    
  }

  article {
    
    max-width: 100%;
    margin-left: -3rem;

    h1 {
      color: var(--light-green);
      font-size: 1rem;
      font-weight: 400;
    }

    h2 {
      font-size: 4rem;
      font-weight: 600;
      color: var(--dark-title);
    }
    
    p {
      font-size: 2.5rem;
      font-weight: 500;
      color: var(--dark-grey);
      
      padding: 0.5rem 0;
    }
  }
`;