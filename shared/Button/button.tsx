import { Animated, GestureResponderEvent, Pressable, PressableProps, StyleSheet, Text, View } from "react-native";
import { Colors, Fonts, Radius } from "../tokens";

export function Button({ text, ...props }: PressableProps & { text: string }) {
                    //тащим text и пропсы  

    //ДЛЯ ПЕРЕДВИЖЕНИЯ И УСТАНОВЛЕНИЯ ВЕЛИЧИН               
    /*const animatedValue = new Animated.ValueXY({   
        x: 0,
        y: 0
    });
    Animated.timing(animatedValue, {  //устанавливаем анимацию 
        toValue: {
            x: 100,
            y: 100
        },
        duration: 2000,
        useNativeDriver: false //исп нативный драйвер
    }).start();*/

    // ПЕРЕДВЕЖЕНИЕ ПО КООРДИНАТАМ
    /*<Animated.View style={{...styles.button, transform: [ 
        {translateX: animatedValue.x},
        {translateY: animatedValue.y}
    ]}}>*/

    //УСТАНОВЛЕНИЕ РАЗМЕРОВ
    /*<Animated.View style={{...styles.button, width: animatedValue.x, height: animatedValue.y}}>
            .........
    </Animated.View>*/


    const animatedValue = new Animated.Value(100) // для изменения цвета
    const color = animatedValue.interpolate({ // интерполяция число -> цвет
        inputRange:[0,100], // принимаем значения
        outputRange: [Colors.primaryHover, Colors.primary]
    });

    const fadeIn = (e: GestureResponderEvent) => { //добавл е - событие для onPressIn
        Animated.timing(animatedValue, {  //устанавливаем анимацию 
            toValue: 0,
            duration: 100,
            useNativeDriver: false //исп нативный драйвер
        }).start();
        props.onPressIn && props.onPressIn(e);
//если есть onPressIn   то вызываем событие
    }

    const fadeOut = (e: GestureResponderEvent) => {
        Animated.timing(animatedValue, {  //устанавливаем анимацию 
            toValue: 100,
            duration: 100,
            useNativeDriver: false //исп нативный драйвер
        }).start();
        props.onPressOut && props.onPressOut(e);
 //если есть onPressIn  то вызываем событие
    }

    

    return (
        <Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
            <Animated.View style={{...styles.button, backgroundColor: color}}> 
                <Text style={styles.text}>{text}</Text>
            </Animated.View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Radius.r10,
        height: 58,
        backgroundColor: Colors.primary,
    },
    text: {
        color: Colors.white,
        fontSize: Fonts.f18
    }
})

//6.7