import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleButtonPress = () => {
    const params = { name, description };
    navigation.navigate('MatchingScreen', params);
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={["#86F1F9", "#FDD0ED"]}
      start={{ x: 0.1, y: 0.1 }}
      end={{ x: 0.1, y: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Love Alarm</Text>
        <LottieView
          source={require("./assets/heartAnime.json")}
          autoPlay
          loop
          style={styles.animation}
        />

        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor="#fff"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          style={[styles.input, { marginTop: 10 }]}
          placeholder="Short Description"
          placeholderTextColor="#fff"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Start Matching</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient> );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30, // Adjusted font size
    fontFamily: 'Gill Sans',
    marginBottom: 20,
    color: 'white',
  },
  button: {
    backgroundColor: '#F87B92',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontFamily: 'Gill Sans',
    color: 'white',
    fontSize: 18,
  },
  animation: {
    width: 250, // Adjusted animation size
    height: 250, // Adjusted animation size
  },
  input: {
    fontFamily: 'Gill Sans',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: 'white',
    paddingHorizontal: 10,
    width: '80%',
    marginTop: 10,
  },
});

export default Home;

