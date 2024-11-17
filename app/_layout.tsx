import { Slot, Stack } from "expo-router";
import { Text } from "react-native";
import { Colors } from "../shared/tokens";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

export default function RootLayout() {

   // const insets = useSafeAreaInsets();

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
                <Stack.Screen name='restore' options={{
                    presentation: 'modal',               
                }}/>
            </Stack>
        </SafeAreaProvider>
    );
}