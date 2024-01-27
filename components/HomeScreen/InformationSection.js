import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import InformationSectionCard from "./InformationSectionCard";
import theme from "../../constants/theme";

const InformationSection = (props) => {
	const { navigation } = props;

	return (
		<View style={styles.informationSection}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Your everyday, now easier</Text>
				{/*made*/}
			</View>
			<Text
				style={{
					...styles.descriptionText,
					...styles.descriptionTextLight,
				}}></Text>
			<View style={styles.informationSectionContentContainer}>
				{/* Horizontal ScrollView here */}
				<InformationSectionCard
					onPress={() => {
						navigation.navigate("Listen");
					}}
					title="Listen"
					// image={require("../../assets/logo2.png")}
					description="Helprr will be your ears."
				/>
				<InformationSectionCard
					onPress={() => {
						navigation.navigate("See");
					}}
					title="See"
					// image={require("../../assets/logo2.png")}
					description="Helprr will be your eyes."
				/>
				{/* <InformationSectionCard
					onPress={() => {
						navigation.navigate("Speak");
					}}
					title="Speak"
					image={require("../../assets/logo2.png")}
					description="Helprr will be your voice."
				/> */}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	informationSection: {
		flex: 1,
		justifyContent: "center",
		alignItems: "flex-start",
		margin: 16,
		gap: 4,
	},
	logo: {
		width: 144,
		height: 144,
		resizeMode: "contain",
		borderRadius: 16,
		// marginBottom: 16,
	},
	titleContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		// marginBottom: 16,
	},
	title: {
		fontSize: theme.sizes.xLarge,
		fontWeight: "bold",
		textAlign: "left",
	},
	descriptionText: {
		textAlign: "left",
		fontSize: theme.sizes.large,
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
	informationSectionContentContainer: {
		flex: 1,
		flexDirection: "row",
		alignSelf: "center",
		justifyContent: "space-around",
		alignItems: "center",
		// marginVertical: 16,
		padding: 0,
		gap: 12,
	},
});

export default InformationSection;
