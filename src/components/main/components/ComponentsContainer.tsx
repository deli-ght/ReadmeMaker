import React from 'react';
import styled from '@emotion/styled';
import ComponentList from 'components/main/components/ComponentList';
import PopularItemList from 'components/main/components/PopularItemList';
import FilterList from 'components/main/components/FilterList';
import { useQuery } from 'react-query';
import { getComponents, getComponentTags } from 'utils/apis';

const ComponentsContainer = () => {
  const { data: componentList } = useQuery('components', getComponents);
  const { data: tags } = useQuery('tags', getComponentTags);

  console.log(tags);
  console.log(componentList);
  if (!componentList || !tags) return null;
  return (
    <Container>
      <Wrap>
        <PopularItemList list={componentList} />
        {/* <FilterList list={tags} /> */}
        <ComponentList list={componentList} />
      </Wrap>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  color: white;
  overflow: scroll;
  background-color: #0e1116;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Wrap = styled.div`
  width: calc(100vw - 500px);
  margin: 60px 110px 120px 0;
`;

export default ComponentsContainer;
