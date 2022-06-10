import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Image, 
  View, 
  Text, 
  SafeAreaView, 
  Pressable,
  Linking } from 'react-native';

const colorGithub = '#010409';
const colorFontGithug = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';
const darkGreenGitHub = '#114a30';
const lightGreenGitHub = '#24d94a';
const URL_GITHUB = 'https://github.com/GuilhermeCostaDF';
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/74997292?v=4';

export default function App() {

  const handlePressGoToGitHub = async () => {
    const res = await Linking.canOpenURL(URL_GITHUB);

    if(res) {
      await Linking.openURL(URL_GITHUB);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content} >
        <Image style={styles.avatar} source={{ uri: imageProfileGitHub }} accessibilityLabel='Imagem de perfil do Guilherme Costa' />
        <StatusBar backgroundColor={colorGithub} barStyle='light-content' />  
        <Text accessibilityLabel='Nome: Guilherme Costa' style={[styles.defaultText, styles.name]} >
          Guilherme Costa
        </Text>
        <Text accessibilityLabel='Nickname: GuidoCostaDF' style={[styles.defaultText, styles.nickname]} >
          GuilhermeCostaDF
        </Text>
        <Text accessibilityLabel='Graduando em Tecnologia em Sistemas para a Internet - IFB ' style={[styles.defaultText, styles.description]} >
          Graduando em Tecnologia em Sistemas para a Internet - IFB 🧑‍🎓
        </Text>
        <View style={styles.actionsContainer}>
          <View style={[styles.boxes, styles.grayBox]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.lightGreen]}></View>
          <View style={[styles.lightGreen]}></View>
          <View style={[styles.lightGreen]}></View>
          <View style={[styles.boxes, styles.grayBox]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.boxes, styles.grayBox]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.boxes, styles.darkGrayBox]}></View>
          <View style={[styles.boxes, styles.darkGrayBox]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.boxes, styles.darkGrayBox]}></View>
          <View style={[styles.boxes, styles.grayBox]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.lightGreen]}></View>
          <View style={[styles.lightGreen]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.lightGreen]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.boxes, styles.grayBox]}></View>
          <View style={[styles.boxes, styles.grayBox]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.lightGreen]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.lightGreen]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.boxes, styles.darkGrayBox]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.boxes, styles.darkGrayBox]}></View>
          <View style={[styles.boxes, styles.grayBox]}></View>
          <View style={[styles.boxes, styles.grayBox]}></View>
          <View style={[styles.boxes, styles.grayBox]}></View>
          <View style={[styles.boxes, styles.darkGrayBox]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.lightGreen]}></View>
          <View style={[styles.lightGreen]}></View>
          <View style={[styles.lightGreen]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.boxes, styles.grayBox]}></View>
          <View style={[styles.boxes, styles.grayBox]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.lightGreen]}></View>
          <View style={[styles.lightGreen]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.boxes]}></View>
          <View style={[styles.lightGreen]}></View>
          <View style={[styles.lightGreen]}></View>
          <View style={[styles.lightGreen]}></View>
          <View style={[styles.lightGreen]}></View>
          <View style={[styles.boxes, styles.darkGrayBox]}></View>
          <View style={[styles.boxes, styles.darkGrayBox]}></View>
        </View>
        <Pressable onPress={handlePressGoToGitHub}>
          <View style={styles.button}>
            <Text style={[styles.defaultText, styles.textButton]}> Open in GitHub </Text>
          </View>
        </Pressable>
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
    height: 200,
    width: 200,
    top: -20,
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
    marginBottom:15,
  },

  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGitHub,
    borderRadius: 10,
    padding: 20,
  },

  textButton: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  actionsContainer: {
    margin:20,
    flexDirection: 'row',
    width:250,
    flexWrap:'wrap',
  },

  boxes: {
    backgroundColor: darkGreenGitHub,
    width:12,
    height:12,
    margin:1.4,
  },

  lightGreen: {
    backgroundColor: lightGreenGitHub,
    width:12,
    height:12,
    margin:1.4,
  },

  grayBox: {
    backgroundColor:'#636363',
  },

  darkGrayBox: {
    backgroundColor: '#272d34',
  }
});
