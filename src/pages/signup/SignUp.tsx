import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import UserSignup from '../../hooks/userSignup'

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  })

  const {signup, loading} = UserSignup();

  const handleGenderCheck = (gender: string) => {
    setInputs({ ...inputs, gender })
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    console.log(inputs);
    e.preventDefault();
    await signup(inputs);
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up
          <span className='text-[#186b8c]'> ChatApp</span>
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full name</span>
            </label>
            <input
              type="text" placeholder='Enter fullname' className='w-full input input-bordered h-10'
              value={inputs.fullname} onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'
              value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10'
              value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10'
              value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>
          <GenderCheckBox onGenderCheck = {handleGenderCheck} selectedGender = {inputs.gender} />
          <Link to={'/login'} className='text hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account?</Link>
          <div>
            <button className='btn btn-block btn-sm mt-2' disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : 'Sign Up'}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default SignUp