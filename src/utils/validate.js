export const checkValidData = (email, pasword) => {
  const isEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pasword);

  if (!isEmailvalid) {
    return "Email Id is not valid";
  }

  if (!isPasswordValid) {
    return "Password is not valid";
  }

  return null;
};
