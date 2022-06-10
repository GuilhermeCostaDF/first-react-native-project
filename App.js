import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text, SafeAreaView } from 'react-native';

const colorGithub = '#010409';
const colorFontGithug = '#C9D1D9'; 
const colorDarkFontGitHub = '#4F565E'
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/74997292?v=4';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content} >
        <Image style={styles.avatar} source={{uri:imageProfileGitHub}} accessibilityLabel='Imagem de perfil do Guilherme Costa' />
        <StatusBar backgroundColor={colorGithub} barStyle='light-content' />  {/*Serve para manipular a barra de notificações*/}
        <Text style={[styles.defaultText, styles.name]}>Guilherme Costa
</Text>
        <Text style={[styles.defaultText, styles.nickname]}>GuilhermeCostaDF
</Text>
        <Text style={[styles.defaultText, styles.description]}>Graduando em Tecnologia em Sistemas para a Internet - IFB 🧑‍🎓</Text>
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
    padding: 20,
  },

  avatar: {
    height: 250,
    width: 250,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 3,
  },

  defaultText: {
    color: colorFontGithug,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 24,
  },

  nickname: {
    fontSize: 18,
    color: colorDarkFontGitHub,
  },

  description: {
    fontWeight: 'bold',
    fontSize: 14,
  }
});
