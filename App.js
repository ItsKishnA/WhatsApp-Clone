import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Navigator from './src/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
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
