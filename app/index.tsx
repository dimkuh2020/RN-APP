import { Alert, Dimensions, Image, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { Input } from '../shared/Input/Input';
import { Colors, Gaps } from '../shared/tokens';
import { Button } from '../shared/Button/button';
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification';
import { useState } from 'react';
import { Link } from 'expo-router';


export default function Login() {
  //const width = Dimensions.get('window').width;  //получает ширину оси

  const [error, setError] = useState<string | undefined>();

  const alert = () => {
    //Alert
   /* Alert.alert('Ошибка','Не верный логин или пароль', [{
      text: 'Хорошо',
      onPress: () => {},
      style: 'cancel'
    }]);*/

    //Toast
    //ToastAndroid.showWithGravity('Не верный логин или пароль', ToastAndroid.SHORT, ToastAndroid.CENTER);

    //Свой алерт
    setError('Неверный логин и пароль');
    setTimeout(() => { //сброс ошибки 
      setError(undefined);
    }, 4000);


  }

  return (
    <View style={styles.container}>
      <ErrorNotification error={error}/>
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
          resizeMode='contain'
        />

        <View style={styles.form}>
          <Input placeholder='Email'/>
          <Input isPassword={true} placeholder='Пароль'/>          
          <Button text='Войти' onPress={alert} />
        </View>
        <Link href={'/restore'}>
          <Text>Востановить пароль</Text> 
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    //alignItems: 'center',
    flex: 1,
    padding: 55,
    backgroundColor: Colors.black
  },
  content: {
    alignItems: 'center',
    gap: Gaps.g50,
  },
  form: {
    alignSelf: 'stretch',
    gap: Gaps.g16
  },  
  logo: {
    width: 220
  }
});


