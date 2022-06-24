import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
    {
        id: '1',
        title: 'Learnig redux toolkit',
        content: 'React redux toolkit , reduz is a state management tool for webapplications based on js&ts'
    },
    {
        id: '2',
        title: 'Django REST',
        content: 'Django REST is an opensource web framework'
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // Actions
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content,userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer