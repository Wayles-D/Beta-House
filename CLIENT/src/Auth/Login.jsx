import React, { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { Link } from 'react-router-dom'

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState('')
  const { login, error: loginError, isLoading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please enter email and password.')
      return
    }
    setError('')

    await login(email, password)
  }

  return (
    <section className='flex items-center justify-center bg-gray-50 py-28'>
      <div className='max-w-4xl w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2'>
        <div className='p-8 lg:p-12'>
          <h2 className='text-lg font-semibold mb-4'>Welcome Back to BetaHouse!</h2>
          <p className='text-sm text-gray-600 mb-6'>Let's get started by filling out the information below</p>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='block text-xs text-gray-600 mb-1'>Email</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full border border-gray-200 px-3 py-2 rounded text-sm'
                placeholder='Enter your Email'
              />
            </div>

            <div>
              <label className='block text-xs text-gray-600 mb-1'>Password</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full border border-gray-200 px-3 py-2 rounded text-sm'
                placeholder='Enter your password'
              />
            </div>

            <div className='flex items-center justify-between'>
              <label className='flex items-center gap-2 text-sm'>
                <input type='checkbox' checked={remember} onChange={(e) => setRemember(e.target.checked)} className='h-4 w-4' />
                Remember Me
              </label>
              <a href='#' className='text-sm text-green-600'>Forgot Password</a>
            </div>

            {error && <p className='text-xs text-red-600'>{error}</p>}
            {loginError && <p className='text-xs text-red-600'>{loginError}</p>}

            <button disabled={isLoading} className='w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md disabled:opacity-50'>Sign in</button>

            <div className='flex items-center gap-3'>
              <div className='flex-1 h-px bg-gray-200' />
              <div className='text-xs text-gray-400'>or</div>
              <div className='flex-1 h-px bg-gray-200' />
            </div>

            <button type='button' onClick={() => console.log('google signin')} className='w-full border border-gray-300 py-3 rounded-md flex items-center justify-center gap-3 text-sm'>
              <img src='https://www.svgrepo.com/show/355037/google.svg' alt='google' className='w-4 h-4' />
              <span>Continue with Google</span>
            </button>

            <p className='text-sm text-center text-gray-500 mt-3'>
              New User? <Link to={'/Signin'} className='text-green-600'>Sign Up</Link>
            </p>
          </form>
        </div>

        <div className='relative hidden lg:block'>
          <img
            src='https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763720660/Frame_1000002379_kczjki.png'
            alt='Login image'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/30' />
        </div>
      </div>
    </section>
  )
}

export default Login