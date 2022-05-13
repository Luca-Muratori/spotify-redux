import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";

const mapStateToProps = (state) => {
  return {
    readSongs: state.queue.songs,
  };
};

const Queue = ({ readSongs }) => {
  console.log({ readSongs });
  return (
    <div>
      <Row>
        {readSongs && (
          <Col>
            <ul>
              {readSongs.map((song) => (
                <li>{song.title}</li>
              ))}
            </ul>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default connect(mapStateToProps)(Queue);
