import { StyleSheet } from 'react-native';

export default StyleSheet.create ({
  main: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    // padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  box: {
    width: '100%',
    backgroundColor: 'white',
    height: '70%',
    padding: 3,
  },
  inner: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: 'white',
    // height: '%'
    // alignItems: 'center',
    // justifyContent: 'center',
    // display: 'grid', 
    // gridTemplateColumns: '1fr' '1fr' '1fr', 
    // gridTemplateRows: '1fr 1fr 1fr' 
    // gap: 0px 0px; 
    // grid-template-areas: 
    //   ". . ."
    //   ". . ."
    //   ". . ."; 

  },
  board: {
    // flex: 1,
    // flexDirection: 'column',
    width: '33.3%',
    backgroundColor: 'grey',
    height: '33.3%',
    padding: 5,
     alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white'

  },
  container: {
    flex:1 ,
    backgroundColor: '#d0dff4',
    alignItems: 'center',
    // height: '0%',
    justifyContent: 'center',
    
  },
  inpUsername: {
    height: 40,
    width: 200,
    margin: 12,
    // borderWidth: 1,
    textAlign: 'center',
  },
  welcome: {
    backgroundColor: '#edeff3',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#edeff3',
    borderRadius: 20,
    shadowRadius: 20,
    shadowOpacity: 15,
    shadowOffset:  {width: 5,height: 5},
    shadowColor: '#21345f'
  },
  inputWrapper: {
    justifyContent: 'center',
    textAlign: 'center',
    
    // height: '50%',
    // backgroundColor: 'red',
    margin: 5,
  },
  btnSubmit: {
    backgroundColor: '#4b648a',
    // margin: 5,
    width: 200
  },
  difficultWrapper: {
    flexDirection: 'row',
    alignItems: 'baseline',
    padding: 5
  },
  radio:{
    fontWeight: '500',
    fontSize: 17,
    // backgroundColor: 'green',
    padding: 3,

  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    height: '50%'
  },
  finish: {
    flexGrow: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'blue',
    // width: '50%',
    // height: '50%',
    textAlign: 'center',
    // flexDirection: 'column'
  }
})