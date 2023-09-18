import PropTypes from "prop-types";
import { BsCheckCircleFill } from "react-icons/bs";

const Feature = ({feature}) => {
  return (
    <div >
        <p className="flex ml-[18%] gap-3 mb-3"><div><BsCheckCircleFill className="text-orange-300"></BsCheckCircleFill></div><div className="-mt-1">{feature}</div></p>
    </div>
  )
}
Feature.prototypes = {
    feature: PropTypes.string,
  };
export default Feature