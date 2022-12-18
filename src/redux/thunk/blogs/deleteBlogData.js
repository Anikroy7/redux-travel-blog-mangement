import { toast } from "react-toastify";
import { delteBlog } from "../../actions/getBlogs";

const deleteBlogData = (_id, title) => {
    return async (dispatch) => {
        const res = await fetch(`http://localhost:5000/api/v1/blogs/${_id}`, {
            method: 'DELETE'
        });
        const result = await res.json();

        console.log(result);
        if (result.data.deletedCount > 0) {
            // console.log('hoice delte');
            dispatch(delteBlog(_id));
            toast.success(`${title} Deleted Succesfully`)
        }

    }
}

export default deleteBlogData;

