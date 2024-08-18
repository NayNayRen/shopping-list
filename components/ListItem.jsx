import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ListItem({ item, handlePress }) {
	return (
		<TouchableOpacity style={styles.listItem}>
			<View style={styles.listItemView}>
				<Text style={styles.listItemText}>{item.text}</Text>
				<FontAwesome
					name="close"
					size={24}
					color="red"
					onPress={() => handlePress(item.id)}
				/>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	listItem: {
		backgroundColor: "#cdcdcd",
		borderBottomWidth: 1,
		borderColor: "#808080",
		padding: 15,
	},
	listItemView: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	listItemText: {
		fontSize: 20,
	},
});
