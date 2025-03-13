import { View , StyleSheet, Text,KeyboardAvoidingView} from "react-native";
import Title from "@/components/composant/title";
import Input from "@/components/composant/input_data";
import PrimaryButton from "@/components/composant/Sing in Button";
import { useNavigation } from "@react-navigation/native";


export default function Login_screen() {

  const Navigator = useNavigation();
  function Singuphandller() {
    Navigator.navigate('Sign_up')
    
  }

  return (
    <View style={styles.container}>
       <Title> Welcome back !</Title>
       <KeyboardAvoidingView>
       <Input name="Name"/>
        <Input name="Password"/>
        <View style={styles.forgot_container}>
          <Text style={styles.forgot_text}>Forgot password ?</Text>
        </View>
        <View style={styles.sing_in_container}>
        <PrimaryButton>Sing in</PrimaryButton>
        </View>
        <View style={styles.ask_container}>
        <Text style={styles.ask_text}>Do you have an acount? </Text>
        <Text style={styles.sing_up_link} onPress={Singuphandller}>Sing up</Text>

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

