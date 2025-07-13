import React from "react";
const Footer = () => {
  return (
    <div className="container flex gap-5 justify-between flex-wrap">
      <div>
        <h2 className="text-xl font-medium mt-4">Home</h2>
        <p className="mt-3">Lorem, ipsum dolor.</p>
        <p className="mt-3">Lorem, ipsum dolor.</p>
        <p className="mt-3">Lorem, ipsum dolor.</p>
      </div>
      <div>
        <h2 className="text-xl font-medium mt-4">Statistics</h2>
        <p className="mt-3">Lorem, ipsum dolor.</p>
        <p className="mt-3">Lorem, ipsum dolor.</p>
        <p className="mt-3">Lorem, ipsum dolor.</p>
      </div>
      <div>
        <h2 className="text-xl font-medium mt-4">Contact</h2>
        <p className="mt-3">+998 88 970 4443</p>
        <p className="mt-3">jamshidnt2024@gmail.com</p>
      </div>
    </div>
  );
};

export default React.memo(Footer);
