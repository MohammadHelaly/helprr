import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AboutSectionCard from "./AboutSectionCard";
import theme from "../../constants/theme";

const AboutSection = () => {
	return (
		<View style={styles.aboutSection}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>More about Helprr</Text>
			</View>
			<Text style={styles.descriptionText}>
				Helprr was created with a simple mission: to lend a helping hand
				to those with visual and auditory impairments. It started as a
				passion project, driven by the desire to make life a bit easier
				for those facing these challenges.
			</Text>
			<Text style={styles.descriptionText}>
				Being an open-source project means Helprr is freely available to
				anyone who could benefit from its features.
			</Text>
			<Text style={styles.descriptionText}>
				Helprr wants individuals with disabilities to feel empowered and
				embraced. Whether it's helping with communication or making
				navigation easier, Helprr is here to lend a friendly hand.
			</Text>
			<Text style={styles.descriptionText}>
				And the best part? Helprr will always be free and accessible to
				everyone, and committed to ensuring that everyone can enjoy its
				benefits. With each update, Helprr will be made even more
				impactful.
			</Text>
			<ScrollView
				contentContainerStyle={styles.informationSectionContainer}>
				<AboutSectionCard
					onPress={() => {}}
					icon={
						<Ionicons
							name="globe-outline"
							size={64}
							color={theme.colors.primary}
						/>
					}
					title="Website"
					description="Go to the website."
				/>
				<AboutSectionCard
					onPress={() => {}}
					icon={
						<Ionicons
							name="logo-github"
							size={64}
							color={theme.colors.primary}
						/>
					}
					title="GitHub"
					description="See the source code."
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	aboutSection: {
		flex: 1,
		justifyContent: "center",
		alignItems: "flex-start",
		gap: 16,
	},
	titleContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	title: {
		fontSize: theme.sizes.xLarge,
		fontWeight: "bold",
		textAlign: "left",
		marginBottom: 8,
	},
	descriptionText: {
		textAlign: "left",
		fontSize: theme.sizes.medium,
		color: theme.colors.grey,
	},
	informationSectionContainer: {
		flex: 1,
		flexDirection: "row",
		alignSelf: "center",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 0,
		gap: 12,
		marginVertical: 16,
	},
});

export default AboutSection;
