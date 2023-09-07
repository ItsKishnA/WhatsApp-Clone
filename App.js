import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import ChatsScreen from './src/screens/ChatsScreen.js';
import ChatScreen from './src/screens/ChatScreen.js';

export default function App() {
  return (
    <View style={styles.container}>
      <ChatScreen />
      
      <StatusBar style='dark'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
    justifyContent: 'center',

    paddingTop: 25,
  },
});
