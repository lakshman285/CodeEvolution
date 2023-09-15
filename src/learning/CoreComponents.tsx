import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Greet from './src/components/Greet';
const CoreComponents = () => {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      {/* <Text>Stylesheet API</Text> */}
      {/* <Greet name="Bruce Lee" />
        <Greet name="John Cena" /> */}
      {/* <ActivityIndicator />
        <ActivityIndicator size="large"/>
        <ActivityIndicator size="large" color="midnightblue" />
        <ActivityIndicator size="large" color="midnightblue" animating={false}/> */}
      {/* <StatusBar backgroundColor="lightgreen" barStyle="dark-content"  /> */}
      {/* <ScrollView> */}
      {/* <View
          style={{backgroundColor: 'lightblue', width: 200, height: 200}}></View>
        <View
          style={{backgroundColor: 'lightgreen', width: 200, height: 200}}></View> */}
      {/* <Text>
            <Text style={{color: 'white'}}>Hello</Text> World
          </Text> */}

      {/* <ImageBackground
          source={{uri: 'https://picsum.photos/300'}}
          style={{flex: 1}}>
          <Text>Image Text</Text>
        </ImageBackground> */}

      {/* <Pressable onPress={() => console.log('Image Pressable')}>
            <Image
              source={{uri: 'https://picsum.photos/300'}}
              style={{width: 300, height: 300}}
            />
            <Text>
              Warning: PowerShell detected that you might be using a screen reader
              and has disabled PSReadLine for compatibility purposes. If you want
              to re-enable it, run 'Import-Module PSReadLine'. yarn run v1.22.19 $
              react-native run-android info JS server already running. info
              Launching emulator... info Successfully launched emulator. info
              Installing the app... Warning: PowerShell detected that you might be
              using a screen reader and has disabled PSReadLine for compatibility
              purposes. If you want to re-enable it, run 'Import-Module
              PSReadLine'. yarn run v1.22.19 $ react-native run-android info JS
              server already running. info Launching emulator... info Successfully
              launched emulator. info Installing the app... Warning: PowerShell
              detected that you might be using a screen reader and has disabled
              PSReadLine for compatibility purposes. If you want to re-enable it,
              run 'Import-Module PSReadLine'. yarn run v1.22.19 $ react-native
              run-android info JS server already running. info Launching
              emulator... info Successfully launched emulator. info Installing the
              app...
            </Text>
          </Pressable> */}
      {/* <Button
            title="Press"
            onPress={() => setIsModalVisible(true)}
            color="midnightblue"
          />
          <Modal
            visible={isModalVisible}
            onRequestClose={() => setIsModalVisible(false)}
            animationType="slide"
            presentationStyle="pageSheet">
            <View style={{flex: 1, backgroundColor: 'lightblue', padding: 60}}>
              <Text>Modal Content</Text>
              <Button
                title="Close"
                color="midnightblue"
                onPress={() => setIsModalVisible(false)}
              />
            </View>
          </Modal> */}
      {/* </ScrollView> */}
      {/* <View style={styles.darkMode}>
          <Text style={styles.darkModeText}>
            Styles Inheritance <Text style={styles.boldText}>in bold</Text>
          </Text>
        </View> */}
      {/* <View style={[styles.lightBlueBox, styles.box, styles.boxShadow]}>
          <Text style={{borderRadius: 5, backgroundColor: 'red'}}>
            Light Blue Box
          </Text>
        </View> */}
      {/* <View style={[styles.lightGreenBox, styles.box, styles.androidShadow]}>
          <Text>Light Green Box</Text>
        </View> */}
    </View>
  );
};

export default CoreComponents;

const styles = StyleSheet.create({
  container: {backgroundColor: 'plum', flex: 1, padding: 60},
  darkMode: {
    backgroundColor: 'black',
  },
  darkModeText: {
    color: 'white',
  },
  boldText: {
    fontWeight: 'bold',
  },
  box: {
    width: 250,
    height: 250,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'purple',
  },
  title: {},
  lightBlueBox: {
    backgroundColor: 'lightblue',
  },
  lightGreenBox: {
    backgroundColor: 'lightgreen',
  },
  boxShadow: {
    shadowColor: '#333333',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    shadowColor: '#ff0000',
    elevation: 10,
  },
});
