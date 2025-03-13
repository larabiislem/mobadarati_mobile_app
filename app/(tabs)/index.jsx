import { View , StyleSheet} from "react-native";
import Login_screen from "@/Screens/login";
import Singe from "@/Screens/Sing up";
// <Login_screen/>
export default function App() {
  return (
    <View style={styles.container}>
      
    <Singe/>
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