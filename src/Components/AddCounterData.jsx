import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddCounterData = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const eventData = {
            title: data.title,
            suffix: data.suffix,
            count: data.countNumber,
            category : data.category
        }
        axios.post('http://localhost:5000/api/addCounter', eventData)
            .then(res =>{
                console.log(res.status);
                window.location.reload();
            })
            .catch(err => console.log(err));
    };
    return (
        <div className='mt-5 p-3'>
            <h5 className="headingEdit mb-2">Add Counter Section Data</h5>
            <hr className='dividerEdit' />
            <div className="col-md-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <label htmlFor="title" className='mb-0'>Enter Title Of Counter</label>
                    <input name='title' id='title' required placeholder='Enter Title of Counter' className='form-control mb-2' {...register("title")} />
                    <label htmlFor="suffix" className='mb-0'>Enter Suffix If Any</label>
                    <input type="text" id='suffix' name='suffix' placeholder='Enter Suffix Of If Any' {...register('suffix')} className='form-control mb-2' />
                    <label htmlFor="countNumber" className='mb-0'>Enter Counter Number</label>
                    <input type="number" id='countNumber' name='countNumber' required className='mb-2 form-control' placeholder='Please Enter the count number' {...register('countNumber')} />

                    <label htmlFor="category" className='mb-0'>Please Enter Category</label>
                    <input type="text" name='category' id='category' className='form-control mb-2'  defaultValue='counter' {...register('category')} />
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