import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, SafeAreaView } from 'react-native';

const colorGithub = '#010409';
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/74997292?v=4';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content} >
        <Image style={styles.avatar} source={{uri:imageProfileGitHub}} accessibilityLabel='Imagem de perfil do Guilherme Costa' />
        <StatusBar backgroundColor={colorGithub} barStyle='light-content' />  {/*Serve para manipular a barra de notificações*/}
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorGithub,
    justifyContent: 'center',
  },

  content: {
    alignItems: 'center',
  },

  avatar: {
    height: 250,
    width: 250,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 3,
  }
});
