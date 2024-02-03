import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import LargeButton from "../UI/LargeButton";
import theme from "../../constants/theme";

const HeroSection = (props) => {
	const { navigation } = props;

	const handleListenButtonPress = () => {
		navigation.navigate("Listen");
	};

	const handleSeeButtonPress = () => {
		navigation.navigate("See");
	};

	return (
		<View style={styles.heroSection}>
			<View style={styles.logoContainer}>
				<Image
					source={require("../../assets/logo.jpg")}
					style={styles.logo}
				/>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Helprr</Text>
				</View>
				<Text style={styles.descriptionText}>
					Your hand held guide dog.
				</Text>
			</View>
			<View style={styles.heroSectionButtonContainer}>
				<LargeButton
					title="Listen"
					icon="ear-sharp"
					style={styles.heroSectionButton}
					onPress={handleListenButtonPress}
				/>
				<LargeButton
					title="See"
					icon="eye-sharp"
					style={styles.heroSectionButton}
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
