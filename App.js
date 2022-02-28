import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text style={styles.deneme}>emir</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deneme: {
    justifyContent:'center',
    flexDirection:'row',
  },
});
