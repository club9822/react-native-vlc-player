import React, { Component } from 'react'
import { Platform, StyleSheet, View, TouchableNativeFeedback, TouchableWithoutFeedback,Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'

const isAndroid = Platform.OS === 'android'
const screenWidth=Dimensions.get('window').width
export default class Controls extends Component {
  render() {
    const { overlay, height, width, controls } = this.props

    return (<TouchableWithoutFeedback
        onPress={this._handlePlay}>
      <View
          style={styles.containerPlay}>
        <Icon
            color='white'
            name={controls.pause ? 'md-play' : 'md-pause'}
            size={screenWidth*0.1} />
      </View>
    </TouchableWithoutFeedback>)
    // return (
    //   <TouchableWithoutFeedback onPress={this._handleOverlay}>
    //     <View
    //       opacity={overlay.opacity}
    //       style={[ styles.overlay, {
    //         backgroundColor: overlay.backgroundColor,
    //         height         : height,
    //         width          : width
    //       } ]}>
    //
    //       <TouchableWithoutFeedback
    //         onPress={this._handlePlay}>
    //         <View
    //           style={styles.containerPlay}>
    //           <Icon
    //             color='white'
    //             name={controls.pause ? 'md-play' : 'md-pause'}
    //             size={30} />
    //         </View>
    //       </TouchableWithoutFeedback>
    //
    //       {/*<TouchableWithoutFeedback*/}
    //       {/*  onPress={this._handleOrientation}>*/}
    //       {/*  <View*/}
    //       {/*    style={styles.containerToggle}>*/}
    //       {/*    <Icon color='white' name={controls.toggle} size={30} />*/}
    //       {/*  </View>*/}
    //       {/*</TouchableWithoutFeedback>*/}
    //     </View>
    //   </TouchableWithoutFeedback>
    // )
  }

  _handleOverlay = () => {
    this.props.onOverlay()
  };

  _handlePlay = () => {
    this.props.onPlay()
  };

  _handleOrientation = () => {
    this.props.onOrientation()
  };
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute'
  },
  containerPlay: {
    position      : 'absolute',
    justifyContent: 'center',
    alignSelf     : 'center',
    height        : '100%',
    margin        : 10
  },
  containerToggle: {
    position: 'absolute',
    margin  : 10,
    bottom  : 0,
    right   : 0
  }
})

Controls.propTypes = {
  overlay      : PropTypes.object.isRequired,
  width        : PropTypes.number.isRequired,
  height       : PropTypes.number.isRequired,
  controls     : PropTypes.object.isRequired,
  onOverlay    : PropTypes.func.isRequired,
  onPlay       : PropTypes.func.isRequired,
  onOrientation: PropTypes.func.isRequired
}
