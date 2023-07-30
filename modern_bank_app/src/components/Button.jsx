import React from "react";

const Button = ({ styles }) => {
  console.log(styles);
  return (
    <button
      className={` py-4 rounded-[10px] px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none  ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
