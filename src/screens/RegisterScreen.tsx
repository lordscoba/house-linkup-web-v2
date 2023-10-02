import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StoreReducerTypes } from '../redux/store';
import { registerAction } from '../redux/actions/auth-actions/auth.actions';
import { RESET_REGISTER } from '../redux/constants/auth/auth.constants';
import { Register_BG } from '../assets/images';
import { Logo } from '../assets/icons';
import Message from '../components/message/Message';
import { Loader } from '../components/loader';

type Props = {};

const RegisterScreen = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<Boolean>(false);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');

  const register = useSelector(
    (state: StoreReducerTypes) => state.registerUser
  );

  const loading = register?.loading;
  const registerSuccess = register?.success;
  const registerError = register?.error;
  const registerServerResponse = register?.serverResponse;
  const registerServerError = register?.serverError;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      registerAction({ email, full_name: fullName, password, username }) as any
    );
  };

  useEffect(() => {
    let timeOut: ReturnType<typeof setTimeout>;
    if (registerSuccess) {
      timeOut = setTimeout(() => {
        navigate('/login');
        registerServerResponse.message = '';
        dispatch({ type: RESET_REGISTER });
      }, 5000);
    }

    return () => clearTimeout(timeOut);
  }, [registerSuccess, navigate]);

  useEffect(() => {
    const checkTokenExist = localStorage.getItem('loginUser');

    if (checkTokenExist) {
      navigate('/');
    }
  }, []);

  return (
    <div className="  flex flex-col-reverse xl:flex-row   ">
      <section className="w-full hidden xl:block   xl:min-w-[50%] h-[900px] relative">
        <img src={Register_BG} alt="" className="object-cover w-full h-full " />
      </section>
      <section className="w-full border">
        <div className="py-4 xl:pl-[34px] px-4 flex items-center gap-[160px]">
          <div
            className=" flex items-center gap-4 "
            onClick={() => navigate('/')}
          >
            <img
              src={Logo}
              alt="logo"
              className="object-cover cursor-pointer"
            />

            <h2 className="xl:text-[24px] text-[20px] font-semibold text-[#4BA586] cursor-pointer">
              HouseLinkUp
            </h2>
          </div>
        </div>

        {/* SECOND SECTION */}
        <section className="text-center">
          <h4 className="xl:text-[35px] text-[25px] leading-[6.5px] text-[#000] font-[600] mb-[22px] mt-[19px]">
            Sign Up
          </h4>
          <p className="md:text-[22px] text-[18px] font-[400] mb-[24px]">
            Get started absolutely free
          </p>

          {loading ? <Loader variant="circular" /> : null}

          {registerSuccess ? (
            <Message type="success">{registerServerResponse?.message}</Message>
          ) : null}

          {registerError ? (
            <Message type="danger">
              {registerError ? registerServerError?.message : null}
            </Message>
          ) : null}
          <form
            className="w-full md:max-w-[720px] m-auto mt-[25px] px-[22px] mb-[25px] xl:mb-0"
            onSubmit={handleSubmit}
          >
            <div className="mb-[20px]">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e: any) => setFullName(e.target.value)}
                required
                className="w-full border rounded-lg focus:border-[grey] px-3 py-3"
              />
            </div>
            <div className="mb-[20px]">
              <input
                type="text"
                placeholder="User Name"
                value={username}
                onChange={(e: any) => setUsername(e.target.value)}
                required
                className="w-full border rounded-lg focus:border-[grey] px-3 py-3"
              />
            </div>
            <div className="mb-[20px]">
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                required
                className="w-full border rounded-lg  px-3 py-3"
              />
            </div>
            <div className="mb-[20px] relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                required
                className="w-full border rounded-lg px-3 py-3"
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
            <div>
              <button
                type="submit"
                className="w-full bg-[#69B99D] text-[#000] py-3 rounded-lg"
              >
                Create Account
              </button>
            </div>

            <div className=" mt-4 flex gap-2">
              <p className="text-[#000] font-[300] text-[15px]">
                Have an account?
              </p>{' '}
              <Link
                to={'/login'}
                className="text-[15px] text-[#69B99D] font-[600] "
              >
                Sign in!
              </Link>
            </div>
          </form>
        </section>
      </section>
    </div>
  );
};

export default RegisterScreen;
