import React, { useState } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import uuid from "react-native-uuid";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

// have to set the props(id) data type when being passed
type itemId = { id: string };

export default function Index() {
	// setItems is the function name used to interact with items(state)
	const [items, setItems] = useState([
		{ id: uuid.v4(), text: "Butter" },
		{ id: uuid.v4(), text: "Milk" },
		{ id: uuid.v4(), text: "Bread" },
	]);

	const deleteItem = ({ id }: itemId) => {
		setItems((previousList) => {
			// filtering each item, bring back items that don't match the id passed as a prop
			return previousList.filter((item) => item.id != id);
		});
	};

	return (
		<View style={styles.container}>
			<Header title="Shopping List" />
			<FlatList
				data={items}
				renderItem={({ item }) => (
					<ListItem item={item} deleteItem={deleteItem} />
				)}
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
