import { View, Text } from 'react-native'
import React from 'react'

const Door = ({ color , width}) => {
  return (
    <View>
      <Text style={{color , width}}>Door </Text>
    </View>
  )
}

export default Door