import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Popover } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
function AddButton({ addQuestion }) {
  const [visible, setVisible] = useState(false);

  const hide = () => {
    setVisible(false);
  };

  const handleOpenChange = (visible) => {
    setVisible(visible);
  };

  return (
    <AddButtonWrapper>
      <Popover
        content={
          <div>
            <Button
              onClick={() => {
                hide();
                addQuestion('select');
              }}
              style={{ display: 'block' }}
              type="text"
            >
              객관식
            </Button>
            <Button
              onClick={() => {
                hide();
                addQuestion('text');
              }}
              style={{ display: 'block' }}
              type="text"
            >
              단답식
            </Button>
            <Button
              onClick={() => {
                hide();
                addQuestion('textarea');
              }}
              style={{ display: 'block' }}
              type="text"
            >
              서술식
            </Button>
          </div>
        }
        placement="right"
        trigger="click"
        open={visible}
        onOpenChange={handleOpenChange}
      >
        <IconButton>
          <PlusCircleOutlined />
        </IconButton>
      </Popover>
    </AddButtonWrapper>
  );
}

export default AddButton;

const AddButtonWrapper = styled.div`
  text-align: center;
`;

const IconButton = styled.button`
  font-size: 2.5rem;
  background: none;
  border: none;
  outline: none;
  border-radius: 100%;
  cursor: pointer;
`;
