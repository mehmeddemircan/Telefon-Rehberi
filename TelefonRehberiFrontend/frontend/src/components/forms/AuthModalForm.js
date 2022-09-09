import { Button, Checkbox, Form, Input } from "antd";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ContinueWithButtons from "../button/ContinueWithButtons";

const AuthModalForm = ({
  form,
  firstName,
  lastName,
  email,
  password,
  register,
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setRegister,
  handleUserAuth,
}) => {
  return (
    <Fragment>
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        style={{ maxHeight: 520, overflowY: "auto", padding: "0px 16px" }}
      >
        {register && (
          <>
            <Input
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoFocus
              style={{ height: 40, borderRadius: 8, marginBottom: 10 }}
            />
            <Input
              name="lastName"
              placeholder="Surname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{ height: 40, borderRadius: 8, marginBottom: 10 }}
            />
          </>
        )}

        <Input
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ height: 40, borderRadius: 8, marginBottom: 10 }}
        />

        <Input.Password
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ height: 40, borderRadius: 8, marginBottom: 10 }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "15px 0px",
          }}
        >
          <Checkbox checked>Remember me</Checkbox>

          <div>
            {register ? (
              <Button
                type="text"
                onClick={() => setRegister(false)}
                style={{ color: "#222" }}
              >
                Already have account?{" "}
              </Button>
            ) : (
              <Link
                style={{ color: "#222", textDecoration: "underline" }}
                to="/forgot-password"
              >
                Forgot password?
              </Link>
            )}
          </div>
        </div>
        <Form.Item>
          <Button
          type="submit"
            style={{
              width: "100%",
              height: 50,
              borderRadius: 10,
              background: "rgb(255, 56, 92",
              color: "#fff",
              fontSize: 20,
            }}
            onClick={handleUserAuth}
            //   onClick={userLogin}
          >
            Continue
          </Button>
        </Form.Item>

        {/* <hr /> */}
        <ContinueWithButtons />
      </Form>
    </Fragment>
  );
};

export default AuthModalForm;
