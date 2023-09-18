import PropTypes from "prop-types";
import { BsCheckCircleFill } from "react-icons/bs";

const Feature = ({feature}) => {
  return (
    <div >
        <p className="flex ml-[18%] gap-3 mb-3"><span><BsCheckCircleFill className="text-orange-300"></BsCheckCircleFill></span><span className="-mt-1">{feature}</span></p>
    </div>
  )
}
Feature.propTypes = {
    feature: PropTypes.string
  };
export default Feature