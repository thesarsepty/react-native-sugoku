import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { fetchSugoku, validateSugoku, autoSolve } from '../store/actionCreators/index'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/'
import { Button } from 'react-native-paper';

export default function Content({ props }) {
  const sugoku = useSelector(state => state.sugoku)
  const status = useSelector(state => state.status)
  const solved = useSelector(state => state.solved)
  const dispatch = useDispatch()
  const [cloneSugoku, setCloneSugoku] = useState(sugoku) 

  // console.log(props.route, '<<<<<<<<content')

  useEffect(() => {
    if(sugoku.length === 0){
      dispatch(fetchSugoku(props.route.params))
    }
    if(solved.length > 0){
      setCloneSugoku(solved)
      // dispatch(autoSolve(cloneSugoku))
      // dispatch(validateSugoku(cloneSugoku))
    }
  
  },[solved])
  
  function onChangeText(text, rowIdx, colIdx){
    // alert(`${text} ${rowIdx} ${colIdx}`)
      const tempBoard = cloneSugoku.map(row => {
        return [... row]
      })
      tempBoard[rowIdx][colIdx] = +text
      setCloneSugoku(tempBoard)
  }

  function handleAutoSolve(){
    dispatch(autoSolve(cloneSugoku))
    
    
  }

  function validateInput(){
    dispatch(validateSugoku(cloneSugoku))
    if(status === "unsolved"){
      // console.log(props, 'validate func')
      Alert.alert(`Sorry, your game ${status}`)
    } else {
      Alert.alert(`Goojob, you ${status} this game!`)
    }

  }

  function handleFinish(){
    if (status !== 'solved'){
      Alert.alert(
        `${status}`,
        `Sorry you're ${status} this game, solved this game first`,
        [
          {
            text:'Ok',
            style: 'cancel'
          }
        ]
      )
    } else {
      Alert.alert(
        `${status}`,
        `Yeay! you have ${status} this game, lets check your leader board!`,
        [
          {
            text: 'Go!',
            onPress: () => {props.navigation.navigate('Finish', {
              dataUser: props.route.params
            })} 
          },
          {
            text: 'Wait',
            style: 'cancel'
          }
        ]
      )
      
    }
  }
  

  return (
     <TouchableWithoutFeedback  onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.box}>
      <View style={styles.inner}>
        {
          cloneSugoku.map((boxes, rowIdx) => {
            return(
              <View key={rowIdx} style={styles.board}>
              <View style={styles.inner}>
                {
                  boxes.map((value, colIdx) => {
                    return (
                      value == "0" ?
                      <View key={colIdx} style ={styles.board}>
                      <TextInput 
                        defaultValue=""
                        keyboardType="decimal-pad"
                        maxLength={1}
                      /> 
                      </View> :
                      <View key={colIdx} style ={styles.board}>
                        <TextInput 
                         defaultValue={String(value)}
                         editable={false}    
                          onChangeText={(text) => onChangeText(text, rowIdx, colIdx)}
                        />
                      </View>
                    )
                  })
                } 
              </View>
            </View>
            )
          })
        }
      </View>
      <Button mode="contained" onPress={validateInput}>
        Validate
      </Button>
      <Button mode="contained" onPress={handleAutoSolve}>
        Solve
      </Button>
      <Button mode="contained" onPress={handleFinish}>
        Finish
      </Button> 
    </View>
    </TouchableWithoutFeedback> 
  )
}




