import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import api from '../../utils/api';
import { setAlert } from '../../actions/alert';

// load user
const loadUser = async () => {
  try {
    const res = await api.get('/auth');
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const VerifyEmail = () => {
  const [formData, setFormData] = useState({
    validationCode: '',
  });
  const [user, setUser] = useState();

  const validateEmail = async () => {
    await api.post('/auth/validate-email');
  };

  useEffect(() => {
    // check if the email is already verified, if so set an alert
    // setAlert('Email already verified', 'success');
    loadUser().then((data) => {
      setUser(data);
    });
    if (user && user.emailVerified) {
      setAlert('Email already verified', 'success');
      return <Navigate to='/dashboard' />;
    }
    // else send the email verification code
    else {
      validateEmail();
      setAlert('Please Check your mailbox for the code.', 'success');
    }
  }, []);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post('/auth/validate-email', formData);
    if (!res.data.errors) {
      setAlert('Email verified!', 'success');
      return <Navigate to='/dashboard' />;
    }
  };

  return (
    <div className='container'>
      <div className='bg-white shadow sm:rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <h3 className='text-lg font-medium leading-6 text-gray-900'>
            Verify your email
          </h3>
          <div className='mt-2 max-w-xl text-sm text-gray-500'>
            <p>
              A verification code has been sent to your email. Please Check your
              mailbox for the code.
            </p>
          </div>
          <form className='mt-5 sm:flex sm:items-center'>
            <div className='w-full sm:max-w-xs'>
              <label htmlFor='validationCode' className='sr-only'>
                Verification Code
              </label>
              <input
                type='text'
                name='validationCode'
                id='validationCode'
                className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                placeholder='Verification Code'
                onChange={onChange}
              />
            </div>
            <br />
            <button type='submit' className='btn' onSubmit={onSubmit}>
              Submit
            </button>
          </form>
        </div>
        <div className='p-1 text-right sm:px-6'>
          <a
            href='/dashboard'
            className='text-indigo-600 hover:text-indigo-500'
          >
            Back to dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
