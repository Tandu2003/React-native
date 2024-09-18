import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./style";

export default function HomeScreen() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [checkLength, setCheckLength] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSpecialSymbol, setIncludeSpecialSymbol] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const notificationLength = "Please input an integer 4-20 characters";
  const notificationOption = "Please choose at least one";

  const toggleIncludeLowercase = () => setIncludeLowercase(!includeLowercase);
  const toggleIncludeUppercase = () => setIncludeUppercase(!includeUppercase);
  const toggleIncludeNumber = () => setIncludeNumber(!includeNumber);
  const toggleIncludeSpecialSymbol = () => setIncludeSpecialSymbol(!includeSpecialSymbol);

  const handleInputLength = (text: string) => {
    if (!text) {
      setPasswordLength(0);
      return;
    }

    const number = parseInt(text);

    setPasswordLength(number);

    if (isNaN(number) || number < 4 || number > 20) {
      setCheckLength(true);
    } else {
      setCheckLength(false);
      setPasswordLength(number);
    }
  };

  const handleGenerate = () => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let allChars = "";
    if (includeLowercase) allChars += lowercaseChars;
    if (includeUppercase) allChars += uppercaseChars;
    if (includeNumber) allChars += numberChars;
    if (includeSpecialSymbol) allChars += specialChars;

    if (
      !includeLowercase &&
      !includeUppercase &&
      !includeNumber &&
      !includeSpecialSymbol &&
      checkLength
    ) {
      setGeneratedPassword(
        notificationOption + " and " + notificationLength.replace("Please ", "")
      );
      return;
    } else if (!includeLowercase && !includeUppercase && !includeNumber && !includeSpecialSymbol) {
      setGeneratedPassword(notificationOption);
      return;
    } else if (checkLength) {
      setGeneratedPassword(notificationLength);
      return;
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }

    setGeneratedPassword(password);
  };

  const handleCopy = () => {
    if (!generatedPassword) return;

    Alert.alert("Copied to Clipboard", generatedPassword);
  };

  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" style={styles.svgBackground}>
        <Defs>
          <RadialGradient
            id="grad"
            cx="50%"
            cy="50%"
            rx="145%"
            ry="145%"
            fx="50%"
            fy="50%"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="26.56%" stopColor="#3B3B98" stopOpacity="1" />
            <Stop offset="87.36%" stopColor="rgba(196, 196, 196, 0)" stopOpacity="0" />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>PASSWORD</Text>
          <Text style={styles.headerText}>GENERATOR</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.mainOutput}>
            <Text style={styles.textOuput}>{generatedPassword}</Text>
          </View>
          {generatedPassword !== "" && (
            <TouchableOpacity style={styles.copyButton} onPress={handleCopy}>
              <FontAwesome name="copy" size={20} color="#fff" />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Password length</Text>
          <TextInput
            style={styles.optionInput}
            keyboardType="numeric"
            value={passwordLength.toString()}
            onChangeText={handleInputLength}
          />
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Include lowercase letters</Text>
          <TouchableOpacity style={styles.optionCheckbox} onPress={toggleIncludeLowercase}>
            {includeLowercase && <Text style={styles.checkboxText}>X</Text>}
          </TouchableOpacity>
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Include upcase letters</Text>
          <TouchableOpacity style={styles.optionCheckbox} onPress={toggleIncludeUppercase}>
            {includeUppercase && <Text style={styles.checkboxText}>X</Text>}
          </TouchableOpacity>
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Include number</Text>
          <TouchableOpacity style={styles.optionCheckbox} onPress={toggleIncludeNumber}>
            {includeNumber && <Text style={styles.checkboxText}>X</Text>}
          </TouchableOpacity>
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Include special symbol</Text>
          <TouchableOpacity style={styles.optionCheckbox} onPress={toggleIncludeSpecialSymbol}>
            {includeSpecialSymbol && <Text style={styles.checkboxText}>X</Text>}
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.generateButton} onPress={handleGenerate}>
            <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
