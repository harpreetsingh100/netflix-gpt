import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firbase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { removeUser } from "../redux/userSlice";
import { toggleGptSearch } from "../redux/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../redux/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  return (
    <div
      className="absolute md:px-16 lg:px-24 md:py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row 
    justify-between">
      <img
        className="w-44 mx-auto md:mx-0 mt-2 md:mt-0"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex md:p-4 justify-center mt-[-8px]">
          {showGptSearch && (
            <select
              className="w-22 px-2 h-10 mt-2 bg-[#AA0101] rounded text-white mr-2 cursor-pointer text-sm md:text-md"
              onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => {
                return (
                  <option key={lang.identifier} value={lang.name}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}
          <button
            className=" px-2 py-2 h-10 mt-2 md:ml-2 text-white bg-purple-600  rounded  hover:bg-purple-800 text-sm md:text-md"
            onClick={handleGptSearch}>
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            className="md:w-12 md:h-[40px] md:mt-2 md:rounded md:ml-4 hidden md:inline-block "
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEWqAAH9+/v///+mAACkAACsAAD9+Pjy3d357u779PT46+vEZGTpyMj78fHHa2vBXV27SUnow8PkvLzu09PJd3faoKC9T0/Mf3/jtrbRjIy2PDyvCgv14+Px1tbbqKiuEhO2MDHSkZKzKCm5OTrTj4+wHyC5Q0PMenrBYGHWmZmwGxvit7fZoqKuERG+U1Njkco2AAAD20lEQVR4nO3ba3eaTBSGYZjhqCIqiCdi1SQ2Jnnz/3/ei5qD4iQtcSu0va8P7VpZ7V7PZmA4ZMayAAAAAAAAAAAAAAAAAAAAAAAAAACNpl81I4V4DG3F45tQqSiZ92rsUf9I+76nVJDMM0s0h05zpZRdKP7q1NajngT7GMWfyu8KxnD7+/b2lD1y5GpXcRxDDcQKz/yDwrvikzpGUffLMRKpykmpclE7FqpdJcbkNMZA5Ejr0UllW/kSlatxA0OOtkhpQ2VbSV7mv0Wnphi+wIxgrGyrztU7LF+F+xwLgcpPpsp2dH7lapzQFEMtBY50eSJ9Lb06v3IlrjnG+PwO3dxcuieQuoqFOUb/ch2+CKSuYm2OITEfNGQMs4udpYb7/a70ta/DW3OMjUCHS+Ms3RIIXY25w7VA5Z6xQ5nnpQoc07mkAol3AONpevWJxrJiU4w7kQNtmMWu/0hjfgEIXJnSm3JpFd6LVK5mEZ7kaAsdaD04Lq28aS3vh7FXyiFzju4MD16ulfJv6/mMoXuHrzlK9D1cZ756E03k6lY29N5zJGvZ46yzod9qtfx5V/YbV9UY7miQb3MML/A5TDuWa9X9uXT3wdS1GpADAAAAAAAAAAAAQKM0YPvHJWmr+5zkSVp/i5dJoH/Mw/2v82vZNnAoS3vyTerp+HWDi62iR+nqlZLslnDkE1eyR617hztL6tgY8WFl77fwBHdi46h1NzncOWOrn3Xuwxqrt8U93lBkHPXjsqVKC6O6AnW/yzlYwqS8+blLxfSs3Vel/orr8NpLeY8iHS21U3an/f3bl7YexuXh2x24h1oXMJXWSyrVer53qifSjm6Pg5Ph2y2xW9V6s9Ddk+WSRabNtMqKJq3d6aSjDO1tz9C6tgm+czam4678p/R3uiweyR7jSSc3dlfUCWVmr/Po9GTV675JL+8vuyvLMT1Zbn/m6FV7Ms4D8+BtS0Sb+/r7s7ZPV0+fRdz+PB/Mh2m2mr1vYHZniyzdzAf+278wKp4iRrUukTzirDufJrXfF4sqLwqi8GPx6Kf/Y3dz7cTfmK8uSGcD76vIlRTDt1zUPb+c0otNINFjMbs8Ce9SF6N1u3/eQG7P5H67oe3tObNREn55hX3ZXmuQNuDm8Atar7p907PJL9u7mcfNb29P61nv+ebryfK4ORUORotGn5yntGPFmyTyPrsrfNxBQn8+Kh5k/6z2XhVdTtNNx29FqsSLWrnvd+Z36cOt9Yd2966I/99inb3E7e7WQ/ySZevb1aP7t38nBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+Nf9D3KSJy2nKoSaAAAAAElFTkSuQmCC"
            alt="profile"
          />
          <button
            className="ml-2 md:ml-4 cursor-pointer text-white px-2 py-2 h-10 mt-2 rounded bg-[#AA0101] md:bg-purple-600 md:hover:bg-purple-800 text-sm md:text-md"
            onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
