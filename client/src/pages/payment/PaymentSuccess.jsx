import React from "react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const subId = useSearchParams()[0].get("reference");
  return (
    <div>
      PaymentSuccess
      <h1>{subId && subId}</h1>
    </div>
  );
};

export default PaymentSuccess;
