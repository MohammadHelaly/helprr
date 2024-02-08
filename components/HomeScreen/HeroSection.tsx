import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import LargeButton from "../UI/LargeButton";
import theme from "../../constants/theme";

type HeroSectionProps = {
	handleListenButtonPress: () => void;
	handleSeeButtonPress: () => void;
};

const HeroSection = (props: HeroSectionProps) => {
	const { handleListenButtonPress, handleSeeButtonPress } = props;

	return (
		<View style={styles.heroSection}>
			<View style={styles.logoContainer}>
				<Image
					source={require("../../assets/logo.jpg")}
					style={styles.logo}
				/>
				<Text style={styles.title}>Helprr</Text>
				<Text style={styles.descriptionText}>
					Your hand held guide dog.
				</Text>
			</View>
			<View style={styles.heroSectionButtonContainer}>
				<LargeButton
					title="Listen"
					icon="ear-sharp"
					onPress={handleListenButtonPress}
				/>
				<LargeButton
					title="See"
					icon="eye-sharp"
					onPress={handleSeeButtonPress}
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
	},
	title: {
		fontSize: theme.sizes.xxxLarge,
		fontWeight: "bold",
		textAlign: "center",
	},
	descriptionText: {
		textAlign: "center",
		fontSize: theme.sizes.medium,
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
