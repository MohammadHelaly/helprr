import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import HeroSection from "../components/HomeScreen/HeroSection";
import InformationSection from "../components/HomeScreen/InformationSection";
import AboutSection from "../components/HomeScreen/AboutSection";
import theme from "../constants/theme";
import DonateSection from "../components/HomeScreen/DonateSection";

const HomeScreen = (props) => {
	const { navigation } = props;

	return (
		<SafeAreaView style={styles.container}>
			{/* <ScrollView> */}
			<HeroSection navigation={navigation} />
			{/* <InformationSection navigation={navigation} /> */}
			{/* <AboutSection navigation={navigation} /> */}
			{/* <DonateSection navigation={navigation} /> */}
			{/* </ScrollView> */}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.light,
	},
});

export default HomeScreen;
