import React, {useState} from 'react'
import { Text, View, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Platform} from 'react-native';
import { Button, RadioButton, Title, TextInput } from 'react-native-paper';
import styles from '../styles';
// import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen({ navigation }) {
  
  const [difficult, setDifficult] = useState('easy')
  const [user, setUser] = useState('')

  return (
    
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    
      <View style={styles.welcome}>
        <Title>Welcome To Sugoku</Title>
      
      <View style={styles.inputWrapper}>
        {/* <Text style={{textAlign: 'center'}}>Username</Text> */}
        <TextInput 
          value={user}
          mode="outlined"
          label="Username"
          style={styles.inpUsername}
          onChangeText={(text) => {setUser(text)}}
          outlineColor= '#9bbcdf'
          clearButtonMode="always"
          
        />
      </View> 
  
      <RadioButton.Group onValueChange={newValue => setDifficult(newValue)} value={difficult}>
      <View style={styles.difficultWrapper}>
        <Text style={styles.radio}>Im Too Young Too Die</Text>
        <RadioButton value="easy" />
      </View>
      <View style={styles.difficultWrapper}>
        <Text style={styles.radio}>Hurt Me Plenty</Text>
        <RadioButton value="medium" />
      </View>
      <View style={styles.difficultWrapper}>
        <Text style={styles.radio}>Ultra - Violence</Text>
        <RadioButton value="hard" />
      </View>
    </RadioButton.Group>
      
      <Button
        style={styles.btnSubmit}
        title="Submit"
        icon=""
        mode="contained"
        onPress={() => {navigation.navigate('Game', {
          username: user,
          difficult: difficult
        })}}
      >Submit</Button>
    </View>
  </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
