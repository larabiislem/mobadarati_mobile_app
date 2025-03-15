import { View , StyleSheet , Pressable, Image} from "react-native";
import TopServices from "@/components/composant/TopService";
import VolunteerCard from "@/components/composant/assosiation_offer";
import { ScrollView } from "react-native";
import donate from '../assets/images/Group 84 (1).png'



const HomeScreen = () => {
  return (
    
        
    <View style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false} style={{overflow:'hidden'}}>
        <View style={styles.topService}>
            <TopServices />
        </View>
      <View>
        <ScrollView horizontal={true}>
        <VolunteerCard />
        <VolunteerCard />
        <VolunteerCard />
            
        </ScrollView>
    
    
      </View>
      <Image source={donate} style={{margin:40}}/>
      </ScrollView>
      
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topService:{
    marginBottom:50
  }
});

export default HomeScreen;
