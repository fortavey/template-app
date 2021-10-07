import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Главный экран приложения</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
