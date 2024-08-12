import { View, Text, StyleSheet } from "react-native";

// typescript makes you define the props(title) data type
type headerProps = { title: string };

export default function Header({ title }: headerProps) {
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
