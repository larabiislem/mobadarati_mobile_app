import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children ,handller}) {
  

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={handller}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
 
    buttonOuterContainer: {
      borderRadius: 28,
      margin: 4,
      overflow: 'hidden',
       
    },
    buttonInnerContainer: {
      backgroundColor: '#E2AE29',
      paddingVertical: 8,
      paddingHorizontal: 16,
      elevation: 2,
      width:160,
      height:55,
      justifyContent:'center'
    },
    buttonText: {
      color: 'white',
      fontSize:20,
      fontWeight:'bold',
      textAlign: 'center',
    },
    pressed: {
      opacity: 0.5
}});