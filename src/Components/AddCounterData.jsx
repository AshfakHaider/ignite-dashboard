import React from 'react';
import { useForm } from "react-hook-form";

const AddCounterData = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='mt-5'>
            <h5 className="headingEdit mb-2">Add Counter Section Data</h5>
            <hr className='dividerEdit' />
            <div className="col-md-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <label htmlFor="title" className='mb-0'>Enter Title Of Counter</label>
                    <input name='title' id='title' required placeholder='Enter Title of Counter' className='form-control mb-2' {...register("title")} />
                    <label htmlFor="suffix" className='mb-0'>Enter Suffix If Any</label>
                    <input type="text" id='suffix' name='suffix' placeholder='Enter Suffix Of If Any' {...register('suffix')} className='form-control mb-2' />

                    <label htmlFor="countNumber">Enter Counter Number</label>
                    <input type="number" id='countNumber' name='countNumber' required className='mb-2 form-control' placeholder='Please Enter the count number' {...register('countNumber')} />
                    {/* include validation with required or other standard HTML validation rules */}
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                    <button type='submit' className='submitButton'>Submit</button>

                </form>

            </div>
        </div>
    );
};

export default AddCounterData;