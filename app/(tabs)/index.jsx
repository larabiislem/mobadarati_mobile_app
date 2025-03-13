import { View , StyleSheet} from "react-native";
import Login_screen from "@/Screens/login";


export default function App() {
  return (
    <View style={styles.container}>
      
      <Login_screen/>
       
    </View>
   
  );
}

const styles= StyleSheet.create(
  {
    container:{
      flex:1,
    }
  }
)