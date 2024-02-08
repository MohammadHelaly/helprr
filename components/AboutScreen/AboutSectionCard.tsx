import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TouchableComponent from "../UI/TouchableComponent";
import theme from "../../constants/theme";

type AboutSectionCardProps = {
	onPress: () => void;
	title: string;
	image?: any;
	icon?: any;
	description: string;
};

const AboutSectionCard = (props: AboutSectionCardProps) => {
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
						<Ionicons
							name={icon}
							size={64}
							color={theme.colors.black}
						/>
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
