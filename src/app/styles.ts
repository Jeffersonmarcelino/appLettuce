import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: 'row', // Alinha as views lado a lado
      justifyContent: 'center', // Centraliza horizontalmente
      alignItems: 'center', // Centraliza verticalmente
      padding: 1,
      backgroundColor: '#a4d0a4'
    },

    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      margin: '1%',
      borderRadius: 10,
      borderColor: 'green',
    },
    novaView: {
      flex: 1, // Ocupa o mesmo espaço da view de login
      backgroundColor: 'green', // Cor de fundo diferente
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 10,
      
      marginLeft: 10, // Espaçamento à esquerda
      justifyContent: 'center',
      alignItems: 'center',
    },
    novaViewTitle: {
      fontSize: 36,
      fontWeight: 'bold',
      color: 'white',
      margin: 6,
      paddingBottom: 5
      
    
    },
    textoEntrada:{
        color: 'white',
        fontSize: 15,
        paddingBottom: 87,
    },
    formaButton:{
        backgroundColor: 'white',
        width: '80%',
      margin: 10,
      padding: 10,
      borderRadius: 10,
      alignItems: 'center'
         
    },
    textoButton:{
        color:'green',
        fontSize:18,
        fontWeight: 'bold',
    
    },
    formTitle: {
      fontSize: 36, 
      fontWeight: 'bold',
      color: 'green',
      margin: 10,
    },
    formInput: {
      borderColor: 'darkgreen',
      borderWidth: 1,
      borderRadius: 10,
      fontSize: 15,
      width: '80%',
      padding: 10,
      margin: 10,
    },
    formButton: {
      backgroundColor: 'green',
      width: '80%',
      margin: 10,
      padding: 10,
      borderRadius: 10,
      alignItems: 'center', 
    },
    textButton: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    subContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%',
    },
    subButton: {
      padding: 10,
      
    },
    subTextButton: {
      color: 'darkgreen',
      flexDirection: 'row',
      
    },
    
  });