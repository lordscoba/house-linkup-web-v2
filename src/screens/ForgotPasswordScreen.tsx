import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreReducerTypes } from '../redux/store';
import { forgotPassordAction } from '../redux/actions/auth-actions/auth.actions';
import { RESET_FORGOT_PASSWORD } from '../redux/constants/auth/auth.constants';
import Message from '../components/message/Message';
import { Link } from 'react-router-dom';
import { Loader } from '../components/loader';

type Props = {};

const ForgotPasswordScreen = (props: Props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  const forgot_password = useSelector(
    (state: StoreReducerTypes) => state.forgotPassword
  );

  const loading = forgot_password?.loading;
  const forgot_passwordSuccess = forgot_password?.success;
  const forgot_passwordError = forgot_password?.error;
  const forgot_passwordServerResponse = forgot_password?.serverResponse;
  const forgot_passwordServerError = forgot_password?.serverError;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(forgotPassordAction({ email }) as any);
  };

  useEffect(() => {
    let timeOut: ReturnType<typeof setTimeout>;
    if (forgot_passwordSuccess) {
      timeOut = setTimeout(() => {
        forgot_passwordServerResponse.message = '';
        dispatch({ type: RESET_FORGOT_PASSWORD });
      }, 5000);
    }

    return () => clearTimeout(timeOut);
  }, [forgot_passwordSuccess]);

  return (
    <div className="h-screen flex flex-col items-center   w-full max-w-[50rem] m-auto text-center pt-[3rem]">
      <section className="border rounded-lg w-full xl:w-[35rem] lg:w-[35rem] md:w-[35rem] flex justify-center flex-col items-center py-6">
        <h2 className="mb-[2rem] font-semibold xl:text-[32px] text-[25px]">
          Forgot Password
        </h2>

        {loading ? <Loader variant="circular" /> : null}
        {forgot_passwordSuccess ? (
          <Message type="success">
            {forgot_passwordServerResponse?.message}
          </Message>
        ) : null}
        {forgot_passwordError ? (
          <Message type="danger">
            {' '}
            {forgot_passwordServerError?.message}
          </Message>
        ) : null}
        <form className="w-[25rem] px-[38px]" onSubmit={handleSubmit}>
          <h4 className="   text-center capitalize font-medium mb-[1.5rem]">
            Enter Email address
          </h4>
          <div className="mb-[30px] relative">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              required
              placeholder="Enter Email"
              className="border w-full rounded-lg pl-3 py-2 mb-4"
            />
          </div>
          <div>
            <Link to={'/login'} className="text-[#909090] mb-3">
              {' '}
              Back to login
            </Link>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#69B99D] rounded-lg text-[#fff] font-semibold mt-8"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default ForgotPasswordScreen;
