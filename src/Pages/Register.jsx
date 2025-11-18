import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';

const Register = () => {
    const { createUserWithEmailPass, signWithGoogle } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegistrationSubmit = (data) => {
        createUserWithEmailPass(data.email, data.password)
            .then(res => {
                console.log(res.user)
                navigate(location.state || '/');
            })
    }

    const handleGoogleLogin = () => {
        signWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate(location.state || '/');
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">

            {/* Login Form Container/Card */}
            <div className="w-full max-w-sm bg-white p-6 md:p-8 rounded-lg">

                {/* Title Section */}
                <header className="mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-1">
                        Create an Account
                    </h1>
                    <p className="text-lg text-gray-600">Register with ZapShift</p>
                </header>

                {/* --- Registration Form --- */}
                <form onSubmit={handleSubmit(handleRegistrationSubmit)} className="space-y-6">

                    {/* Name Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Name
                        </label>
                        <input
                            type="name"
                            id="name"
                            name="name"
                            {...register('name', { require: true })}
                            placeholder="Name"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500 outline-none transition duration-150"
                        />
                        {errors.name?.type === 'required' && <p className='text-red-500'>Name is required.</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            {...register('email', { require: true })}
                            placeholder="Email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500 outline-none transition duration-150"
                        />
                        {errors.email?.type === 'required' && <p className='text-red-500'>Email is required.</p>}
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            {...register('password', {
                                required: true,
                                minLength: 6,
                                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
                            })}
                            placeholder="Password"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500 outline-none transition duration-150"
                        />
                        {
                            errors.password?.type === 'required' && <p className='text-red-500'>Password is required.</p>
                        }
                        {
                            errors.password?.type === 'minLength' && <p className='text-red-500'>
                                Password must be 6 characters or longer
                            </p>
                        }
                        {
                            errors.password?.type === 'pattern' && <p className='text-red-500'>Password must have at least one uppercase, at least one lowercase, at least one number, and at least one special characters</p>
                        }
                    </div>

                    {/* Login Button (Lime Green, as in image) */}
                    <button
                        type="submit"
                        className="w-full py-3 text-lg font-semibold text-gray-900 bg-lime-400 rounded-lg hover:bg-lime-500 transition duration-150 shadow-md hover:shadow-lg"
                    >
                        Register
                    </button>
                </form>

                {/* --- Registration Link & Divider --- */}
                <div className="mt-6 text-center">
                    <p className="text-base text-gray-700">
                        Have an account?{' '}
                        <Link to={'/login'} className="font-semibold text-primary hover:text-lime-700">
                            Login
                        </Link>
                    </p>
                </div>

                <div className="flex items-center my-6">
                    <div className="grow border-t border-gray-300"></div>
                    <span className="shrink mx-4 text-gray-500">Or</span>
                    <div className="grow border-t border-gray-300"></div>
                </div>


                {/* --- Google Login Button --- */}
                <button
                      onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition duration-150 shadow-sm"
                >
                    <FcGoogle className="w-5 h-5 mr-2" />
                    <span className="text-base font-medium">Register with google</span>
                </button>

            </div>
        </div>
    );
};

export default Register;