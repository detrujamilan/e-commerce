import React, { useEffect } from "react";
import ProductDetails from "../../components/Product/ProductDetails/ProductDetails";
import CheckOutForm from "../../components/CheckoutForm/CheckOutForm";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <ProductDetails />
      <CheckOutForm />
    </div>
  );
};

export default DashBoard;
