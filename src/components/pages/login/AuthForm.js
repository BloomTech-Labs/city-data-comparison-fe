//component used for signup and login forms because there were a lot of similarites between the two.
//Most elements are conditionally rendered

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login, signup } from "../../../redux/actions/userActions";

//react hook form is used for validation instead of formik
import { useForm } from "react-hook-form";

//component for each oauth button
import "./OauthButton";
//icons for oauth buttons
import Google from "../../../assets/icons/google.svg";
import Linkedin from "../../../assets/icons/linkedin.svg";

//modal that contains the privacy policy
import Modal from "../../modal/modal";
import useModal from "../../modal/useModal";
import PrivacyPolicy from "../privacypolicy/PrivacyPolicy";

//styled component icons instead of fontawesome
import styled from "styled-components/macro";
import { User } from "styled-icons/boxicons-regular/User";
import { LockAlt } from "styled-icons/boxicons-regular/LockAlt";

//styling
import "./forms.scss";
import OauthButton from "./OauthButton";

//illustrations for forms
import signin_photo from "./assets/world_map.svg";
import signup_photo from "./assets/destinations.svg";
import mobile_blue from "./assets/town_blue.svg";

//styled icons
const UsernameIcon = styled(User)`
  color: #d6d6d6;
`;
const LockIcon = styled(LockAlt)`
  color: #d6d6d6;
`;

const AuthForm = (props) => {
  const history = useHistory();

  //list of companies
  const companies = [
    { name: "Google", icon: Google },
    { name: "Linkedin", icon: Linkedin },
  ];

  //state used for react-hook-form
  const { register, handleSubmit, errors } = useForm();

  //state for modal
  const { isShowing, toggle } = useModal();
  const [modalState, setModalState] = useState();

  //state
  const errorMsg = useSelector((state) => state.userReducer.error);
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    if (props.action === "Login") {
      dispatch(login(credentials));
      history.push("/compare");
    }
    if (props.action === "Signup") {
      dispatch(signup(credentials));
      history.push("/compare");
    }
  };

  return (
    <>
      <Modal isShowing={isShowing} hide={toggle} component={modalState} />
      <div
        className={
          props.action === "Register"
            ? "authForm signinForm"
            : "authForm signupForm"
        }
      >
        {/*Container for left side of forms */}
        <div className="form">
          {/*this is the illustration that will display at the top for mobile/tablet screens */}
          <div className="mobileFormImage">
            <img src={mobile_blue} alt="citrics" />
          </div>

          <h2 className="formTitle">
            {props.action === "Login" ? "Welcome Back!" : "Create Your Account"}
          </h2>

          {/*container for auth buttons */}
          <div className="auth">
            {
              //mapping over list of companies defined on line 20
              companies.map((company) => (
                <OauthButton
                  key={Math.random()}
                  action={props.action}
                  company={company.name}
                  icon={company.icon}
                />
              ))
            }
          </div>

          {/*container for center text, input fields, checkbox, and submit button*/}
          <div className="bottomPortion">
            <div className="centerText">
              <div className="line"></div>
              <p className="center">or with username</p>
              <div className="line"></div>
            </div>

            <form className="fields" onSubmit={handleSubmit(onSubmit)}>
              {errors.username && errors.username.type === "required" && (
                <p className="formError">Your username is required</p>
              )}
              <div className="field">
                <div className="fieldIcon">
                  {" "}
                  <UsernameIcon />{" "}
                </div>
                <input
                  className="username"
                  type="text"
                  name="username"
                  placeholder="username"
                  onChange={onChange}
                  ref={register({
                    required: true,
                  })}
                />
              </div>

              {errors.password && errors.password.type === "required" && (
                <p className="formError">Your password is required</p>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <p className="formError">
                  Passwords must be at least 8 characters long
                </p>
              )}

              <div className="field">
                <div className="fieldIcon">
                  <LockIcon />
                </div>
                <input
                  className="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={register({
                    required: true,
                    minLength: {
                      value: 8,
                      message: "password must be at least 8 characters long",
                    },
                  })}
                  onChange={onChange}
                />
              </div>

              {errors.pp && (
                <p className="formError">
                  Accepting our privacy policy is required
                </p>
              )}
              {
                //if user is signing in display privacy policy checkbox

                props.action === "Register" ? (
                  <div className="pp">
                    <input
                      className="checkbox"
                      type="checkbox"
                      name="pp"
                      ref={register({ required: true })}
                    ></input>
                    <p className="accept-text">
                      Please accept our
                      <span
                        className="ppText"
                        style={{ margin: "2vw", cursor: "pointer" }}
                        onClick={() => {
                          setModalState(
                            <PrivacyPolicy register={props.register} />
                          );
                          toggle();
                        }}
                      >
                        privacy policy
                      </span>
                    </p>
                  </div>
                ) : (
                  <div></div>
                )
              }
              {errorMsg ? <p className="form-error">{errorMsg}</p> : null}

              <input
                className={`formButton ${props.action}Button`}
                value="Start Exploring Cities"
                type="submit"
              />

              <div className="question">
                {props.action === "Login" ? (
                  <div>
                    <p>Don't have an account? </p>{" "}
                    <Link
                      className="link-authform"
                      to="/signup"
                    >{` Sign up `}</Link>{" "}
                    <p>to explore cities</p>
                  </div>
                ) : (
                  <div>
                    {" "}
                    <p>Have an account? </p>{" "}
                    <Link className="link-authform" to="/signin">
                      {" "}
                      Login{" "}
                    </Link>{" "}
                    <p> to explore cities</p>{" "}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

        {/*Container for photo to be displayed right of form */}
        <div className={`authFormPhoto ${props.action}Photo`}>
          <img
            className="loginPhoto"
            src={props.action === "Register" ? signup_photo : signin_photo}
            alt={`{props.action} photo`}
          />
        </div>
      </div>
    </>
  );
};

export default AuthForm;
