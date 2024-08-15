import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
// typescript makes you define the props(title) data type
type listItemProps = { item: any };
type deleteItemProp = { deleteItem: Function };

export default function ListItem(
	{ item }: listItemProps,
	{ deleteItem }: deleteItemProp
) {
	return (
		<TouchableOpacity style={styles.listItem}>
			<View style={styles.listItemView}>
				<Text style={styles.listItemText}>{item.text}</Text>
				<FontAwesome
					name="close"
					size={24}
					color="red"
					onClick={() => deleteItem(item.id)}
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
