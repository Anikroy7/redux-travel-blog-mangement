import { getBlogs } from "../../actions/getBlogs";

export const getBlogsData = () => {
    return async (dispatch) => {
        const res = await fetch("http://localhost:5000/api/v1/blogs");
        const data = await res.json();
        console.log(data);

        if (data.data.length) {
            dispatch(getBlogs(data.data))
        }
    }
}