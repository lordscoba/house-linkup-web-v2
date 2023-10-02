import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StoreReducerTypes } from '../redux/store';
import { resetPasswordAction } from '../redux/actions/auth-actions/auth.actions';
import { RESET_RESET_PASSWORD } from '../redux/constants/auth/auth.constants';
import Message from '../components/message/Message';
import { Loader } from '../components/loader';

type Props = {};

const ResetPasswordScreen = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<Boolean>(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const location = useLocation();
  const token = location.pathname.split('/')[2];

  const reset_password = useSelector(
    (state: StoreReducerTypes) => state.resetPassword
  );

  const loading = reset_password?.loading;
  const reset_passwordSuccess = reset_password?.success;
  const reset_passwordError = reset_password?.error;
  const reset_passwordServerResponse = reset_password?.serverResponse;
  const reset_passwordServerError = reset_password?.serverError;

  // HANDLESUBMIT FUNCTION HERE

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetPasswordAction({ password, token }) as any);
  };

  useEffect(() => {
    let timeOut: ReturnType<typeof setTimeout>;
    if (reset_passwordSuccess) {
      timeOut = setTimeout(() => {
        reset_passwordServerResponse.message = '';
        navigate('/login');
        dispatch({ type: RESET_RESET_PASSWORD });
      }, 5000);
    }

    return () => clearTimeout(timeOut);
  }, [reset_passwordSuccess]);

  return (
    <div className="h-screen flex flex-col items-center   w-full max-w-[50rem] m-auto text-center pt-[3rem]">
      <section className="border rounded-lg w-full xl:w-[35rem] lg:w-[35rem] md:w-[35rem] flex justify-center flex-col items-center py-6">
        <h2 className="mb-[2rem] font-semibold xl:text-[32px] text-[25px]">
          Reset Password
        </h2>

        {loading ? <Loader variant="circular" /> : null}
        {reset_passwordSuccess ? (
          <Message type="success">
            {reset_passwordServerResponse?.message}
          </Message>
        ) : null}
        {reset_passwordError ? (
          <Message type="danger"> {reset_passwordServerError?.message}</Message>
        ) : null}

        <form className="w-[25rem] px-[38px]" onSubmit={handleSubmit}>
          <h4 className="   text-center capitalize font-medium mb-[1.5rem]">
            Enter New Password
          </h4>

          <div className="mb-[30px] relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              required
              placeholder="Confirm password"
              className="border w-full rounded-lg pl-3 py-2 mb-4"
            />
            <div
              className="absolute right-[3%] top-[30%] bottom-[30%] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {/* Eye crossed */}

              {!showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M2.74577 13.0907C3.07127 13.4161 3.59887 13.416 3.92425 13.0905C4.24963 12.765 4.24955 12.2374 3.92405 11.9121L2.01189 10.0006L4.90245 7.11C6.64724 5.36522 9.12414 4.6543 11.4945 5.15374C11.9448 5.24862 12.3868 4.96047 12.4817 4.51013C12.5766 4.05979 12.2884 3.61782 11.8381 3.52294C8.92216 2.90859 5.87129 3.78418 3.72394 5.93153L0.244064 9.4114C-0.0813936 9.73686 -0.0813546 10.2646 0.244181 10.59L2.74577 13.0907Z"
                    fill="#B8B8B8"
                  />
                  <path
                    d="M19.7566 9.41052L17.255 6.90978C16.9295 6.5844 16.4019 6.58448 16.0765 6.90998C15.7511 7.23547 15.7512 7.76307 16.0767 8.08845L17.9888 9.99995L15.0983 12.8905C13.3535 14.6353 10.8766 15.3462 8.50624 14.8468C8.0559 14.7519 7.61393 15.04 7.51905 15.4904C7.42417 15.9407 7.71232 16.3827 8.16266 16.4776C11.0786 17.0919 14.1294 16.2163 16.2768 14.069L19.7567 10.5891C20.0821 10.2636 20.0821 9.73589 19.7566 9.41052Z"
                    fill="#B8B8B8"
                  />
                  <path
                    d="M5.83398 10.0003C5.83398 10.4605 6.20706 10.8336 6.66728 10.8336C7.12749 10.8336 7.50057 10.4605 7.50057 10.0003C7.50057 8.61973 8.61994 7.50035 10.0005 7.50035C10.4607 7.50035 10.8338 7.12728 10.8338 6.66706C10.8338 6.20684 10.4607 5.83377 10.0005 5.83377C7.6995 5.83373 5.83398 7.69925 5.83398 10.0003Z"
                    fill="#B8B8B8"
                  />
                  <path
                    d="M12.5002 10.0003C12.5002 11.3808 11.3808 12.5002 10.0003 12.5002C9.54007 12.5002 9.16699 12.8732 9.16699 13.3335C9.16699 13.7937 9.54007 14.1668 10.0003 14.1668C12.3013 14.1668 14.1668 12.3012 14.1668 10.0002C14.1668 9.54 13.7937 9.16693 13.3335 9.16693C12.8733 9.16693 12.5002 9.54004 12.5002 10.0003Z"
                    fill="#B8B8B8"
                  />
                  <path
                    d="M19.7552 0.244064C19.4298 -0.0813546 18.9022 -0.0813546 18.5767 0.244064L0.244064 18.5767C-0.0813546 18.9022 -0.0813546 19.4298 0.244064 19.7552C0.569482 20.0806 1.09712 20.0806 1.42254 19.7552L19.7552 1.42254C20.0807 1.09712 20.0807 0.569482 19.7552 0.244064Z"
                    fill="#B8B8B8"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </div>
          </div>

          <div className="mb-[30px] relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e: any) => setConfirmPassword(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-3"
            />
            <div
              className="absolute right-[3%] top-[30%] bottom-[30%] cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {/* Eye crossed */}

              {!showConfirmPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M2.74577 13.0907C3.07127 13.4161 3.59887 13.416 3.92425 13.0905C4.24963 12.765 4.24955 12.2374 3.92405 11.9121L2.01189 10.0006L4.90245 7.11C6.64724 5.36522 9.12414 4.6543 11.4945 5.15374C11.9448 5.24862 12.3868 4.96047 12.4817 4.51013C12.5766 4.05979 12.2884 3.61782 11.8381 3.52294C8.92216 2.90859 5.87129 3.78418 3.72394 5.93153L0.244064 9.4114C-0.0813936 9.73686 -0.0813546 10.2646 0.244181 10.59L2.74577 13.0907Z"
                    fill="#B8B8B8"
                  />
                  <path
                    d="M19.7566 9.41052L17.255 6.90978C16.9295 6.5844 16.4019 6.58448 16.0765 6.90998C15.7511 7.23547 15.7512 7.76307 16.0767 8.08845L17.9888 9.99995L15.0983 12.8905C13.3535 14.6353 10.8766 15.3462 8.50624 14.8468C8.0559 14.7519 7.61393 15.04 7.51905 15.4904C7.42417 15.9407 7.71232 16.3827 8.16266 16.4776C11.0786 17.0919 14.1294 16.2163 16.2768 14.069L19.7567 10.5891C20.0821 10.2636 20.0821 9.73589 19.7566 9.41052Z"
                    fill="#B8B8B8"
                  />
                  <path
                    d="M5.83398 10.0003C5.83398 10.4605 6.20706 10.8336 6.66728 10.8336C7.12749 10.8336 7.50057 10.4605 7.50057 10.0003C7.50057 8.61973 8.61994 7.50035 10.0005 7.50035C10.4607 7.50035 10.8338 7.12728 10.8338 6.66706C10.8338 6.20684 10.4607 5.83377 10.0005 5.83377C7.6995 5.83373 5.83398 7.69925 5.83398 10.0003Z"
                    fill="#B8B8B8"
                  />
                  <path
                    d="M12.5002 10.0003C12.5002 11.3808 11.3808 12.5002 10.0003 12.5002C9.54007 12.5002 9.16699 12.8732 9.16699 13.3335C9.16699 13.7937 9.54007 14.1668 10.0003 14.1668C12.3013 14.1668 14.1668 12.3012 14.1668 10.0002C14.1668 9.54 13.7937 9.16693 13.3335 9.16693C12.8733 9.16693 12.5002 9.54004 12.5002 10.0003Z"
                    fill="#B8B8B8"
                  />
                  <path
                    d="M19.7552 0.244064C19.4298 -0.0813546 18.9022 -0.0813546 18.5767 0.244064L0.244064 18.5767C-0.0813546 18.9022 -0.0813546 19.4298 0.244064 19.7552C0.569482 20.0806 1.09712 20.0806 1.42254 19.7552L19.7552 1.42254C20.0807 1.09712 20.0807 0.569482 19.7552 0.244064Z"
                    fill="#B8B8B8"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </div>
          </div>
          {/* <div>
                <Link to={'/login'} className="text-[#909090] mb-3">
                  {' '}
                  Back to login
                </Link>
              </div> */}
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

export default ResetPasswordScreen;
