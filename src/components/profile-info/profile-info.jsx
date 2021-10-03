import React, {useState, useEffect} from "react";
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {userDataUpdate, userData} from '../../services/actions/auth';
import { useSelector, useDispatch } from 'react-redux';

function ProfileInfo() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: '',
    email: '',
    password: ''
  });

  const {email, name} = useSelector(store => store.auth);

  const [editState, setEditState] = useState(false);

  const onEditClick = () => {
    console.log('EditClick');

    setEditState(!editState);
  };

  const handleChange = ({target: {value, name}}) => {
    setState({
      ...state,
      [name]: value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userDataUpdate(state));
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setState({
      email,
      name,
      password: '',
    })
  };

  useEffect(() => {
    dispatch(userData());
  }, []);

  useEffect(() => {
    setState((state) => {
      return {
        ...state,
        name,
        email,
      };
    });
  }, [name, email]);

  return (
    <form onSubmit={handleSubmit}>
      <div className={'mb-6'}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={handleChange}
          value={state.name}
          name={'name'}
          icon={'EditIcon'}
          onIconClick={onEditClick}
          error={false}
          disabled={!editState}
          errorText={'Ошибка'}
        />
      </div>
      <div className={'mb-6'}>
        <Input
          type={'email'}
          placeholder={'Логин'}
          onChange={handleChange}
          value={state.email}
          name={'email'}
          icon={'EditIcon'}
          onIconClick={onEditClick}
          error={false}
          disabled={!editState}
          errorText={'Ошибка'}
        />
      </div>
      <div className={'mb-6'}>
        <Input
          type={'password'}
          placeholder={'Пароль'}
          onChange={handleChange}
          value={state.password}
          name={'password'}
          error={false}
          onIconClick={onEditClick}
          icon={'EditIcon'}
          disabled={!editState}
          errorText={'Ошибка'}
        />
      </div>
      <div>
        <Button type="secondary" size="medium" onClick={handleCancel}>
          Отмена
        </Button>
        <Button type="primary" size="medium">
          Сохранить
        </Button>
      </div>
    </form>
  )
}

export default ProfileInfo;
