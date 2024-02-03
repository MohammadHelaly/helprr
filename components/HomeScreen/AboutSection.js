// import React from "react";
// import { View, Text, StyleSheet, Image } from "react-native";
// import InformationSectionCard from "./InformationSectionCard";
// import theme from "../../constants/theme";

// const AboutSection = (props) => {
// 	const { navigation } = props;

// 	return (
// 		<View style={styles.aboutSection}>
// 			<View style={styles.titleContainer}>
// 				<Text style={styles.title}>More about Helprr</Text>
// 			</View>
// 			<Text
// 				style={{
// 					...styles.descriptionText,
// 					...styles.descriptionTextLight,
// 				}}>
// 				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
// 				aliquet, ipsum vitae faucibus ultricies.
// 			</Text>
// 			{/* <View style={styles.informationSectionContentContainer}>
// 				<InformationSectionCard
// 					onPress={() => {
// 						navigation.navigate("Listen");
// 					}}
// 					title="Listen"
// 					image={require("../../assets/logo2.png")}
// 					description="Helprr will be your ears."
// 				/>
// 			</View> */}
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	aboutSection: {
// 		flex: 1,
// 		justifyContent: "center",
// 		alignItems: "flex-start",
// 		margin: 16,
// 		gap: 8,
// 	},
// 	logo: {
// 		width: 144,
// 		height: 144,
// 		resizeMode: "contain",
// 		borderRadius: 16,
// 	},
// 	titleContainer: {
// 		flexDirection: "row",
// 		flexWrap: "wrap",
// 	},
// 	title: {
// 		fontSize: theme.sizes.xLarge,
// 		fontWeight: "bold",
// 		textAlign: "left",
// 	},
// 	descriptionText: {
// 		textAlign: "left",
// 		fontSize: theme.sizes.large,
// 	},
// 	descriptionTextHighlight: {
// 		color: theme.colors.pink,
// 		fontWeight: "bold",
// 	},
// 	descriptionTextDark: {
// 		color: theme.colors.black,
// 		fontWeight: "bold",
// 	},
// 	descriptionTextLight: {
// 		color: theme.colors.grey,
// 	},
// 	informationSectionContentContainer: {
// 		flex: 1,
// 		flexDirection: "row",
// 		alignSelf: "center",
// 		justifyContent: "space-between",
// 		alignItems: "center",
// 		padding: 0,
// 		gap: 16,
// 	},
// });

// export default AboutSection;
