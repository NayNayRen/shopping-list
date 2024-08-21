import { View, Text, StyleSheet } from "react-native";

export default function Header({ title }) {
	return (
		<View style={styles.header}>
			<Text style={styles.text}>{title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#000",
		height: 75,
		padding: 10,
	},
	text: {
		color: "#00aeef",
		fontSize: 34,
		textAlign: "center",
	},
});
