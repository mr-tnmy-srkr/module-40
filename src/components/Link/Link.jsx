import PropTypes from 'prop-types'; // ES6

const Link = ({ route }) => {
  return (
    <li className="md:mr-10 hover:bg-slate-400 hover:rounded-lg px-6 py-2">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};
Link.propTypes = {
route:PropTypes.object
}
export default Link;
