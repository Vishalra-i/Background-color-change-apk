import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native';

export default function App() {
  const [bgcolor, setBgColor] = React.useState("#3d9b55");
  const intervalRef = React.useRef(null);
  const hexColorGenerator = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + randomColor;
  };

  const colorChanger = () => {
    setBgColor(hexColorGenerator());
  };

  const autoColorChanger = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    } else {
      intervalRef.current = setInterval(colorChanger, 500);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bgcolor,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
    },
    button: {
      backgroundColor: 'lightgray',
      padding: 10,
      borderRadius: 5,
      width: 200,
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={autoColorChanger}>
        <Text>Press Me</Text>
      </TouchableOpacity>

      <TouchableHighlight style={styles.button} onPress={colorChanger}>
        <Text>Click me to color change</Text>
      </TouchableHighlight>
    </View>
  );
}
