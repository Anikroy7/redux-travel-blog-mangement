import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getBlogsData } from '../../redux/thunk/blogs/getBlogsData';
import updateBlogData from '../../redux/thunk/blogs/updateBlogData';

const UpdateProduct = () => {

    const blogs = useSelector((state) => state.blogs);
    const dispatch = useDispatch();
    const { id } = useParams();

    // console.log(updatedProduct);
    const updatedProduct = blogs.find(blog => blog._id === id);

    const { register, formState: { errors }, handleSubmit, reset } = useForm({
        defaultValues: {
            title: updatedProduct?.title,
            images: updatedProduct?.images,
            details: updatedProduct?.details
        }
    });

    useEffect(() => {
        dispatch(getBlogsData())
    }, [dispatch])




    const onSubmit = (data) => {
        console.log(data);
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        const day = new Date().getDay();
        const update = `${year}-${month}-${day}`;
        data.updatedAt = update
        console.log(data);
        dispatch(updateBlogData(data, id));
        // toast.success("Successfull")
        reset()

    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-2xl text-center text-stone-700 font-bold'>Update Blog</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Blog Title</span>
                                </label>
                                <input {...register("title", { required: true, maxLength: 20 })} type="text" placeholder="Blog Title" className="input input-bordered" />

                                {/* Tiltle error */}
                                {errors.title?.type === 'required' && <p className='text-red-500 mt-2' role="alert">Blog title is required</p>}

                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input  {...register("images", { required: true })} type="text" placeholder="Give multiple Image Url" className="input input-bordered" />

                                {/* Url error */}
                                {(errors.images?.type === 'required' && <p className='text-red-500 mt-2' role="alert">Image url is required</p>)}





                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>

                                {/* Text area error */}
                                <textarea {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Type about your blog"></textarea>
                                {errors.details?.type === 'required' && <p className='text-red-500 mt-2' role="alert">Blog title is required</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value={'Update'} className=' border-none bg-green-400 font-bold text-black btn-sm' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;