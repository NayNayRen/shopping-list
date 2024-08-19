import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, StyleSheet, FlatList, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import uuid from "react-native-uuid";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import AddItem from "../components/AddItem";

// have to set the props(id) data type when being passed

export default function Index() {
	// setItems is the function name used to interact with items(state)
	const [items, setItems] = useState([
		{ id: uuid.v4(), text: "Butter" },
		{ id: uuid.v4(), text: "Milk" },
		{ id: uuid.v4(), text: "Bread" },
	]);
	// delete from list
	const deleteItem = (id) => {
		setItems((previousList) => {
			// filtering items, bring back items that don't match the id passed as a prop
			return previousList.filter((item) => item.id != id);
		});
	};
	// add to list
	const addItem = (inputText) => {
		if (!inputText) {
			Alert.alert("Error", "You can't add an empty item to the list...");
		} else {
			setItems((previousList) => {
				// gets previous list via spread operator
				// appends new object to the front of the list
				return [{ id: uuid.v4(), text: inputText }, ...previousList];
			});
		}
	};

	return (
		<SafeAreaView className="h-full justify-between bg-white">
			<View>
				<Header title="Shopping List" />
				<AddItem addItem={addItem} />
				<FlatList
					data={items}
					renderItem={({ item }) => (
						<ListItem item={item} deleteItem={deleteItem} />
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
