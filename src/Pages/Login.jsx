import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { logIn, signWithGoogle } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = (data) => {
        logIn(data.email, data.password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state || '/')
            })
            .catch(error => {
                console.log(error)
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
                        Welcome Back
                    </h1>
                    <p className="text-lg text-gray-600">Login with ZapShift</p>
                </header>

                {/* --- Login Form --- */}
                <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register('email', { required: true })}
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500 outline-none transition duration-150"
                        />
                        {
                            errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>
                        }

                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            {...register('password', { required: true, minLength: 6 })}
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500 outline-none transition duration-150"
                        />
                        {
                            errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters  or longer </p>
                        }
                    </div>

                    {/* Forgot Password Link */}
                    <div className="text-right">
                        <a href="/forgot-password" className="text-sm font-medium text-gray-600 hover:text-gray-800 transition duration-150">
                            Forgot Password?
                        </a>
                    </div>

                    {/* Login Button (Lime Green, as in image) */}
                    <button
                        type="submit"
                        className="w-full py-3 text-lg font-semibold text-gray-900 bg-lime-400 rounded-lg hover:bg-lime-500 transition duration-150 shadow-md hover:shadow-lg"
                    >
                        Login
                    </button>
                </form>

                {/* --- Registration Link & Divider --- */}
                <div className="mt-6 text-center">
                    <p className="text-base text-gray-700">
                        Don't have any account?{' '}
                        <Link to="/register" className="font-semibold text-primary hover:text-lime-700">
                            Register
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
                    <span className="text-base font-medium">Login with google</span>
                </button>

            </div>
        </div>
    );
};

export default Login;