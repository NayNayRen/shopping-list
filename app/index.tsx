import { View, Text, Image, StyleSheet } from "react-native";
import Header from "@/components/Header";

export default function Index() {
	return (
		<View style={styles.container}>
			<Header title='Shopping List' />
			<Image
				source={require("@/assets/images/pw-logo.png")}
				style={styles.image}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		marginLeft: "auto",
		marginRight: "auto",
	},
});

/* export default function is the same as :

const App = () =>{}
export default App

 */
