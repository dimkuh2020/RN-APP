//востановление пароля
import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Restore() {
    return (
        <View>          
          <Link href={'/'}>
            <Text style={{color: 'white'}}>Restore</Text>  
          </Link>
        </View>

    )
    
}