import { StatusBar } from 'expo-status-bar'
import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { WebView } from 'react-native-webview'
import * as Progress from 'react-native-progress'
import requestSource from '../data/requestSource'

const THEME = {
  MAIN_COLOR: '#153453',
}

export default function TrueScreen() {
  const [progress, setProgress] = useState(0)
  const [isLoaded, setLoaded] = useState(false)
  const [source, setSource] = useState('')
  const [progressColor, setProgressColor] = useState(THEME.MAIN_COLOR)

  const fetchRequest = async () => {
    const res = await fetch(requestSource, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await res.json()
    setSource(data.url)
    setProgressColor(THEME.MAIN_COLOR)
  }

  const loadRequest = useCallback(
    async () => await fetchRequest(),
    [fetchRequest]
  )

  useEffect(() => {
    loadRequest()
  }, [])

  return (
    <>
      <StatusBar style="light" backgroundColor={THEME.MAIN_COLOR} />
      <View style={styles.topLine} />
      {!isLoaded ? (
        <Progress.Bar
          progress={progress}
          color={progressColor}
          width={null}
          borderWidth={0}
          borderRadius={0}
        />
      ) : null}
      <WebView
        style={styles.container}
        source={{ uri: source }}
        onLoadProgress={({ nativeEvent }) => {
          setProgress(nativeEvent.progress)
        }}
        onLoadEnd={() => {
          source ? setLoaded(true) : null
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.MAIN_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topLine: {
    backgroundColor: THEME.MAIN_COLOR,
    height: 30,
  },
})
