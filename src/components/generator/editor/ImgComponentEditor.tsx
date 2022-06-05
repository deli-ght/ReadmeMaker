import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import { componentsState } from 'atoms/components';
import useDebounce from 'hooks/useDebounce';
import { ImgComponentType } from 'types/imgComponentType';
import { replaceText } from 'utils';
import ComponentContainer from './ComponentContainer';

interface ImgComponentEditorProps {
  imgComponent: ImgComponentType;
}

const ImgComponentEditor = ({ imgComponent }: ImgComponentEditorProps) => {
  const [components, setComponents] = useRecoilState(componentsState);
  const [username, setUsername] = useState('deli-ght');
  const debounceUsername = useDebounce(username);
  const curIndex = components.findIndex(component => component.id === imgComponent.id);

  useEffect(() => {
    const updatedComponentList = replaceText(components, curIndex, {
      ...imgComponent,
      username: debounceUsername,
    });

    setComponents(updatedComponentList);
  }, [debounceUsername]);

  const changeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <ComponentContainer>
      <Header>
        <Title>{imgComponent.title}</Title>
        <ImgWrap>
          <Img src={imgComponent.image} alt="" />
        </ImgWrap>
      </Header>
      <InputField type="text" onChange={changeUsername} value={username} />
    </ComponentContainer>
  );
};

export default ImgComponentEditor;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 800;
  color: white;
`;

const ImgWrap = styled.div`
  width: 126px;
  height: 36px;
  padding: 20px;
  background-color: #1b2027;
  border-radius: 20px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const InputField = styled.input`
  height: 30px;
  background: #171b21;
  color: white;
  border: none;
  border-radius: 20px;
  padding-left: 8px;
`;
