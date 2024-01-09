import { Button, Image, SafeAreaView, Text, View } from 'react-native'

import { useAuth } from '../../hooks/useAuth'
import UserData from './components/UserData'

const UserInfo = () => {
  const { user, signOut } = useAuth()

  return (
    <SafeAreaView className="flex-1 justify-start items-center">
      <UserData />

      <Button title="Sair" onPress={signOut} />
    </SafeAreaView>
  )
}

export default UserInfo
