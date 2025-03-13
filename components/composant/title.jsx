import { View , Text , StyleSheet} from "react-native";


export default function Title({children}) {

return(
    <View >
    <Text style={styles.text}>{children}</Text>
    </View>

);
   
    
}

const styles = StyleSheet.create({

    container: {

    },
    text :{
        fontSize: 32,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        marginBottom:80
        

    }
})