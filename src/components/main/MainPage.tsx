import React from 'react';
import styled from '@emotion/styled';
import ComponentsContainer from './components/ComponentsContainer';
import TemplatesContainer from './Templates/TemplatesContainer';
import Cart from '../../components/main/cart/Cart';

interface MainPageProps {
  slideRef: React.MutableRefObject<HTMLElement>;
}

const MainPage = ({ slideRef }: MainPageProps) => {
  return (
    <Container>
      <Wrap ref={slideRef}>
        <ComponentsContainer />
        <TemplatesContainer />
      </Wrap>
      <Cart />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
`;

const Wrap = styled.section`
  display: flex;
`;

export default MainPage;
