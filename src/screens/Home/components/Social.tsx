import { View, TouchableOpacity } from 'react-native'
import Facebook from '../../../assets/img/facebook.svg'
import Instagram from '../../../assets/img/instagram.svg'
import Reddit from '../../../assets/img/reddit.svg'
import Tiktok from '../../../assets/img/tik_tok.svg'
import Whatsapp from '../../../assets/img/whatsapp.svg'

const Social = () => {
  return (
    <View className="flex flex-row my-4 gap-3">
      <TouchableOpacity>
        <Tiktok width={44} height={44} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Instagram width={44} height={44} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Facebook width={44} height={44} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Whatsapp width={44} height={44} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Reddit width={44} height={44} />
      </TouchableOpacity>
    </View>
  )
}

export default Social
