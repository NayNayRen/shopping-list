import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import uuid from "react-native-uuid";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

// have to set the props(id) data type when being passed

export default function Index() {
	// setItems is the function name used to interact with items(state)
	const [items, setItems] = useState([
		{ id: uuid.v4(), text: "Butter" },
		{ id: uuid.v4(), text: "Milk" },
		{ id: uuid.v4(), text: "Bread" },
	]);

	const deleteItem = (id) => {
		setItems((previousList) => {
			// filtering each item, bring back items that don't match the id passed as a prop
			return previousList.filter((item) => item.id != id);
		});
	};

	return (
		<SafeAreaView className="h-full justify-between">
			<View>
				<Header title="Shopping List" />
				<FlatList
					data={items}
					renderItem={({ item }) => (
						<ListItem item={item} handlePress={deleteItem} />
					)}
				/>
			</View>
			<View>
				<Image
					source={require("@/assets/images/pw-logo.png")}
					style={styles.image}
				/>
			</View>
			<StatusBar backgroundColor="#000" style="light" />
		</SafeAreaView>
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
