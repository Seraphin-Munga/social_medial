import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { inputs } from "../assets/styles/inputs";
import { buttons } from "../assets/styles/buttons";
import ErrorText from "../core/models/Error.model";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateUsername = (text: React.SetStateAction<string>) => {
    setUsername(text);
    setUsernameError(text ? "" : "Username is required");
  };

  const validatePassword = (text: React.SetStateAction<string>) => {
    setPassword(text);
    setPasswordError(text ? "" : "Password is required");
  };

  const handleLogin = () => {
    if (!username) {
      setUsernameError("Username is required");
      return;
    }

    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    console.log("Logging in with:", username, password);

    setUsernameError("");
    setPasswordError("");
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };

  const handleRegister = () => {
    console.log("Register clicked");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="person" size={18} style={styles.icon} />
        <TextInput
          style={inputs.input}
          placeholder="Username"
          placeholderTextColor={"#fff"}
          value={username}
          onChangeText={validateUsername}
        />
        {usernameError ? <ErrorText message={usernameError} /> : null}
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={18} style={styles.icon} />
        <TextInput
          style={inputs.input}
          placeholder="Password"
          placeholderTextColor={"#fff"}
          secureTextEntry
          value={password}
          onChangeText={validatePassword}
        />
        {passwordError ? <ErrorText message={passwordError} /> : null}
      </View>

      <TouchableOpacity style={buttons.loginButton} onPress={handleLogin}>
        <Text style={buttons.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.linkText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#BDBDBD",
    alignItems: "center",
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 100,
  },
  inputContainer: {
    position: "relative",
    width: "80%",
    marginBottom: 16,
  },
  icon: {
    position: "absolute",
    left: 8,
    color: "#fff",
    top: 8,
    zIndex: 2,
  },
  errorContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  errorText: {
    color: "red",
    fontSize: 12,
  },
  linkContainer: {
    marginTop: 20,
    justifyContent: "space-between",
  },
  linkText: {
    color: "#fff",
    paddingBottom: 10,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default LoginPage;
