import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';

function Home(props) {
  useEffect(() => {
    if (props.route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [props.route.params?.post]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen {props.extraData}</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          props.navigation.navigate('DetailsPage', {
            itemId: 87,
            name: 'LAVI RASTOGI USER',
          })
        }
      />
      <Text style={{margin: 10}}>Post: {props.route.params?.post}</Text>

      <Button
        title="Go to NavigationTab Page"
        onPress={() => props.navigation.navigate('TabNavigation')}
      />
    </View>
  );
}

export default Home;
