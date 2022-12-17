import { toast } from "react-toastify";
import { addBlog } from "../../actions/getBlogs";

const addBlogData = (data) => {

    return async (dispatch) => {
        const res = await fetch("http://localhost:5000/api/v1/blogs", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })

        const result = await res.json();

        console.log(result);
        if (result.status === 'Success') {
            dispatch(addBlog(result.data));
            toast.success("Blog Added Successfully")
        } else {
            console.log('Something went wrong!!');
        }
    }

}

export default addBlogData;