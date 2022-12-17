import { ADDBLOG, GETBLOGS, UPDATEBLOG } from "../actionTypes";

export const getBlogs = (blogs) => {
    return {
        type: GETBLOGS,
        payload: blogs
    }
}


export const addBlog = (blog) => {
    return {
        type: ADDBLOG,
        payload: blog
    }
}

export const updateBlog = (blog) => {
    return {
        type: UPDATEBLOG,
        payload: blog
    }

}