import React, { useCallback, useState } from "react";
import { useColorScheme, StyleSheet, SafeAreaView, StatusBar, Button, ScrollView, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigate } from "react-router-native";
import Section from "../../Components/Section";
import {
  selectCount,
  decrement,
  increment,
} from "../../features/counter/counterSlicer";
import { useAppDispatch, useAppSelector } from "../../services/hooks";

export default function About() {
  const isDarkMode = useColorScheme() === 'dark';
  const navigate = useNavigate()
  const navigateHandler = useCallback((path: string) => navigate(path), [navigate])
  const { value } = useAppSelector(selectCount)
  const dispatch = useAppDispatch();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="this is About">
            Hello About
          </Section>
          <Section title="Store">
            Current value is {value}
          </Section>
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => dispatch(increment())}
                title="add 1"
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => dispatch(decrement())}
                title="remove 1"
              />
            </View>
          </View>
          <Button
            onPress={() => navigateHandler('/')}
            title='Go to Home'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
  },
  buttonContainer: {
      flex: 1,
  }
});