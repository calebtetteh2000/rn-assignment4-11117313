import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Login from "./Login";

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Login />
    </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFD',
  },
});
