import { View, StyleSheet } from "react-native";
import HeroSection from "../components/HomeScreen/HeroSection";
import theme from "../constants/theme";

const HomeScreen = (props) => {
	const { navigation } = props;

	return (
		<View style={styles.container}>
			<HeroSection navigation={navigation} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.light,
	},
});

export default HomeScreen;
