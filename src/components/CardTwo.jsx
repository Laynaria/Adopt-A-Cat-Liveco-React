import PropTypes from "prop-types";

const CardTwo = ({ object }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div
          className="card-img"
          style={{ backgroundImage: `url("${object.picture}")` }}
        ></div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{object.name}</h2>
        <button className="card-button">Adopt Now</button>
      </div>
    </div>
  );
};

CardTwo.propTypes = { object: PropTypes.object.isRequired };

export default CardTwo;
