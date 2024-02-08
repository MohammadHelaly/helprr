import React from "react";
import { View, StyleSheet } from "react-native";
import { HomeScreenProps } from "../navigation/AppNavigator";
import HeroSection from "../components/HomeScreen/HeroSection";
import theme from "../constants/theme";

const HomeScreen = (props: HomeScreenProps) => {
	const { navigation } = props;

	const handleListenButtonPress = () => {
		navigation.navigate("Listen");
	};

	const handleSeeButtonPress = () => {
		navigation.navigate("See");
	};

	return (
		<View style={styles.container}>
			<HeroSection
				handleListenButtonPress={handleListenButtonPress}
				handleSeeButtonPress={handleSeeButtonPress}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.light,
	},
});

export default HomeScreen;
