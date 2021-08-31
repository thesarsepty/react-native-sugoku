import React from 'react'
import { ActivityIndicator, Colors } from 'react-native-paper';
import styles from '../styles';

export default function Loading() {
  return (
    <ActivityIndicator animating={true} color={Colors.red800} size='large' style={styles.loading}/>
  )
}
