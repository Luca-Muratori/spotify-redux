import React from "react";
import { connect } from "react-redux";
import { addSongs } from "../slices/queue/queueSlice";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSongs: (track) => {
      dispatch(addSongs(track));
    },
  };
};

const Song = ({ track, addSongs }) => {
  console.log(track);
  return (
    <div className="py-3 trackHover">
      <span
        onClick={() => addSongs(track)}
        className="card-title trackHover px-3"
        style={{ color: "white" }}
      >
        {track.title}
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
