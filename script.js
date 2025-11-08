/* TAB Switching :- Login- Sign Up */
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginTab.onclick = () => {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
};

signupTab.onclick = () => {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
};

/* LOGIN FORM:- Password- OTP Toggle */
const passwordBtn = document.getElementById("passwordBtn");
const otpBtn = document.getElementById("otpBtn");
const passwordField = document.getElementById("passwordField");
const otpField = document.getElementById("otpField");

passwordBtn.onclick = () => {
  passwordBtn.classList.add("active");
  otpBtn.classList.remove("active");
  passwordField.classList.remove("hidden");
  otpField.classList.add("hidden");
};

otpBtn.onclick = () => {
  otpBtn.classList.add("active");
  passwordBtn.classList.remove("active");
  otpField.classList.remove("hidden");
  passwordField.classList.add("hidden");
};

/* Password visibility toggle (Login)*/
const toggleLoginPwd = document.getElementById("toggleLoginPwd");
const loginPassword = document.getElementById("loginPassword");
const eyeIcon = document.getElementById("eyeIcon");

toggleLoginPwd.onclick = () => {
  if (loginPassword.type === "password") {
    loginPassword.type = "text";
    eyeIcon.textContent = "visibility_off";
  } else {
    loginPassword.type = "password";
    eyeIcon.textContent = "visibility";
  }
};

/* SIGNUP FORM:- OTP/ password Toggle */
const otpSignupBtn = document.getElementById("otpSignupBtn");
const pwdSignupBtn = document.getElementById("pwdSignupBtn");
const signupOtpField = document.getElementById("signupOtpField");
const signupPwdField = document.getElementById("signupPwdField");

otpSignupBtn.onclick = () => {
  otpSignupBtn.classList.add("active");
  pwdSignupBtn.classList.remove("active");
  signupOtpField.classList.remove("hidden");
  signupPwdField.classList.add("hidden");
};

pwdSignupBtn.onclick = () => {
  pwdSignupBtn.classList.add("active");
  otpSignupBtn.classList.remove("active");
  signupPwdField.classList.remove("hidden");
  signupOtpField.classList.add("hidden");
};

/* Password visibility toggle (Signup) */
const toggleSignupPwd = document.getElementById("toggleSignupPwd");
const signupPassword = document.getElementById("signupPassword");
const eyeIconSignup = document.getElementById("eyeIconSignup");

toggleSignupPwd.onclick = () => {
  if (signupPassword.type === "password") {
    signupPassword.type = "text";
    eyeIconSignup.textContent = "visibility_off";
  } else {
    signupPassword.type = "password";
    eyeIconSignup.textContent = "visibility";
  }
};
