import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'

import Schedule, { Calendar } from 'react-native-schedule'

var styles = {
  wrap: {
  }
}

export default class extends Component {
  render () {
    return (<View style={styles.wrap}>
      <View><Text>TOP</Text></View>
      <Schedule />
      <Calendar />
      <View><Text>BOTTOM</Text></View>
    </View>)
  }
}
