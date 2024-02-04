import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ErrorTextProps {
  message: string;
}

const ErrorText: React.FC<ErrorTextProps> = ({ message }) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    position: "absolute",
    bottom: -15,
    left: 0,
  },
  errorText: {
    color: "red",
    fontSize: 12,
  },
});

export default ErrorText;
