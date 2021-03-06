import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    instructions: {
      color: '#000',
      fontSize: 18,
      marginBottom: 5,
      fontWeight: 'bold',
    },
    logo: {
      width: 150,
      height: 100,
      marginBottom: 10,
    },
    button: {
      width: 370,
      height: 40,
      backgroundColor: "#009788",
      padding: 7,
      borderRadius: 30,
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 20,
      color: '#fff',
    },
    picker: {
      marginVertical: 0,
      width: 370,
      padding: 0,
      borderColor: "#666",
    },
  });

export default styles;