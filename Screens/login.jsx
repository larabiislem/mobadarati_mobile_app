import { View, StyleSheet, Text, KeyboardAvoidingView, Alert } from "react-native";
import Title from "@/components/composant/title";
import Input from "@/components/composant/input_data";
import PrimaryButton from "@/components/composant/Sing in Button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Login_screen() {
  const Navigator = useNavigation();
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');



function setmailhandller(val) {
  setemail(val);
  
}
function setpasswordhandller(val) {
  setPassword(val);
  }



  const handleLogin = async () => {
    
    try {
      const response = await fetch('https://mobadaraty-production.up.railway.app/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      

      if (response.ok) {
        Alert.alert('Success', 'Logged in successfully');
      } else {
        Alert.alert('Error', data.message || 'Invalid credentials');
      }
    } catch (error) {
      Alert.alert('Error', 'Network error');
    }
  };


  function Singuphandller() {
    Navigator.navigate('Sign_up');
  }

  return (
    <View style={styles.container}>
      <Title> Welcome back !</Title>
      <KeyboardAvoidingView>
        <Input name="Email" handller={setmailhandller} />
        <Input name="Password" handller ={setpasswordhandller}  />
        <View style={styles.forgot_container}>
          <Text style={styles.forgot_text}>Forgot password ?</Text>
        </View>
        <View style={styles.sing_in_container}>
          <PrimaryButton handller={handleLogin}>Sign in</PrimaryButton>
        </View>
        <View style={styles.ask_container}>
          <Text style={styles.ask_text}>Do you have an account? </Text>
          <Text style={styles.sing_up_link} onPress={Singuphandller}>Sign up</Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
const styles= StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    justifyContent: 'center'
  }
  ,
  forgot_container :{
   marginRight:5,
    alignItems:'flex-end',
    paddingRight:20
  },
  forgot_text:{
    fontSize:15,
    color:'#2F7B2B'
  }
  ,
  sing_in_container:
  {
    alignItems:'center',
    marginTop: 60,
    height:100
  }
  ,
  ask_text:{
    fontSize:15,
    textAlign:'center'
  },
  sing_up_link:{
    fontSize:15,
    color :"#E2AE29",
    marginLeft:5
  },
  ask_container:
  {
    flexDirection:'row',
    justifyContent:'center',

  }
})

// ... (styles remain the same)