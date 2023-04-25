import React, {useRef} from "react";
import './auth.scss';
import Flippy, {BackSide, FrontSide} from "react-flippy";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppleIcon from '@mui/icons-material/Apple';

export default function Auth() {
    const ref = useRef();




    return (
        <div className='auth'>
            <Flippy
                flipOnHover={false}
                flipOnClick={false}
                flipDirection="horizontal"
                ref={ref}
                style={{width: '768px', height: '480px'}}
            >
                <FrontSide className='blur-bg'>
                    <div className="container" id="container">
                        <div className="form-container">
                            <form action="#">
                                <h1>Sign in</h1>
                                <div className="social-container">
                                    <a href="#" className="social"><GoogleIcon/></a>
                                    <a href="#" className="social"><GitHubIcon/></a>
                                    <a href="#" className="social"><AppleIcon/></a>
                                </div>
                                <span>or use your account</span>
                                <input type="email" placeholder="Email"/>
                                <input type="password" placeholder="Password"/>
                                <a href="#">Forgot your password?</a>
                                <button>Sign In</button>
                            </form>
                        </div>
                        <div className="overlay-panel ">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={() => {
                                ref.current.toggle();
                            }}>Sign Up
                            </button>
                        </div>
                    </div>
                </FrontSide>
                <BackSide className='blur-bg'>
                    <div className="container" id="container">
                        <div className="overlay-panel ">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={() => {
                                ref.current.toggle()
                            }}>Sign In
                            </button>
                        </div>
                        <div className="form-container">
                            <form action="#">
                                <h1>Create Account</h1>
                                <div className="social-container">
                                    <a href="#" className="social"><GoogleIcon/></a>
                                    <a href="#" className="social"><GitHubIcon/></a>
                                    <a href="#" className="social"><AppleIcon/></a>
                                </div>
                                <span>or use your email for registration</span>
                                <input type="text" placeholder="Name"/>
                                <input type="email" placeholder="Email"/>
                                <input type="password" placeholder="Password"/>
                                <button>Sign Up</button>
                            </form>
                        </div>

                    </div>

                </BackSide>
            </Flippy>
        </div>
    )
}