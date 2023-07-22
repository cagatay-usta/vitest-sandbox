import PropTypes from "prop-types"

const RenderName = (props) => {
  return <p>{props.name}</p>
}

RenderName.propTypes = {
  name: PropTypes.string,
};

RenderName.defaultProps = {
  name: "Cagatay",
};

export default RenderName;