import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
        <SafeAreaView style={styles.container}>
          <Text>
            <Text>Open up App.js to start working on your app! 1 {"\n"}</Text>
            <Text>Open up App.js to start working on your app! 2 {"\n"}</Text>
            <Text>Open up App.js to start working on your app! 3 {"\n"}</Text>
            <Text>Open up App.js to start working on your app! 4 {"\n"}</Text>
            <Text>Open up App.js to start working on your app! 5 {"\n"}</Text>
            <Text>Open up App.js to start working on your app! 6 {"\n"}</Text>
          </Text>
        </SafeAreaView>
      </SafeAreaProvider>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 16,
  },
});
