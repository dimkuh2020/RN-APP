import { Pressable, StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { Colors, Fonts, Radius } from "../tokens";
import { useState } from "react";
import EyeOpenedIcon from "../../assets/icons/eye-opened";
import EyeClosedIcon from "../../assets/icons/eye-closed";

export function Input(props: TextInputProps & {isPassword?: boolean}) {
                    // принимает все props
const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false); //хук useState по умолчанию скрыт

    return (
        <View>
            <TextInput
                style={styles.input}
                secureTextEntry={props.isPassword && !isPasswordVisible}
                placeholderTextColor={Colors.grey}
                {...props}
            />
            {props.isPassword && <Pressable onPress={() => setIsPasswordVisible(state => !state)} style={styles.eyeIcon}>                 
                {isPasswordVisible ? <EyeOpenedIcon/> : <EyeClosedIcon/>}
            </Pressable>}    
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 58,
        backgroundColor: Colors.violetDark,
        paddingHorizontal: 24,
        borderRadius: Radius.r10,
        fontSize: Fonts.f16,
        color: Colors.grey,
        fontFamily: 'FiraSans'        
    },
    eyeIcon: {
        position: 'absolute',
        right: 0,
        paddingHorizontal: 20,
        paddingVertical: 18       
    }
})

