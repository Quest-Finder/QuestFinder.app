import { Button, ScrollView, SafeAreaView, Text, View } from 'react-native'

import { useAuth } from '../../hooks/useAuth'
import UserData from './components/UserData'
import UserCategory from './components/UserCategory'
import UserBio from './components/UserBio'

const UserInfo = () => {
  const { user, signOut } = useAuth()

  return (
    <SafeAreaView className="flex-1 justify-start">
      <ScrollView>
        <UserData />
        <UserCategory />
        <UserBio />

        <Button title="Sair" onPress={signOut} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default UserInfo
