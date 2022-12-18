import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import deleteBlogData from '../redux/thunk/blogs/deleteBlogData';
import { getBlogsData } from '../redux/thunk/blogs/getBlogsData';
import BlogsSwiper from '../swiper/blogsSwiper';

const Home = () => {
    const dispatch = useDispatch();

    const blogs = useSelector((state) => state.blogs);
    console.log(blogs);

    useEffect(() => {
        dispatch(getBlogsData())
    }, [dispatch])

    return (
        <div className=''>
            {
                blogs.map(blog => <div className="lg:grid lg:grid-cols-2 bg-stone-300">
                    <div className='flex justify-center p-5 items-center'>
                        {/*  <figure><img className='' src={blog.image} alt="Album" /></figure> */}

                        <BlogsSwiper
                            images={blog.images}
                        ></BlogsSwiper>
                    </div>

                    <div className="p-5">
                        <h2 className="text-4xl ">{blog.title}</h2>
                        <p className='mt-5'>{blog.details}</p>
                        <div className="bg-slate-900 flex items-center justify-around text-white px-6 p-2 mt-3">
                            Published At : {blog.updatedAt.slice(0, 10)}
                            <Link to={`/dashboard/update-blog/${blog._id}`}><button className='bg-gray-300 p-2 text-black'>Update Blog</button></Link>
                            {/* The button to open modal */}
                            <button onClick={() => dispatch(deleteBlogData(blog._id, blog.title))} className="bg-red-800 text-white p-2">Delete</button>


                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default Home;