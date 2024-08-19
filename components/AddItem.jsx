import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// passed prop addItem function from index.jsx
const AddItem = ({ addItem }) => {
	// state to deal with the input value
	const [inputText, setInputText] = useState("");
	const addTypedInput = (inputTextValue) => setInputText(inputTextValue);
	return (
		<View>
			<TextInput
				style={styles.input}
				placeholder="Add something..."
				onChangeText={addTypedInput}
			/>
			<TouchableOpacity
				style={styles.button}
				onPress={() => addItem(inputText)}
			>
				<Text style={styles.buttonText}>
					Add to Me <FontAwesome name="plus" size={20} />
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default AddItem;
// onChangeText is used for text inputs to capture what's being typed

const styles = StyleSheet.create({
	input: {
		backgroundColor: "#fff",
		height: 60,
		padding: 10,
		fontSize: 16,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#006d97",
		borderRadius: 10,
		height: 60,
		justifyContent: "center",
		padding: 10,
		margin: 10,
	},
	buttonText: {
		color: "#fff",
		fontSize: 20,
		fontWeight: "bold",
	},
});
