export const checkValidData = (email, pasword, username) => {
  const isEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pasword);

  const isUsernameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(username);

  if (!isEmailvalid) {
    return "Email Id is not valid";
  }

  if (!isPasswordValid) {
    return "Password is not valid";
  }

  if (!isUsernameValid) {
    return "Username is not valid";
  }

  return null;
};
