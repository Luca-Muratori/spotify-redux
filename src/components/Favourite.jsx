import React from "react";
import { Row } from "react-bootstrap";
import { removeFromFavorite } from "../slices/favorite/favoriteSlice.js";
import { connect } from "react-redux";
import Song from "./Song.jsx";

const mapStateToProps = (state) => {
  return { favoriteSong: state.favorite.favorites };
};

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorite: (i) => dispatch(removeFromFavorite(i)),
});

const Favourite = ({ removeFromFavorite, i, favoriteSong }) => {
  // state = {
  //   album: {},
  //   songs: [],
  // };

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <Row className="mb-3">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <div>TRENDING</div>
          <div>PODCAST</div>
          <div>MOODS AND GENRES</div>
          <div>NEW RELEASES</div>
          <div>DISCOVER</div>
        </div>
      </Row>
      <Row>
        <div className="col-md-8 p-5">
          <Row>
            <div className="col-md-10 mb-5" id="trackList">
              {favoriteSong.map((song, i) => (
                <>
                  <Song track={song} key={song.id} />
                  <div onClick={() => removeFromFavorite(i)}>delete</div>
                </>
              ))}
            </div>
          </Row>
        </div>
      </Row>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
