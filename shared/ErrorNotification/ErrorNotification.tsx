//делаем свой алерт
import { useEffect, useState } from "react";
import { ErrorNotificationProps } from "./ErrorNotification.props";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";
import { Colors, Fonts } from "../tokens";

export function ErrorNotification ({error}: ErrorNotificationProps) { //тащим в пропсы error из интерфейса ErrorNotificationProps
    const [isShown, setIsShown] = useState<boolean>(false);
    const animatedValue = new Animated.Value(-100);
    const onEnter = () => {        //вынесли анимацию в отдельную функцию для onLayout в <>
         Animated.timing(animatedValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => { // в конце анимации
            console.log('Анимация завершена') 
        });
    }
    
    useEffect(() => {
        if (!error) { //если нет ошибки то ничего не происходит
            return
        }
        setIsShown(true); // меняем isShown на true         

        const timerId = setTimeout(() => {
            setIsShown(false) //скрыть через 3 сек
        }, 3000);
        return () => {
            clearTimeout(timerId);
        }
    }, [error]);
    //если error меняется, то useEffect срабатывает опять
    
    if (!isShown) {
        return <></>; //Пусто        
    }

    return (
        <Animated.View style={{...styles.error, transform: [{translateY: animatedValue}]}} onLayout={onEnter}>
            <Text style={styles.errorText}>{error}</Text>
        </Animated.View>  
    ); 
}

const styles = StyleSheet.create({
    error: {
        position: 'absolute',
        width: Dimensions.get('screen').width,
        backgroundColor: Colors.red,
        padding: 15,
        top: 50
    },
    errorText: {
        fontSize: Fonts.f16,
        color: Colors.white,
        textAlign: 'center',
        fontFamily: 'FiraSans'
    }
})