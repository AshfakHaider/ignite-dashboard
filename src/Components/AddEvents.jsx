import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddEvents = () => {
    const [doubleClick, setDoubleClick] = useState(false);
    const [imgUrl, setImgUrl] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    const handleImgUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '0ad6173cd5aeb795e482f44abb146bbe')
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImgUrl(response.data.data.display_url)
                console.log('img sent to db')

            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return (
        <div className='mt-5 p-3'>
            <h5 className='headingEdit'>Add Event Section Data</h5>
            <hr className='dividerEdit' />
            <div className="col-md-10">
                <form >
                    {/* register your input into the hook by invoking the "register" function */}
                    <label htmlFor='title' className='mb-0'>Enter Title Of Event</label>
                    <input required name='title' id='title' className='mb-2 form-control' placeholder='Please Enter Title Of Events' {...register("title")} />
                    <label htmlFor="eventImg">Please Enter Event Image</label>
                    <input required type="file" name='eventImg' id='eventImg' onChange={handleImgUpload}  placeholder='Please Enter Image Of Events' className='form-control-file mb-2' />
                    <label htmlFor="time" className='mb-0'>Enter The Time For Event</label>
                    <input required type="text" id='time' name='time' placeholder='Enter The Time Of Events' className='form-control mb-2' {...register('time')} />
                    <label htmlFor="location" className='mb-0'>Please Enter The Location Of Event</label>
                    <input required type="text" name='location' id='location' className='form-control mb-2' placeholder='Please Enter Location Of The Event' {...register('location')} />
                    <label htmlFor="description" className='mb-0'>Please Enter The Description Of Event</label>
                    <textarea required name='description' id='description' className='form-control mb-2' placeholder='Please Enter Description Of The Event' {...register('description')} />
                    <label htmlFor="category" className='mb-0'>Please Enter Category</label>
                    <input type="text" name='category' id='category' className='mb-2 form-control' defaultValue='events' {...register('category')} />

                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                    <button type='submit' onClick={handleSubmit(onSubmit)} className='submitButton'>Submit</button>
                </form>
            </div>

        </div>
    );
};

export default AddEvents;