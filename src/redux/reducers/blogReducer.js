import { ADDBLOG, DELETEBLOG, GETBLOGS, UPDATEBLOG } from "../actionTypes";

const initialState = {
    blogs: [],
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
        case DELETEBLOG:
            const removedBlogs = state.blogs.filter(blog => blog._id !== action.payload);
            return {
                ...state,
                blogs: [...removedBlogs]
            }


        default:
            return state;
    }
}

export default blogReducer;