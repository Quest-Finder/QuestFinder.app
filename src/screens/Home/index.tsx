import { Button, ScrollView, SafeAreaView, Text, View } from 'react-native'

import { useAuth } from '../../hooks/useAuth'
import UserData from './components/UserData'
import UserCategory from './components/UserCategory'

const UserInfo = () => {
  const { user, signOut } = useAuth()

  return (
    <SafeAreaView className="flex-1 justify-start">
      <ScrollView>
        <UserData />
        <UserCategory />

        <Button title="Sair" onPress={signOut} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default UserInfo
