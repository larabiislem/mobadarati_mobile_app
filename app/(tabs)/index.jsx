import { View , StyleSheet} from "react-native";
import Login_screen from "@/Screens/login";
import Singe from "@/Screens/Sing up";
import AccountSelectionScreen from "@/components/composant/Steps_sing-up/step 1";
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