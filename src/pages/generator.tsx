import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import NavBar from 'components/common/NavBar';
import Generator from 'components/generator/dnd/Generator';
import SideBar from 'components/generator/sidebar/SideBar';

const generator = () => {
  const PreviewContainer = dynamic(() => import('components/generator/viewer/PreviewContainer'), {
    ssr: false,
  });

  return (
    <>
      <Head>
        <script
          src="https://cdn.tiny.cloud/1/grw4sefbm00ssvsu8w4c01r6wbwjavncftmlqr5elrrgh62v/tinymce/6/tinymce.min.js"
          referrerPolicy="origin"
        ></script>
      </Head>
      <Container>
        <NavBar route="generator">
          <Title>Make It</Title>
        </NavBar>
        <GridWrap>
          <SideBar />
          <Generator />
          <PreviewContainer></PreviewContainer>
        </GridWrap>
      </Container>
    </>
  );
};

export default generator;

const Container = styled.section`
  background-color: #171b21;
`;

const GridWrap = styled.section`
  display: grid;
  grid-template-columns: 300px 500px auto;
  height: calc(100vh - 70px);
`;

const Title = styled.h2`
  color: #f5ff80;
  font-size: 20px;
  font-weight: 800;
`;
