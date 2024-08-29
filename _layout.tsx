import React from 'react';
import {Text, View, TextInput, Pressable, StyleSheet, SafeAreaView} from 'react-native';
import { Link } from '@react-navigation/native';

const Login = () => {
  const [text, onChangeText] = React.useState('')
  const [Password, onChangePassword] = React.useState('')
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.input} value={text} onChangeText={onChangeText}/>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} value={Password} onChangeText={onChangePassword}/>
          <Pressable style={styles.button}>
            <Text style={styles.label_button}>Sign-in</Text>
          </Pressable> 
          <Link to={{ screen: '#'}}>
            <Text style={styles.links}>Sign Up</Text>
          </Link>
          <Link to={{ screen: '#'}}>
            <Text style={styles.links}>Forgot Password</Text>
          </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    marginHorizontal:16,
    backgroundColor:'#f8ecf4',
    width:''
  },

  label:{
    textAlign: 'left',
    marginVertical: 8,
    fontSize: 16,
  },

  input:{
    borderWidth: 2,
    borderColor: '#f0dcfc',
    backgroundColor: 'white',
    width: 275,
    height: 36,
    borderRadius: 8,
  },


  button:{
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    paddingVertical:8,
    paddingHorizontal: 8,
    borderRadius: 64,
    elevation: 3,
    backgroundColor: '#65558f',
    marginTop: 20,
    width: 250,
  },

  label_button:{
    fontSize: 16,
    color:'white',
  },

  links:{
    marginTop: 10,
    fontSize: 14,
    padding: 4,
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
})

export default Login;
