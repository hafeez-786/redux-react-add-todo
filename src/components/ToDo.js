import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './todo.css';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addToDo, deleteTodo, removeToDo } from '../actions/index';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const ToDo = () => {
  const [inputData, setInputData] = useState('');
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setInputData(e.target.value)
  }

  return (
    <Container maxWidth="xs" className="todo_list_block">
      <h1 style={{ textAlign: "center" }}><i>TODO LIST</i></h1>
      <p><i>Add your list here</i></p>
      <TextField
        variant="outlined"
        size="small"
        value={inputData}
        onChange={changeHandler}
      />
      <Button variant="contained" color="secondary"
        onClick={() => dispatch(addToDo(inputData), setInputData(''))}
      >ADD</Button>

      {
        list.map((listItems, index) => {
          return (
            <List key={index}>
              <ListItemText
                primary={listItems.data}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete"
                  onClick={() => dispatch(deleteTodo(inputData), setInputData(''))}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </List>
          )
        })
      }
      <Button className="remove__all" variant="contained" color="secondary"
        onClick={() => dispatch(removeToDo(inputData), setInputData(''))}
      >Remove All</Button>
    </Container>
  )
}
export default ToDo