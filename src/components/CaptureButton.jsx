import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addPokedex } from './pokemon/pokemonSlice'


export default function CaptureButton({ pokemon }) {
    const dispatch = useDispatch()

  const handleCapture = () => {
    dispatch(addPokedex(pokemon))
  }
  return (
    <Button
      title="Capture"
      onPress={handleCapture}
    />
  )
}

const styles = StyleSheet.create({})

