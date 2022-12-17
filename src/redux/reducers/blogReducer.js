import { ADDBLOG, GETBLOGS, UPDATEBLOG } from "../actionTypes";

const initialState = {
    blogs: [],
    isError: false,
    erroMsg: null
}

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETBLOGS:
            return {
                ...state,
                isLoading: true,
                blogs: action.payload
            }
        case ADDBLOG:
            return {
                ...state,
                blogs: [...state.blogs, action.payload]
            }

        case UPDATEBLOG:
            const newBlogs = state.blogs.filter(blog => blog._id !== action.payload._id);
            return {
                ...state,
                blogs: [...newBlogs, action.payload]
            }


        default:
            return state;
    }
}

export default blogReducer;