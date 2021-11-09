import { combineReducers } from "redux";
import BaiTapQuanLiReducer from "./BaiTapQuanLiReducer";
import FakeBookReducer from "./FakeBookReducer";
import ToDoListReducer from './ToDoListReducer'
export const rootReducer = combineReducers({
    ToDoListReducer,
    BaiTapQuanLiReducer, 
    FakeBookReducer
})