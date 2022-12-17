import { toast } from "react-toastify";
import { updateBlog } from "../../actions/getBlogs";

const updateBlogData = (blog, _id) => {

    return async (dispatch) => {
        const res = await fetch(`http://localhost:5000/api/v1/blogs/${_id}`, {
            method: "PATCH",
            body: JSON.stringify(blog),
            headers: {
                "Content-type": "application/json"
            }
        })
        const result = await res.json();
        console.log(result);
        // console.log(data);
        if (result.data.modifiedCount > 0) {
            console.log('object');
            dispatch(updateBlog(blog))
            toast.success("Blog Updated Successfully")
        }
    }

}

export default updateBlogData;