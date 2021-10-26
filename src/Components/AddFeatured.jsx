import React from 'react';
import { useForm } from "react-hook-form";


const AddFeatured = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='mt-5 p-3'>
            <h5 className='headingEdit mb-2'>Add Featured Images</h5>
            <hr className='dividerEdit' />
            <div className="col-md-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <label htmlFor="image" className='mb-0'>Please Enter Featured Section Image</label>
                    <input required name='image' id='image' className='form-control mb-2' type='file' placeholder="Please Enter Featured Image " {...register("image")} />
                    <label htmlFor="category" className='mb-0'>Please Enter Category</label>
                    <input type="text" name='category' id='category' className='form-control mb-2'  defaultValue='featured' {...register('category')} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                    <button className='submitButton'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddFeatured;