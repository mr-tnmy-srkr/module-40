import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 rounded-lg p-4 text-white flex flex-col">
      <h2 className="text-center">
        <span className="text-5xl font-extrabold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-8">{name}</h4>
      <div className="flex-grow">
      {
        features.map((feature,idx) => <Feature key={idx} feature={feature} ></Feature>)
      }
      </div>
      <button className="btn mt-12 bg-primary PY-4 w-full border-0 text-white hover:bg-fuchsia-700">Buy Now</button>
    </div>
  );
};
PriceOption.prototypes = {
  option: PropTypes.object,
};
export default PriceOption;
