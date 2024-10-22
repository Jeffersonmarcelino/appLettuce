import { Text, View, TextInput, Pressable, ImageBackground, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar'; 
import { styles } from './styles';

export default function Login() {
  return (

    

    <View style={styles.mainContainer}>
     
      
      <View style={styles.container}>
        <Text style={styles.formTitle}>Login</Text>
        <TextInput 
          style={styles.formInput}
          placeholder="Informe seu Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />
        <TextInput  
          style={styles.formInput}
          placeholder="Informe a Senha"
          autoCapitalize="none"
          secureTextEntry  
        />
        <Pressable style={styles.formButton}>
          <Text style={styles.textButton}>Logar</Text>
        </Pressable>
        <View style={styles.subContainer}>
          <Pressable style={styles.subButton}>
            <Text style={styles.subTextButton}>Esqueci a senha</Text>
          </Pressable>
          <Pressable style={styles.subButton}>
            <Text style={styles.subTextButton}>Novo Usuário</Text>
          </Pressable>
        </View>
        <StatusBar style='auto' />
      </View>

      {/* Nova View ao lado da view de Login */}
      <View style={styles.novaView}>
        <Text style={styles.novaViewTitle}>Bem vindo</Text>
        <Text style={styles.textoEntrada}> Não possui cadastro em nosso site? Não perca tempo, faça o seu agora mesmo!</Text>
        <Pressable style={styles.formaButton}> 
          <Text style={styles.textoButton}>Cadastrar</Text>
          </Pressable>
      </View>
    </View>
    
  )};