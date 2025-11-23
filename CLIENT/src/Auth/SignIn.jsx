import React, { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: '',
    agree: false,
  })
  const [error, setError] = useState('')
  const { signup, error: signupError, isLoading } = useSignup()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.firstName || !form.lastName || !form.email || !form.password || !form.confirm) {
      setError('Please fill out all fields.')
      return
    }
    if (form.password !== form.confirm) {
      setError("Passwords don't match.")
      return
    }
    if (!form.agree) {
      setError('You must agree to the terms.')
      return
    }

    await signup(form.firstName, form.lastName, form.email, form.password)
  }

  return (
    <section className='flex items-center justify-center bg-gray-50'>
      <div className='max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-28'>
        <div className='bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2'>
          {/* left - form */}
          <div className='p-8 lg:p-12'>
            <h1 className='text-2xl lg:text-[28px] font-semibold outfit-semibold tracking-tight leading-7 mb-3'>
              Join our community of home seekers and explore the possibilities that await.
            </h1>
            <p className='text-sm text-gray-600 mb-6 outfit-regular'>Let's get started by filling out the information below</p>

            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='flex gap-4'>
                <div className='flex-1'>
                  <label htmlFor='firstName' className='block text-xs font-medium text-gray-600 mb-1'>First name</label>
                  <input
                    id='firstName'
                    name='firstName'
                    value={form.firstName}
                    onChange={handleChange}
                    className='w-full border border-gray-200 px-3 py-2 rounded text-sm'
                    placeholder='Enter Name'
                  />
                </div>

                <div className='flex-1'>
                  <label htmlFor='lastName' className='block text-xs font-medium text-gray-600 mb-1'>Last name</label>
                  <input
                    id='lastName'
                    name='lastName'
                    value={form.lastName}
                    onChange={handleChange}
                    className='w-full border border-gray-200 px-3 py-2 rounded text-sm'
                    placeholder='Enter Name'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='email' className='block text-xs font-medium text-gray-600 mb-1'>Email</label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  value={form.email}
                  onChange={handleChange}
                  className='w-full border border-gray-200 px-3 py-2 rounded text-sm'
                  placeholder='Enter your Email'
                />
              </div>

              <div>
                <label htmlFor='password' className='block text-xs font-medium text-gray-600 mb-1'>Password</label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  value={form.password}
                  onChange={handleChange}
                  className='w-full border border-gray-200 px-3 py-2 rounded text-sm'
                  placeholder='Enter your password'
                />
              </div>

              <div>
                <label htmlFor='confirm' className='block text-xs font-medium text-gray-600 mb-1'>Confirm password</label>
                <input
                  id='confirm'
                  name='confirm'
                  type='password'
                  value={form.confirm}
                  onChange={handleChange}
                  className='w-full border border-gray-200 px-3 py-2 rounded text-sm'
                  placeholder='Confirm your password'
                />
              </div>

              <div className='flex items-center gap-3'>
                <input
                  id='agree'
                  name='agree'
                  type='checkbox'
                  checked={form.agree}
                  onChange={handleChange}
                  className='h-4 w-4 text-green-600 border-gray-300 rounded'
                />
                <label htmlFor='agree' className='text-sm text-gray-600'>
                  I agree to <span className='text-green-600'>Terms of Service</span> and <span className='text-green-600'>Privacy Policies</span>
                </label>
              </div>

              {error && <p className='text-xs text-red-600'>{error}</p>}
              {signupError && <p className='text-xs text-red-600'>{signupError}</p>}

              <button disabled={isLoading} type='submit' className='w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-medium disabled:opacity-50'>
                Sign up
              </button>

              <div className='flex items-center gap-3'>
                <div className='flex-1 h-px bg-gray-200' />
                <div className='text-xs text-gray-400'>or</div>
                <div className='flex-1 h-px bg-gray-200' />
              </div>

              {/* fixed: single button element containing icon + text */}
              <button
                type='button'
                onClick={() => console.log('google signin')}
                className='w-full border border-gray-300 py-3 rounded-md flex items-center justify-center gap-3 text-sm'
              >
                <img src='https://www.svgrepo.com/show/355037/google.svg' alt='google' className='w-4 h-4' />
                <span>Continue with Google</span>
              </button>

              <p className='text-sm text-gray-500 text-center'>
                Already have an account? <Link to='/Login' className='text-green-600'>Sign in</Link>
              </p>
            </form>
          </div>

          {/* right - image */}
          <div className='relative hidden lg:block'>
            <img
              src='https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763720660/Frame_1000002379_kczjki.png'
              alt='Sign-in Image'
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black/30' /></div>
        </div>
      </div>
    </section>
  )
}

export default SignIn