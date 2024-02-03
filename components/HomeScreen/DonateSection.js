// import React from "react";
// import { View, Text, StyleSheet, Platform } from "react-native";
// import LargeButton from "../UI/LargeButton";
// import theme from "../../constants/theme";

// const DonateSection = (props) => {
// 	const { navigation } = props;

// 	return (
// 		<View style={styles.donateSection}>
// 			<View style={styles.titleContainer}>
// 				<Text style={styles.title}>Support Helprr</Text>
// 			</View>
// 			<Text
// 				style={{
// 					...styles.descriptionText,
// 					...styles.descriptionTextLight,
// 				}}>
// 				Appreciate what we do? Consider donating to us to help us
// 				improve our services and help more people!
// 			</Text>
// 			<View style={styles.donateSectionButtonContainer}>
// 				<LargeButton
// 					onPress={() => {
// 						navigation.navigate("Donate");
// 					}}
// 					title="Donate"
// 					icon={
// 						Platform.OS === "ios"
// 							? "ios-heart-sharp"
// 							: "md-heart-sharp"
// 					}
// 					gradient={theme.colors.pinkGradient}
// 				/>
// 			</View>
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	donateSection: {
// 		flex: 1,
// 		justifyContent: "center",
// 		alignItems: "flex-start",
// 		margin: 16,
// 		gap: 8,
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
// 	donateSectionButtonContainer: {
// 		flex: 1,
// 		flexDirection: "row",
// 		alignSelf: "center",
// 		justifyContent: "space-between",
// 		alignItems: "center",
// 		marginVertical: 16,
// 		padding: 0,
// 		gap: 16,
// 	},
// });

// export default DonateSection;
