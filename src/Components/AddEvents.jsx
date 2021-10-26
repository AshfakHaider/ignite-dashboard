import React from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='mt-5 p-3'>
            <h5 className='headingEdit'>Add Event Section Data</h5>
            <hr className='dividerEdit' />
            <div className="col-md-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <label htmlFor='title' className='mb-0'>Enter Title Of Event</label>
                    <input name='title' id='title' className='mb-2 form-control' placeholder='Please Enter Title Of Events' {...register("title")} />
                    <label htmlFor="eventImg">Please Enter Event Image</label>
                    <input type="file" name='eventImg' id='eventImg' placeholder='Please Enter Image Of Events' className='form-control-file mb-2' {...register('eventImg')} />
                    <label htmlFor="time" className='mb-0'>Enter The Time For Event</label>
                    <input type="text" id='time' name='time' placeholder='Enter The Time Of Events' className='form-control mb-2' {...register('time')} />
                    <label htmlFor="location" className='mb-0'>Please Enter The Location Of Event</label>
                    <input type="text" name='location' id='location' className='form-control mb-2' placeholder='Please Enter Location Of The Event' {...register('location')} />
                    <label htmlFor="description" className='mb-0'>Please Enter The Description Of Event</label>
                    <textarea name='description' id='description' className='form-control mb-2' placeholder='Please Enter Description Of The Event' {...register('description')} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <button type='submit' className='submitButton'>Submit</button>
                </form>
            </div>

        </div>
    );
};

export default AddEvents;