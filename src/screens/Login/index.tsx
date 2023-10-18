import { Text, View, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react'
import LoginCard from './components/LoginCard'

import Logo from '../../assets/img/logo.svg'

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo width={156} height={70} />
      <Text style={styles.title}>Entrar</Text>
      <View style={styles.links}>
        <LoginCard name="Google" />
        <LoginCard name="Discord" />
        <LoginCard name="Facebook" />
        <LoginCard name="Twich" />
      </View>
      <View style={styles.line}></View>
      <Text style={styles.help}>Precisa de Ajuda?</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    marginTop: 80
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 40
  },
  links: {
    gap: 12,
    width: '90%',
    alignItems: 'center',
    marginBottom: 32
  },
  line: {
    height: 1,
    width: '60%',
    backgroundColor: '#989898',
    marginBottom: 16
  },
  help: {
    color: '#3d3d3d',
    fontWeight: 'bold',
    fontSize: 14
  }
})

export default Login
