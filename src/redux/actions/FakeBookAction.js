import { ADD_COMMENT } from "../types/FakeBookTypes";

export const addComment = (userComment) => ({
    type:ADD_COMMENT,
    userComment
})