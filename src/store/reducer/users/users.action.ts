import { USER_ACTION_TYPES } from "./users.type.ts";
import fetch from 'isomorphic-fetch'

export const fetchUsers = () => async (dispatch: any, getState: any) => {
  dispatch({ type: USER_ACTION_TYPES.FETCH_USERS });
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  dispatch({
    type: USER_ACTION_TYPES.FETCH_USERS_DONE,
    payload: await users.json(),
  });
};

("client only");
export function setUsers(users: any) {
  return {
    type: USER_ACTION_TYPES.SET_USERS,
    payload: users,
  };
}

export const fetchTodos = () => async (dispatch: any, getState: any) => {
  dispatch({ type: USER_ACTION_TYPES.FETCH_TODOS });
  const toDos = await fetch("https://jsonplaceholder.typicode.com/todos");
  dispatch({
    type: USER_ACTION_TYPES.FETCH_TODOS_DONE,
    payload: await toDos.json(),
  });
};
