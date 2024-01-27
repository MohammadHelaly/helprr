import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import theme from "../../constants/theme";
import TouchableComponent from "../UI/TouchableComponent";
// import { LinearGradient } from "expo-linear-gradient";

const InformationSectionCard = (props) => {
	const { onPress, title, image, description } = props;

	return (
		<View style={styles.informationSectionContent}>
			<TouchableComponent
				style={styles.informationSectionContentTouchable}
				onPress={onPress}>
				<View>
					<Image
						style={styles.informationSectionContentImage}
						source={image}
					/>

					<Text style={styles.informationSectionContentTitle}>
						{title}
					</Text>
					<Text style={styles.informationSectionContentDescription}>
						{description}
					</Text>
				</View>
			</TouchableComponent>
		</View>
	);
};

const styles = StyleSheet.create({
	informationSectionContent: {
		// height: 220,
		width: "48%",
		borderTopRightRadius: 12,
		borderTopLeftRadius: 12,
		borderBottomEndRadius: 0,
		borderBottomStartRadius: 0,
		overflow: "hidden",
		// backgroundColor: theme.colors.grey,
	},
	informationSectionContentTouchable: {
		flex: 1,
		flexDirection: "column",
		gap: 8,
	},
	informationSectionContentImage: {
		height: 200,
		width: "100%",
		borderRadius: 12,
		backgroundColor: theme.colors.lightGrey,
	},
	informationSectionContentTitle: {
		fontSize: theme.sizes.medium,
		fontWeight: "bold",
		textAlign: "left",
	},
	informationSectionContentDescription: {
		fontSize: theme.sizes.small,
		color: theme.colors.grey,
		textAlign: "left",
	},
});

export default InformationSectionCard;
