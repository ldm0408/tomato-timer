import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as tomatoActioins } from "../../reducer";
import Timer from "./presenter";

function mapStateToProps(state) {
  const { isPlaying, elapsedTime, timerDuration } = state;

  return { isPlaying, elapsedTime, timerDuration };
}

function mapDisptchToProps(dispatch) {
  return {
    startTimer: bindActionCreators(tomatoActioins.startTimer, dispatch),
    pauseTimer: bindActionCreators(tomatoActioins.pauseTimer, dispatch),
    addSecond: bindActionCreators(tomatoActioins.addSecond, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDisptchToProps
)(Timer);
