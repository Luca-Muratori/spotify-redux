import React from "react";
import { addFavorite } from "../slices/favorite/favoriteSlice";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  addFavorite: (f) => dispatch(addFavorite(f)),
});

//const heartClick = function () {};

const Song = ({ track, addFavorite }) => {
  console.log(track);
  return (
    <div className="py-3 trackHover">
      <span
        onClick={() => addFavorite(track[0])}
        className="card-title trackHover px-3"
        style={{ color: "white" }}
      >
        {track.title}
      </span>
      <span onClick={() => addFavorite(track)}>
        <i id="heart" class="far fa-heart"></i>
      </span>

      <small className="duration" style={{ color: "white" }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10
          ? "0" + (parseInt(track.duration) % 60)
          : parseInt(track.duration) % 60}
      </small>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Song);
