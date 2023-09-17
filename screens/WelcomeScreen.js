import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'


const WelcomeScreen = ({ navigation }) => {
  const Login = () => {
    navigation.navigate('SignedIn')
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MediConnect</Text>
      <Text style={styles.subtitle}>Streamline Your Hospital Appointments</Text>

      <TouchableOpacity style={styles.button} onPress={Login}>
        <FontAwesome name="google" size={20} color="#fff" />
        <Text style={styles.buttonText}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    alignSelf: 'center'
  },
  subtitle: {
    fontSize: 22,
    marginBottom: 20,
    color: '#666',
    alignSelf: 'center'
  },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default WelcomeScreen