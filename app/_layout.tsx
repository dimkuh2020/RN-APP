import { Slot, SplashScreen, Stack } from "expo-router";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import { Colors } from "../shared/tokens";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync(); //начинаем splash который не прячется

export default function RootLayout() {
   //const insets = useSafeAreaInsets(); //какого то хера скачет экран
   
   const [loaded, error] = useFonts({
        FiraSans: require('../assets/fonts/FiraSans-Regular.ttf'),
        FiraSansSemiBold: require('../assets/fonts/FiraSans-SemiBold.ttf'),
   });

   useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync(); // если загрузился то спрятаться splash
        }
   })
   
   if(!loaded) { 
        return null;
   }
    return (
        <SafeAreaProvider>    
            <StatusBar style="light"/>    
            <Stack screenOptions={{
                statusBarColor: Colors.black,
                contentStyle: {
                    backgroundColor: Colors.black,
                    //paddingTop: insets.top
                },
                headerShown: false // не показ екран
            }}>
                <Stack.Screen name='index'/> 
                <Stack.Screen name='restore' />
            </Stack>
        </SafeAreaProvider>
    );
}