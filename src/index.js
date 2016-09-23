/**
 * react-native-schedule
 * @author leecade<leecade@163.com>
 */
import React, { Component, PropTypes } from 'react'
import {
  Text,
  View
} from 'react-native'

/**
 * Default styles
 * @type {StyleSheetPropType}
 */
const styles = {
  wrap: {}
}

export default class extends Component {
  /**
   * Props Validation
   * @type {Object}
   */
  static propTypes = {
    title: PropTypes.string
  }

  /**
   * Default props
   * @return {object} props
   * @see http://facebook.github.io/react-native/docs/scrollview.html
   */
  static defaultProps = {
  }

  render () {
    return (<View style={styles.wrap}>
      <Text>Schedule</Text>
    </View>)
  }
}
