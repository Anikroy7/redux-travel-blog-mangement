import { ADDBLOG, DELETEBLOG, GETBLOGS, UPDATEBLOG } from "../actionTypes";

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
export const delteBlog = (_id) => {
    return {
        type: DELETEBLOG,
        payload: _id
    }

}