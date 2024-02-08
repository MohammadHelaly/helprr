import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import AlternateHeroSection from "../components/AboutScreen/AlternateHerosection";
import AboutSection from "../components/AboutScreen/AboutSection";
import theme from "../constants/theme";

const AboutScreen = () => {
	return (
		<View style={styles.container}>
			<ScrollView>
				<AlternateHeroSection />
				<AboutSection />
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
	},
});

export default AboutScreen;
