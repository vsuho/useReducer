import React from 'react'
import { Button } from 'react-native'

export default function Remove() {
  return (
     <Button title="X" color="red" onPress={() => removeTask(id)} />
  )
}