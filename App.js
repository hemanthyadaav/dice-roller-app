import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
  const [uri, setUri] = useState(DiceOne);
  const [uriTwo, setUriTwo] = useState(DiceTwo);
  const play = () => {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber1) {
      case 1:
        setUri(DiceOne);
        break;
      case 2:
        setUri(DiceTwo);
        break;
      case 3:
        setUri(DiceThree);
        break;
      case 4:
        setUri(DiceFour);
        break;
      case 5:
        setUri(DiceFive);
        break;
      case 6:
        setUri(DiceSix);
        break;
      default:
        setUri(DiceOne);
        break;
    }
    switch (randomNumber2) {
      case 1:
        setUriTwo(DiceOne);
        break;
      case 2:
        setUriTwo(DiceTwo);
        break;
      case 3:
        setUriTwo(DiceThree);
        break;
      case 4:
        setUriTwo(DiceFour);
        break;
      case 5:
        setUriTwo(DiceFive);
        break;
      case 6:
        setUriTwo(DiceSix);
        break;
      default:
        setUriTwo(DiceOne);
        break;
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={play}>
          <Image style={styles.image} source={uri} />
          <Image style={styles.image} source={uriTwo} />
        </Pressable>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 3,
    color: '#f2a365',
    borderColor: '#30475E',
  },
});
