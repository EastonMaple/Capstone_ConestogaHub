import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

const VerifyEmail = ({ setAlert, user }) => {
  const [formData, setFormData] = useState({
    validationCode: '',
  });
  const navigate = useNavigate();

  const validateEmail = async () => {
    await api.post('/auth/validate-email');
  };

  const fetchData = () => {
    try {
      while (!user) {
        // wait for user to load
      }
      // console.log(user);
      // check if the email is already verified, if so return to dashboard
      if (user && user.emailVerified) {
        setAlert('Email already verified', 'success');
        navigate('/dashboard');
      } else {
        // send a new code
        validateEmail();
        setAlert('Please Check your mailbox for the code.', 'success');
      }
    } catch (error) {
      console.error(error);
      setAlert('Failed to load user data', 'error');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // validation for input
    if (
      formData.validationCode.length !== 6 ||
      isNaN(parseInt(formData.validationCode))
    ) {
      setAlert('Please enter a valid code', 'error');
      return false;
    } else {
      try {
        const res = await api.post('/auth/validate-email', formData);
        if (!res.data.errors) {
          setAlert('Email verified!', 'success');
          await api.put('/auth/update');
          navigate('/dashboard');
        }
      } catch (err) {
        console.error(err);
        setAlert('Failed to verify email', 'error');
      }
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
          <form className='mt-5 sm:flex sm:items-center' onSubmit={onSubmit}>
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
            <input type='submit' className='btn btn-primary my-1' />
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

VerifyEmail.propTypes = {
  setAlert: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { setAlert })(VerifyEmail);
