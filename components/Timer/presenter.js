import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

function formatTime(time) {
  var minutes = Math.floor(time / 60);
  time -= minutes * 60;

  var seconds = time;

  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        interval: timerInterval
      });
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      clearInterval(this.state.interval);
    }
  }
  render() {
    console.log(this.props);
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      pauseTimer,
      addSecond
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.timer}>
            {formatTime(timerDuration - elapsedTime)}
          </Text>
        </View>
        <View style={styles.lower}>
          {isPlaying ? (
            <Button iconName="stop-circle" onPress={pauseTimer} />
          ) : (
            <Button iconName="play-circle" onPress={startTimer} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CE0B24"
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  timer: {
    color: "white",
    fontSize: 120,
    fontWeight: "100"
  }
});

export default Timer;
