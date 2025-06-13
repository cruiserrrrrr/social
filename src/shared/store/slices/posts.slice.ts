import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../types";
import { RootState } from "../store";

interface PostsState {
    posts: IPost[];
}

const initialState: PostsState = {
    posts: [],
};

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<Omit<IPost, "id" | "likes">>) => {
            const { title, text } = action.payload;
            
            if (!title.trim() || !text.trim()) {
                return;
            }
            
            const newPost: IPost = {
                id: Date.now(),
                likes: 0,
                title: title.trim(),
                text: text.trim(),
            };
            state.posts.push(newPost);
        },
        removePost: (state, action: PayloadAction<number>) => {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },
        editPost: (state, action: PayloadAction<{ id: number; title: string; text: string }>) => {
            const { id, title, text } = action.payload;
            
            if (!text.trim()) {
                return;
            }
            
            const index = state.posts.findIndex(post => post.id === id);
            if (index !== -1) {
                state.posts[index] = {
                    ...state.posts[index],
                    title,
                    text,
                };
            }
        },
        likePost: (state, action: PayloadAction<number>) => {
            const index = state.posts.findIndex(post => post.id === action.payload);
            if (index !== -1) {
                state.posts[index].likes += 1;
            }
        },
    },
});

export const {addPost, removePost, editPost, likePost} = postsSlice.actions;
export const selectPosts = (state: RootState) => state.posts.posts;
export default postsSlice.reducer;