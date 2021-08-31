import React from 'react'
import { Text, View, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Platform } from 'react-native';
import Content from '../components/Content'
import styles from '../styles/'
import { Button, Title } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../components/Loading'


export default function GameScreen(props) {

  const dispatch = useDispatch()
  const loading = useSelector(state => state.loading)
  // console.log(props)
  return (
  <KeyboardAvoidingView 
  behavior={Platform.OS === "ios" ? "padding" : "height"}
  style={styles.main}
  > 
   
      <View>
      <Title>Enjoy!</Title>
      </View>
      {
        loading ? (<Loading />) : 
        ( <Content 
          props={props}
          key={props.route.params.difficult}
        />)
      }
     
     
   
  </KeyboardAvoidingView> 
  )
}
