import React from "react";

const Success = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[50%] h-[40%] bg-red flex flex-col items-center justify-center mb-40 border rounded-lg">
        <img src="https://freepngimg.com/thumb/success/6-2-success-png-image.png" alt="" className="h-[30%] mb-5"/>
        <h1 className="text-[30px] font-bold">Success</h1>
      </div>
    </div>
  );
};

export default Success;
