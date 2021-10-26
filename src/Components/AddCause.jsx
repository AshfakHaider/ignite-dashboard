import React from 'react';
import { useForm } from "react-hook-form";


const AddCause = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className='mt-3 p-3'>
            <h5 className='headingEdit mb-2'>Add Cause Section Data</h5>
            <hr className='dividerEdit' />
            <div className='col-md-10'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <label htmlFor="title" className='mb-0'>Enter Title Of The Cause</label>
                    <input  name='title' id='title' type='text' className='form-control mb-2' placeholder='Please Enter Title Of The Cause' required {...register("title")} />

                    <label htmlFor="image"  className='mb-0'>Enter Image Of The Cause</label>
                    <input type='file' className='form-control mb-2' name='image' id='image' placeholder='Please Enter Image Of The Cause' required {...register("image")} />

                    <label htmlFor="goal"  className='mb-0'>Enter Goal Money Of The Cause</label>
                    <input type='number' id='goal' className='form-control mb-2' name='goal' placeholder='Please Enter Goal Money The Cause' required {...register("goal")} />

                    <label htmlFor="raised"  className='mb-0'>Enter Raised Money Of The Cause</label>
                    <input type='number' id='raised' className='form-control mb-2' name='raised' placeholder='Please Enter Raised Money Of The Cause' required {...register("raised")} />

                    <label htmlFor="description"  className='mb-0'>Enter Description Of The Cause</label>
                    <textarea type='text' id='description' name='description' className='form-control mb-2' placeholder='Please Enter Description Of The Cause' required {...register("description")} rows='4' />
                    {/* include validation with required or other standard HTML validation rules */}

                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                    <button className='submitButton' >Submit</button>
                </form>

            </div>
        </div>
    );
};

export default AddCause;