import React, { useState } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import uuid from "react-native-uuid";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

export default function Index() {
	const [items, setItems] = useState([
		{ id: uuid.v4(), text: "Butter" },
		{ id: uuid.v4(), text: "Milk" },
		{ id: uuid.v4(), text: "Bread" },
	]);

	return (
		<View style={styles.container}>
			<Header title='Shopping List' />
			<FlatList
				data={items}
				renderItem={({ item }) => <ListItem item={item} />}
			/>
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
