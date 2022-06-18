import {
  SEND_PANIC_REQUEST_SUCCESS,
  SEND_PANIC_REQUEST_FAILURE,
  CANCEL_PANIC_REQUEST,
  LOAD_PANIC_HISTORY,
} from "../types/panic";

const initialState = {
  panicList: [],
  panicItem: {
    id: "",
    type: "",
    details: "",
    createdAt: "",
    updatedAt: "",
    user: {
      id: "",
      name: "",
      email: "",
    },
  },
  active: false,
  errors: null,
};

export const panicReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEND_PANIC_REQUEST_SUCCESS: {
      const { panic } = payload;
      return {
        panicItem: {
          id: panic,
        },
        active: true,
      };
    }
    case SEND_PANIC_REQUEST_FAILURE: {
      const { panic } = payload;
      return {
        errors: panic,
      };
    }
    case CANCEL_PANIC_REQUEST: {
      return {
        panicItem: {
          id: "",
          type: "",
          details: "",
          createdAt: "",
          updatedAt: "",
          user: {
            id: "",
            name: "",
            email: "",
          },
        },
        active: false,
      };
    }

    case LOAD_PANIC_HISTORY: {
      const { panics } = payload;
      return {
        ...state,
        panicList: panics,
      };
    }

    default:
      return state;
  }
};
