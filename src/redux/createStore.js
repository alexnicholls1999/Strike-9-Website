import { createStore } from "redux";
import rootReducer from "./rootReducer";


// export const middlewares = [thunk.withExtraArgument({})];

export const store = createStore(
    rootReducer
)

export default {
    store
}