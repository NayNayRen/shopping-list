import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// typescript makes you define the props(title) data type
type listItemProps = { item: any };

export default function ListItem({ item }: listItemProps) {
	return (
		<TouchableOpacity style={styles.listItem}>
			<View style={styles.listItemView}>
				<Text style={styles.listItemText}>{item.text}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	listItem: {},
	listItemView: {},
	listItemText: {},
});
