import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import {
	libraryLicenses,
	mitLicenseTemplate,
	LibraryLicense,
} from "../assets/data/licenseData";
import theme from "../constants/theme";

type AcknowledgementsItemData = {
	item: LibraryLicense;
};

const AcknowledgementsScreen = () => {
	const keyExtractor = (item: LibraryLicense, index: number) =>
		index.toString();

	const renderItem = (itemData: AcknowledgementsItemData) => {
		const item = itemData.item;
		const { libraryName, license, libraryLicense } = item;
		const licenseText =
			license === "MIT License"
				? mitLicenseTemplate[0] + libraryLicense + mitLicenseTemplate[1]
				: libraryLicense;
		return (
			<View style={styles.libraryLicenseContainer}>
				<Text style={styles.libraryName}>{libraryName}</Text>
				<Text style={styles.libraryLicense}>{licenseText}</Text>
			</View>
		);
	};

	const ListHeaderComponent = (
		<Text style={styles.heading}>
			Helprr makes use of the following third-party libraries:
		</Text>
	);

	return (
		<View style={styles.container}>
			<FlatList
				ListHeaderComponent={ListHeaderComponent}
				data={libraryLicenses}
				keyExtractor={keyExtractor}
				renderItem={renderItem}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
		paddingHorizontal: 16,
	},
	heading: {
		fontSize: theme.sizes.medium,
		fontWeight: "bold",
		marginVertical: 16,
	},
	libraryLicenseContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		gap: 8,
		marginVertical: 8,
	},
	libraryName: {
		fontSize: theme.sizes.xSmall,
		fontWeight: "bold",
	},
	libraryLicense: {
		fontSize: theme.sizes.xxxSmall,
	},
});

export default AcknowledgementsScreen;
