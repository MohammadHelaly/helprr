import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import GradientText from "../UI/GradientText";
import theme from "../../constants/theme";

const AlternateHeroSection = () => {
	return (
		<View style={styles.heroSectionContainer}>
			<View style={styles.heroSection}>
				<Image
					source={require("../../assets/logo.jpg")}
					style={styles.logo}
				/>
				<View>
					<Text style={styles.title}>Helprr is your hand held</Text>
					<GradientText
						style={styles.title}
						colors={theme.colors.pinkAndCyanGradient}>
						guide dog.{" "}
					</GradientText>
				</View>
				<Text
					style={{
						...styles.descriptionText,
						...styles.descriptionTextLight,
					}}>
					It is designed to help you navigate the world around you. It
					is your
					<Text
						style={{
							...styles.descriptionText,
							...styles.descriptionTextDark,
						}}>
						{" "}
						eyes and ears.{" "}
					</Text>
					It is your
					<Text
						style={{
							...styles.descriptionText,
							...styles.descriptionTextHighlight,
						}}>
						{" "}
						Helprr.
					</Text>
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	heroSectionContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 16,
		marginTop: 48,
		marginBottom: 24,
	},
	heroSection: {
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
	},
	title: {
		fontSize: theme.sizes.xxxLarge,
		fontWeight: "bold",
		textAlign: "center",
	},
	descriptionText: {
		textAlign: "center",
		fontSize: theme.sizes.medium,
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
});

export default AlternateHeroSection;
