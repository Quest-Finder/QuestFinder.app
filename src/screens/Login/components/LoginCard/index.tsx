import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface LoginCardProps {
  name: string
}

const LoginCard = ({ name }: LoginCardProps) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Entrar com {name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#989898',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 4
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16
  }
})

export default LoginCard
