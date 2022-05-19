import React from "react";
import { connect } from "react-redux";
import { addSongs } from "../slices/queue/queueSlice";
import { addFavorite } from "../slices/favorite/favoriteSlice";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSongs: (track) => {
      dispatch(addSongs(track));
    },
    addFavorite: (f) => dispatch(addFavorite(f)),
  };
};

const Song = ({ track, addFavorite, songsProp }) => {
  console.log(track);
  return (
    <div className="py-3 trackHover">
      <span className="card-title trackHover px-3" style={{ color: "white" }}>
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
