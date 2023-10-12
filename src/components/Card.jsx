import PropTypes from "prop-types";
import { useState } from "react";

const Card = ({ name, picture }) => {
  const [isAdopted, setIsAdopted] = useState(false);

  const handleAdoption = () => {
    // setIsAdopted(!isAdopted);
    setIsAdopted(true);
  };

  return (
    <div className="card">
      <div className="card-header">
        <div
          className="card-img"
          style={{ backgroundImage: `url("${picture}")` }}
        ></div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <button
          className={isAdopted ? "card-button greyed" : "card-button"}
          onClick={handleAdoption}
        >
          {isAdopted ? "Already Adopted!" : "Adopt Now"}
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Card;
