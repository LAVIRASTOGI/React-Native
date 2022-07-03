import React, {useState} from 'react';
import {Pressable, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {styles} from './AppStyles';

function TouchPressable() {
  const [timePressed, setTimePressed] = useState(0);

  const PressFunc = () => {
    setTimePressed(timePressed => timePressed + 1);
  };
  

  return (
    <>
      <View>
        {/* in pressable we also have disable icon and also one more funcnailty */}
        <Pressable style={styles.button} onPress={PressFunc}>
          {/* pressable gives u pressed key as paramter to work on it */}
          {({pressed}) => (
            <Text style={styles.text}> {pressed ? 'Pressed' : 'Press Me'}</Text>
          )}
        </Pressable>
        <Text style={styles.text}>
          {timePressed == 0 ? '0' : timePressed} times pressed
        </Text>
      </View>
      {/* TouchableHighlight we can add underlay color but we cannot add more then one component */}
      <TouchableHighlight
       style={styles.button}
        activeOpacity={0.2}
        underlayColor="#DDDDDD"
        onPress={() => alert('Pressed!')}>
       <View>
        <Text style={styles.text}>Hello Tocuhble</Text>
       </View>
      </TouchableHighlight>

       {/* Touchable Opacity we can give opacity and all more then 1 chld components */}
       <TouchableOpacity
       style={styles.button}
        activeOpacity={0.2}
        onPress={() => alert('Pressed!')}>
       <View>
        <Text >Hello Tocuhble</Text>
       </View>
       <View>
        <Text style={styles.text}>Hello Tocuhblet 2</Text>
       </View>
      </TouchableOpacity>

      {/* Touchable without feedback -- will not chnge color or anything */}
    </>
  );
}

export default TouchPressable;
