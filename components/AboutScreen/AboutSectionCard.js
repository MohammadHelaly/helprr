import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import TouchableComponent from "../UI/TouchableComponent";
import theme from "../../constants/theme";

const AboutSectionCard = (props) => {
	const { onPress, title, image, icon, description } = props;

	return (
		<View style={styles.informationSectionContent}>
			<TouchableComponent
				onPress={onPress}
				style={styles.informationSectionContentTouchable}>
				{image ? (
					<Image
						style={styles.informationSectionContentImage}
						source={image}
					/>
				) : (
					<View style={styles.informationSectionContentImage}>
						{icon}
					</View>
				)}

				<Text style={styles.informationSectionContentTitle}>
					{title}
				</Text>
				<Text style={styles.informationSectionContentDescription}>
					{description}
				</Text>
			</TouchableComponent>
		</View>
	);
};

const styles = StyleSheet.create({
	informationSectionContent: {
		width: "48%",
		borderTopRightRadius: 12,
		borderTopLeftRadius: 12,
		borderBottomEndRadius: 0,
		borderBottomStartRadius: 0,
		overflow: "hidden",
	},
	informationSectionContentTouchable: {
		flex: 1,
		flexDirection: "column",
	},
	informationSectionContentImage: {
		height: 200,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 12,
		marginBottom: 4,
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

export default AboutSectionCard;
