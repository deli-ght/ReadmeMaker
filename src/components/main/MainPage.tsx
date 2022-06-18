import React from 'react';
import styled from '@emotion/styled';
import ComponentsContainer from 'components/main/components/ComponentsContainer';
import TemplatesContainer from 'components/main/Templates/TemplatesContainer';
import Cart from 'components/main/cart/Cart';
import { useRecoilValue } from 'recoil';
import { modalState } from 'atoms';

interface MainPageProps {
  slideRef: React.MutableRefObject<HTMLElement>;
}

const MainPage = ({ slideRef }: MainPageProps) => {
  const isModal = useRecoilValue(modalState);

  return (
    <Container>
      <Wrap ref={slideRef}>
        <ComponentsContainer />
        <TemplatesContainer />
      </Wrap>
      {!isModal.some(modal => modal) && <Cart />}
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
