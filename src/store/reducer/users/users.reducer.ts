import { USER_ACTION_TYPES } from "./users.type.ts";

const initialState = {
  users: [],
  loading: false,
  toDos : []
};

type ActionType = {
  payload: any;
  type: string;
};

export const usersReducer = (state = initialState, action: ActionType) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.FETCH_USERS:
      return {
        ...state,
        loading: true,
    };
    case USER_ACTION_TYPES.FETCH_USERS_DONE:
      return {
        ...state,
        users: payload,
        loading: false,
    };
    case USER_ACTION_TYPES.SET_USERS:
      return {
        ...state,
        users: [...state.users,payload],
        loading: false,
    };
    case USER_ACTION_TYPES.FETCH_TODOS:
      return {
        ...state,
        loading : true
    }
    case USER_ACTION_TYPES.FETCH_TODOS_DONE:
      return {
        ...state,
        toDos : payload
      }
    default:
      return state;
  }
};

