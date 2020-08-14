//rsc
import React, {useState, useEffect} from 'react';
import authSvg from '../assets/welcome.svg';
import {ToastContainer, toast} from "react-toastify";
import axios from 'axios';
import jwt from 'jsonwebtoken';
import {isAuth} from "../../helpers/auth";
import {Link, Redirect} from 'react-router-dom';

const Activate = ({match}) => {

    const [formData, setFormData] = useState({
        name: '',
        token: '',
        show: true
    });

    useEffect(() => {
        let token = match.params.token;
        let {name} = jwt.decode(token);

        if(token) {
            setFormData({...formData, name, token});
        }
    }, [match.params]);
    const {name, token, show} = formData;

    const handleSubmit = e => {
        e.preventDefault();
    }





    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            {isAuth() ? <Redirect to='/' /> : null}
            <ToastContainer />
            div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
            <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                <div className='mt-12 flex flex-col items-center'>
                    <h1 className='text-2xl xl:text-3xl font-extrabold'>
                        Welcome {name}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Activate;
