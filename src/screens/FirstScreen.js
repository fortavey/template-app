import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import TrueScreen from '../screens/TrueScreen'
import isTime from '../data/time'

export default function FirstScreen() {
  return isTime ? <TrueScreen /> : <HomeScreen />
}
