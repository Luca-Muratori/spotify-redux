import React from "react";
import { Row } from "react-bootstrap";
import { removeFromFavorite } from "../slices/favorite/favoriteSlice.js";
import { connect } from "react-redux";
import Song from "./Song.jsx";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorite: (f) => dispatch(removeFromFavorite(f)),
});

class Favourite extends React.Component {
  // state = {
  //   album: {},
  //   songs: [],
  // };

  render() {
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
                {this.props.favorite.map((song) => (
                  <Song track={song} key={song.id} />
                ))}
              </div>
            </Row>
          </div>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
