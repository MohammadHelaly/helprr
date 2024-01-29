import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Platform,
	Alert,
} from "react-native";
import SmallButton from "../UI/SmallButton";
import TouchableComponent from "../UI/TouchableComponent";
import theme from "../../constants/theme";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { conversationActions } from "../../store/slices/conversation-slice";

const ConversationListItem = (props) => {
	const { id, title, date, lastSentence, onSelect } = props;
	const [isEditing, setIsEditing] = useState(false);
	const [currentTitle, setCurrentTitle] = useState(title);
	const dispatch = useDispatch();

	const handleTitleChange = () => {
		dispatch(
			conversationActions.editConversation({
				conversation: {
					id: id,
					title: currentTitle,
				},
			})
		);
		setIsEditing(false);
	};

	const handleDelete = () => {
		Alert.alert(
			"Delete Conversation",
			"Are you sure you want to delete this conversation?",
			[
				{
					text: "Cancel",
					style: "cancel",
				},
				{
					text: "Delete",
					style: "destructive",
					onPress: () => {
						dispatch(
							conversationActions.deleteConversation({
								conversationId: id,
							})
						);
					},
				},
			]
		);
	};

	return (
		<TouchableComponent
			onPress={() => {
				onSelect(id);
			}}>
			<View style={styles.conversationItem}>
				<View style={styles.conversationItemContainer}>
					<View style={styles.conversationItemInformationContainer}>
						<View style={styles.conversationItemTitleContainer}>
							{isEditing ? (
								<TextInput
									autoFocus
									style={styles.conversationItemTitle}
									returnKeyType="done"
									defaultValue={title}
									onChangeText={(text) => {
										setCurrentTitle(text);
									}}
									onEndEditing={handleTitleChange}
								/>
							) : (
								<Text style={styles.conversationItemTitle}>
									{title?.length > 32
										? title?.substring(0, 32) + "..."
										: title}
								</Text>
							)}
							<SmallButton
								style={styles.button}
								icon={
									Platform.OS === "android"
										? "create-outline"
										: "create-outline"
								}
								onPress={() => {
									setIsEditing(true);
								}}
							/>
						</View>
						{/* <SmallButton
							style={styles.menuButton}
							icon={
								Platform.OS === "android"
									? "md-ellipsis-vertical"
									: "ios-ellipsis-vertical"
							}
							onPress={() => {
								console.log("menu pressed");
							}}
						/> */}
						<SmallButton
							style={styles.menuButton}
							icon={
								Platform.OS === "android"
									? "trash-outline"
									: "trash-outline"
							}
							onPress={handleDelete}
						/>
					</View>
					<Text style={styles.conversationItemDate}>{date}</Text>
					<Text style={styles.conversationItemLastSentence}>
						{lastSentence?.length > 46
							? lastSentence?.substring(0, 46) + "..."
							: lastSentence}
					</Text>
				</View>
			</View>
		</TouchableComponent>
	);
};

const styles = StyleSheet.create({
	conversationItem: {
		flex: 1,
		width: "100%",
		paddingHorizontal: 16,
		// paddingVertical: 20,
		paddingTop: 20,
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "flex-start",
		gap: 2,
		// borderTopWidth: 1,
		// borderBottomWidth: 0.5,
		// borderColor: theme.colors.lightGrey,
		backgroundColor: theme.colors.white,
	},
	conversationItemContainer: {
		paddingBottom: 20,
		borderBottomWidth: 1,
		borderColor: theme.colors.lightGrey,
	},
	conversationItemInformationContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
	},
	conversationItemTitleContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 2,
	},
	conversationItemTitle: {
		fontSize: theme.sizes.medium,
		fontWeight: "bold",
		// minWidth: 140,
	},
	conversationItemDate: {
		fontSize: theme.sizes.xxSmall,
		color: theme.colors.grey,
	},
	conversationItemLastSentence: {
		marginTop: 10,
		fontSize: theme.sizes.small,
		alignSelf: "flex-start",
	},
});

export default ConversationListItem;
