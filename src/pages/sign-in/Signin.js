
import React from "react";
import {
    SigninParent,
    SigninWrapper,
    Wrapper,
    FormHeader,
    FooterWrapper,
    LogoContainer
} from "./sign.in.styles";
import { Link } from "react-router-dom";
import FormTextInput from "../../components/custom-input/FormTextInput";
import arrow from "../../assets/arrow.png";
import FormButton from "../../components/custom-button/FormButton";
import Footer from "../../components/footer/Footer";
import logo from "../../assets/logo.png";








const Signin = () => {


    return (
        <SigninParent>
            <SigninWrapper>
            <LogoContainer>
                    <img src={logo} alt="logo" />
                    </LogoContainer>
                <Wrapper>

                    <form>
                        <FormHeader>
                            <h3>SIGN IN</h3>

                            <img src={arrow} alt="arrow" />
                            <h5>Welcome back!</h5>
                        </FormHeader>

                        <FormTextInput
                            labelName="Email address"
                            placeholder="E.g naomiroberts@gmail.com"
                            name="emailAddress"

                        />

                        <FormTextInput
                            labelName="Password"
                            placeholder="********"
                            name="password"

                        />

                        <FormButton
                            text="Sign in"
                            color="#fff"
                            borderColor="#00B9E5"
                        />

                        <p>Don't have an account?<Link to="/sign-up" style={{ textDecoration: 'none', color: '#CCF1FA' }}>Sign up</Link></p>


                    </form>
                    
                </Wrapper>
                <FooterWrapper>
                        <Footer />
                    </FooterWrapper>
            </SigninWrapper>
        </SigninParent>

    );
};

export default Signin;