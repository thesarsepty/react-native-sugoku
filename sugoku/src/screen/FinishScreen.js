import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button, RadioButton, Title, TextInput, Card, Paragraph } from 'react-native-paper';
import styles from '../styles';
export default function FinishScreen(props) {
  // console.log(props, 'finishhhh')
  // const dispatch = useDispatch()
  return (
    <View style={styles.finish}>
    <Card >
    <Card.Content>
      <Title>CONGRATULATION!</Title>
      <Paragraph>{props.route.params.dataUser.username}</Paragraph>
    </Card.Content>
  </Card>
  <Button
        icon="home"
        mode="contained"
        onPress={() => {props.navigation.navigate('Home')}}
      >Back To Home</Button>
  </View>
  )
}
