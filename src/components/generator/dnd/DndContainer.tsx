import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import '@atlaskit/css-reset';
import { v4 as uuid } from 'uuid';
import TextComponentEditor from '../editor/TextComponentEditor';
import ImgComponentEditor from '../editor/ImgComponentEditor';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { componentsState } from 'atoms/components';
import DndComponent from './DndComponent';

const DndContainer = () => {
  const [components, setComponents] = useRecoilState(componentsState);

  const handleChange = (result: any) => {
    if (!result.destination) return;
    const items = [...components];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setComponents(items);
  };

  const addTextEditor = () => {
    setComponents((oldComponents: any[]) => [
      ...oldComponents,
      {
        id: `${uuid()}`,
        code: '',
        type: 'text',
      },
    ]);
  };

  return (
    <DragDropContext onDragEnd={handleChange}>
      <Droppable droppableId="cardlists">
        {provided => (
          <div className="cardlists" {...provided.droppableProps} ref={provided.innerRef}>
            {components.map((post: any, i: number) => (
              <DndComponent key={`test-${post.id}`} post={post} postIndex={i} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <BtnAdd onClick={addTextEditor}>추가</BtnAdd>
    </DragDropContext>
  );
};

export default DndContainer;

const BtnAdd = styled.button`
  color: white;
  font-weight: 700;
  font-size: 20px;
`;
