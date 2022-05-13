import React from "react";
import Song from "./Song";
import { Row } from "react-bootstrap";
// import Queue from "./Queue";
import { connect } from "react-redux";
import { getSongs } from "../slices/queue/queueSlice";

const mapStateToProps = (state) => {
  return {
    songArray: state.queue.songs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSongs: (albumId) => {
      dispatch(getSongs(albumId));
    },
  };
};

class Album extends React.Component {
  // state = {
  //   album: {},
  //   songs: [],
  // };

  componentDidMount = async () => {
    let albumId = this.props.match.params.id;

    let headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
    });
    this.props.getSongs(75621062);
    console.log(this.props.getSongs);
    // try {
    //   let response = await fetch(
    //     "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId,
    //     {
    //       method: "GET",
    //       headers,
    //     }
    //   );

    //   if (response.ok) {
    //     let album = await response.json();
    //     this.setState({
    //       album,
    //       songs: album.tracks.data,
    //     });
    //   }
    // } catch (exception) {
    //   console.log(exception);
    // }
  };

  render() {
    console.log(this.props.songArray);
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
          {/* {this.props.songArray?.cover && (
            <div className="col-md-3 pt-5 text-center" id="img-container">
              <img
                src={this.props.songArray.cover}
                className="card-img img-fluid"
                alt="Album"
              />
              <div className="mt-4 text-center">
                <p className="album-title">{this.props.songArray.title}</p>
              </div>
              <div className="text-center">
                <p className="artist-name">
                  {this.props.songArray.artist
                    ? this.props.songArray.artist.name
                    : ""}
                </p>
              </div>
              <div className="mt-4 text-center">
                <button id="btnPlay" className="btn btn-success" type="button">
                  Play
                </button>
              </div>
            </div>
          )} */}
          <div className="col-md-8 p-5">
            <Row>
              <div className="col-md-10 mb-5" id="trackList">
                {this.props.songArray?.map((song) => (
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

export default connect(mapStateToProps, mapDispatchToProps)(Album);
