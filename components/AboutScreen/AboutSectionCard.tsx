import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
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
		<View style={styles.aboutSectionCard}>
			<Pressable
				onPress={onPress}
				style={styles.aboutSectionCardContentTouchable}>
				<View style={styles.informationSectionCardContent}>
					{image ? (
						<Image
							style={styles.aboutSectionCardContentImage}
							source={image}
						/>
					) : (
						<View style={styles.aboutSectionCardContentImage}>
							<Ionicons
								name={icon}
								size={64}
								color={theme.colors.black}
							/>
						</View>
					)}
					<Text style={styles.aboutSectionCardContentTitle}>
						{title}
					</Text>
					<Text style={styles.aboutSectionCardContentDescription}>
						{description}
					</Text>
				</View>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	aboutSectionCard: {
		width: "48%",
		borderTopRightRadius: 12,
		borderTopLeftRadius: 12,
		borderBottomEndRadius: 0,
		borderBottomStartRadius: 0,
		overflow: "hidden",
	},
	aboutSectionCardContentTouchable: {
		flex: 1,
	},
	informationSectionCardContent: {
		flexDirection: "column",
	},
	aboutSectionCardContentImage: {
		height: 200,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 12,
		marginBottom: 4,
		backgroundColor: theme.colors.lightGrey,
	},
	aboutSectionCardContentTitle: {
		fontSize: theme.sizes.medium,
		fontWeight: "bold",
		textAlign: "left",
	},
	aboutSectionCardContentDescription: {
		fontSize: theme.sizes.small,
		color: theme.colors.grey,
		textAlign: "left",
	},
});

export default AboutSectionCard;
