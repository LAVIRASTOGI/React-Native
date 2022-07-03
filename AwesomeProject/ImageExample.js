import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    opacity: 0.6,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: '#eee'
  },
  tinyLogo: {
    height: 200,
    width: 200,
  },
  logo: {
    width: 66,
    height: 58,
  },
  textMain: {
    color: 'white',
    margin: 10,
    fontSize: 32,
    fontWeight: '700',
  },
});
function ImageExample() {
  return (
    <ImageBackground
      style={styles.containerMain}
      source={require('./assests/capture2.jpg')}>
      <View style={styles.container}>
        <View style={styles.container2}>
          {/* from our assessts */}
          <Image
            style={styles.tinyLogo}
            resizeMode="cover"
            source={require('./assests/capture1.png')}
          />
          {/* taking imagr from net */}
          {/* <Image
          style={styles.logo}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        /> */}
          <Text style={styles.textMain}> Follow me</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default ImageExample;
