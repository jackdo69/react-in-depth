import React, { Suspense, useState, useContext, useEffect } from 'react';
//redux
import { useDispatch } from 'react-redux';
import { addBook } from '../store/book';
import { addUser } from '../store/user';

//styles
import StyledInput from '../components/styles/StyledInput';
import StyledRow from '../components/styles/StyledRow';
import StyledButton from '../components/styles/StyledButton';
//components
import Modal from '../components/Modal';
import WordsList from '../components/WordsList';
const Clock = React.lazy(() => import('../components/Clock'));
const Toggle = React.lazy(() => import('../components/Toggle'));
const Books = React.lazy(() => import('../components/Books'));
const Users = React.lazy(() => import('../components/Users'));
const TemperatureCalculator = React.lazy(() =>
  import('../components/TemperatureCalculator')
);
import { v4 as uuidv4 } from 'uuid';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [addItemType, setAddItemType] = useState('');
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const addItemRef = React.createRef();

  function handleAddItem(e, type) {
    let label;
    switch (type) {
      case 'books':
        label = 'Title: ';
        break;
      case 'users':
        label = 'Name: ';
        break;
      default:
        console.log('Not found');
    }
    setAddItemType(label);
    setShowModal(true);
  }

  useEffect(() => {
    if (addItemRef.current) {
      addItemRef.current.focus();
    }
  });

  function handlerInputChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    const id = uuidv4();
    if (e.code === 'Enter') {
      switch (addItemType) {
        case 'Title: ':
          dispatch(
            addBook({
              id,
              title: input,
            })
          );
          break;
        case 'Name: ':
          dispatch(
            addUser({
              id,
              name: input,
            })
          );
          break;
        default:
          console.log('No match');
      }
      setInput('');
    }
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <StyledRow>
          <div>
            <Toggle />
            <Clock />
          </div>
          <TemperatureCalculator />
          <WordsList />
        </StyledRow>
        <StyledRow>
          {showModal && (
            <Modal>
              <label>{addItemType}</label>
              <StyledInput
                value={input}
                onKeyPress={(e) => handleSubmit(e)}
                onChange={(e) => handlerInputChange(e)}
                ref={addItemRef}
              />
              <StyledButton
                onClick={() => {
                  setAddItemType('');
                  setShowModal(false);
                }}
              >
                Close
              </StyledButton>
            </Modal>
          )}
          <Books addItem={(e, type) => handleAddItem(e, type)} />
          <Users addItem={(e, type) => handleAddItem(e, type)} />
        </StyledRow>
      </Suspense>
    </>
  );
}

export default Home;
