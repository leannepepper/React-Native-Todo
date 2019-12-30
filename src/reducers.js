const FETCH_POST = "FETCH_POST";
const FETCH_POST_COMPLETE = "FETCH_POST_COMPLETE";

export const todo = (state = [], action) => {
  switch (action.typ) {
    case FETCH_POST:
      return state;
    case FETCH_POST_COMPLETE:
      return action.payload;
    default:
      return state;
  }
};
