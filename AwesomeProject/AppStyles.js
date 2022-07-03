import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  textContent: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    borderColor: 'green',
    borderWidth: 2,
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    margin: 20,
    padding: 10
  },
  text: {
    fontSize: 25,
    textAlign:'center'
  },
  inputEle: {
    borderWidth: 2,
    borderColor: 'red',
  },
  bodyStyle:{
    margin: 32,
    alignItems:'center',
    justifyContent:'center'
  },
  btnStyle:{
    padding: 20,
    paddingRight:32,
    paddingLeft:32,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'black',
    borderWidth:2,
    width: '60%',
    backgroundColor:'blue',
    borderRadius:50
  },
  btnText:{
    color: '#fff',
    fontSize:20

  },
  ModalMainView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#00000099'
  },
  ModalView:{
     width: 300,
     height: 300,
     borderColor:'black',
     borderWidth:2,
     backgroundColor:'#fff'
  },
  ModalHeading:{
    
  },
  ModalHeadingText:{
    fontSize:30,
    textAlign:'center',
    padding: 10
  },
  ModalData:{
   marginTop:40,
   marginLeft:10
  },
  ModalText:{
    fontSize:22,
    textDecorationLine:'underline'
  },
  buttonBottom:{
    flex: 1,
    justifyContent:'flex-end',
    alignItems:'center',
    marginBottom:16
  }
});
