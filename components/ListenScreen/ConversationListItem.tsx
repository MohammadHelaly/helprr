import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { useTypedDispatch } from "../../hooks/typed-redux-hooks";
import {
	conversationActions,
	Conversation,
} from "../../store/slices/conversation-slice";
import SmallButton from "../UI/SmallButton";
import TouchableComponent from "../UI/TouchableComponent";
import EditableText from "../UI/EditableText";
import theme from "../../constants/theme";

type ConversationListItemProps = {
	conversation: Conversation;
	onSelect: (id: string) => void;
};

const ConversationListItem = (props: ConversationListItemProps) => {
	const { conversation, onSelect } = props;
	const { id, title, date, sentences, lastSentence } = conversation;

	const [isEditing, setIsEditing] = useState(false);
	const [currentTitle, setCurrentTitle] = useState(title);

	const dispatch = useTypedDispatch();

	const displayedSentence =
		lastSentence?.length > 46
			? lastSentence?.substring(0, 46) + "..."
			: lastSentence;

	const handleConversationSelect = () => {
		onSelect(id);
	};

	const handleEditButtonPress = () => {
		setIsEditing(true);
	};

	const handleTitleChange = () => {
		const editedConversation: Conversation = {
			id: id,
			title: currentTitle,
			date: date,
			sentences: sentences,
			lastSentence: lastSentence,
		};

		dispatch(
			conversationActions.editConversation({
				conversation: editedConversation,
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
		<TouchableComponent onPress={handleConversationSelect}>
			<View style={styles.conversationItem}>
				<View style={styles.conversationItemContainer}>
					<View style={styles.conversationItemInformationContainer}>
						<View style={styles.conversationItemTitleContainer}>
							<EditableText
								defaultValue={title}
								maxLength={32}
								isEditing={isEditing}
								style={styles.conversationItemTitle}
								onEndEditing={handleTitleChange}
								setCurrentText={setCurrentTitle}
							/>
							<SmallButton
								icon="create-outline"
								onPress={handleEditButtonPress}
							/>
						</View>
						<SmallButton
							icon="trash-outline"
							onPress={handleDelete}
						/>
					</View>
					<Text style={styles.conversationItemDate}>{date}</Text>
					<Text style={styles.conversationItemLastSentence}>
						{displayedSentence}
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
		paddingTop: 20,
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "flex-start",
		gap: 2,
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
	},
	conversationItemDate: {
		fontSize: theme.sizes.xxSmall,
		color: theme.colors.grey,
		justifyContent: "flex-start",
		alignSelf: "flex-start",
	},
	conversationItemLastSentence: {
		marginTop: 10,
		fontSize: theme.sizes.small,
		alignSelf: "flex-start",
	},
});

export default ConversationListItem;
