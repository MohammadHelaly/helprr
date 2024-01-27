import React from "react";
import { View, Text, StyleSheet, Image, Platform } from "react-native";
import LargeButton from "../UI/LargeButton";
import GradientText from "../UI/GradientText";
import theme from "../../constants/theme";

const HeroSection = (props) => {
	const { navigation } = props;

	return (
		<View style={styles.heroSection}>
			<View style={styles.logoContainer}>
				<Image
					source={require("../../assets/logo.jpg")}
					style={styles.logo}
				/>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>
						Helprr
						{/* is your hand held */}
					</Text>
					{/* <GradientText
					style={styles.title}
					colors={theme.colors.pinkAndCyanGradient}>
					guide dog.{" "}
				</GradientText> */}
				</View>
				<Text
					style={{
						...styles.descriptionText,
						...styles.descriptionTextLight,
					}}>
					{/* It helps you navigate the world around you. */}
					Your hand held guide dog.{" "}
					{/* <Text
					style={{
						...styles.descriptionText,
						...styles.descriptionTextDark,
					}}>
					{" "}
					eyes and ears.{" "}
				</Text> */}
					{/* It is your best friend. It is your
				<Text
					style={{
						...styles.descriptionText,
						...styles.descriptionTextHighlight,
					}}>
					{" "}
					Helprr.
				</Text> */}
				</Text>
				{/* <GradientText
				style={styles.descriptionText}
				colors={theme.colors.darkPinkAndCyanGradient}>
				guide dog.{" "}
			</GradientText> */}
			</View>
			<View style={styles.heroSectionButtonContainer}>
				<LargeButton
					title="Listen"
					icon={Platform.OS === "ios" ? "ear-sharp" : "ear-sharp"}
					style={styles.heroSectionButton}
					onPress={() => {
						navigation.navigate("Listen");
					}}
				/>
				<LargeButton
					title="See"
					icon={Platform.OS === "ios" ? "eye-sharp" : "eye-sharp"}
					style={styles.heroSectionButton}
					onPress={() => {
						navigation.navigate("See");
					}}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	heroSection: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		// alignItems: "flex-start",
		margin: 16,
		gap: 16,
	},
	logoContainer: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: 16,
	},
	logo: {
		width: 160,
		height: 160,
		resizeMode: "contain",
		borderRadius: 16,
		borderWidth: 4,
		borderColor: theme.colors.black,
		// marginBottom: 16,
	},
	titleContainer: {
		// flexDirection: "row",
		// flexWrap: "wrap",
		// marginBottom: 16,
	},

	title: {
		fontSize: theme.sizes.xxxLarge,
		fontWeight: "bold",
		textAlign: "center",
		// textAlign: "left",
	},
	descriptionText: {
		textAlign: "center",
		// textAlign: "left",
		// fontSize: theme.sizes.large,
		fontSize: theme.sizes.medium,
		// marginBottom: 16,
	},
	descriptionTextHighlight: {
		color: theme.colors.pink,
		fontWeight: "bold",
	},
	descriptionTextDark: {
		color: theme.colors.black,
		fontWeight: "bold",
	},
	descriptionTextLight: {
		color: theme.colors.grey,
	},
	heroSectionButtonContainer: {
		flexDirection: "row",
		alignSelf: "center",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 16,
		padding: 0,
		gap: 16,
	},
});

export default HeroSection;
