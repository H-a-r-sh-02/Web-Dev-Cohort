import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [product, setProduct] = useState(null);

  const formatPrice = (amount, currency) => {
    try {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: currency || "INR",
        maximumFractionDigits: 0, 
      }).format(amount / 100);
    } catch (error) {
      return `${amount.toLocaleString("en-IN")}`;
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products/get-item")
      .then((response) => {
        setProduct(response.data.product);
        console.log(response.data.product);
      });
  }, []);

  return (
    <div className="h-screen w-full px-10 py-5">
      <div className="productCard flex flex-col items-center gap-2 p-2 w-56 bg-zinc-300">
        <div className="image h-35 w-45 bg-zinc-500">
          <img
            className="h-full w-full object-cover"
            src={product?.image}
            alt=""
          />
        </div>
        <h2 className="text-lg font-semibold">{product?.title}</h2>
        <p className="text-sm text-center">{product?.description}</p>
        <div className="flex flex-row items-center justify-center py-2">
          <span className="text-base font-semibold">
            {formatPrice(product?.price?.amount ?? 0, product?.price?.currency)}
          </span>
          <button className="bg-orange-500 text-white px-2 py-2 rounded-md ml-2">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
