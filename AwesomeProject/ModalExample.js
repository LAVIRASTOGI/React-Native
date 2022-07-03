import React, {useState} from 'react';
import {
  Modal,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {styles} from './AppStyles';

function ModalExample() {
  let [showModal, setShowmodal] = useState(false);
  return (
    <View style={styles.bodyStyle}>
      <Pressable style={styles.btnStyle} onPress={() => setShowmodal(true)}>
        <Text style={styles.btnText}>Click Me</Text>
      </Pressable>
      <View>
        {/* visible -- open/close
        transparent -- so that we can see the background
        animationType -- fade or slide
        onRequestClose - works for only back btn
        */}
        <Modal
          visible={showModal}
          transparent
          animationType="fade"
          onRequestClose={() => setShowmodal(false)}>
            {/* if you want to close modal ON OUTSIDE CLICK we use Touchable where we can use on press */}
          <TouchableWithoutFeedback onPress={() => setShowmodal(false)}>
           {/* inside a modal we made a view with height full 100vh so that we can make modal in centre and put a overlay */}
            <View style={styles.ModalMainView}>
                {/* this is modal which u see has a border */}
              <View style={styles.ModalView}>
                {/* for heading */}
                <View style={styles.ModalHeading}>
                  <Text style={styles.ModalHeadingText}>Modal Heading</Text>
                </View>
                {/* for data text */}
                <View style={styles.ModalData}>
                  <Text style={styles.ModalText}>
                    Clicked and opened a Modal
                  </Text>
                </View>
                {/* now for ok button */}
                <View style={styles.buttonBottom}>
                    {/*  
                    android_ripple={{color:'white'}}
                     creates a animation
                    */}
                  <Pressable
                    style={styles.btnStyle}
                    android_ripple={{color:'white'}}
                    onPress={() => setShowmodal(false)}>
                    <Text style={styles.btnText}>OK</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </View>
  );
}

export default ModalExample;
