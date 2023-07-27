import rootReducer from "./store/reducers/rootReducer";
//Giữ lại state
import { persistStore } from "redux-persist"
import { createStore } from "redux"

const reduxStore = () => {
    const store = createStore(rootReducer)//sẽ viết thêm middleware ở đây
    const persistor = persistStore(store)
    return { store, persistor }
}

export default reduxStore;