import { Text, View, Image, StyleSheet} from 'react-native';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const  ChatListItem = ({ chat }) => {
    return (
        <View style={styles.container}>
            <View>
                <Image 
                    source={{ uri: chat.user.image}} 
                    style={styles.image}
                />
            </View>
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.name} numberOfLines={1}>{chat.user.name}</Text>
                    <Text styles={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text>
                </View>
                <Text nummberOfLines={2} styles={styles.subTitle}>{chat.lastMessage.text}</Text>
           </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 6,
        height: 70,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    content: {
        flex: 1,
        marginLeft: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#888',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    name:{
        flex: 1,
        fontWeight: 'bold',
    },
    subTitle: {
        color: 'gray',
    },

});

export default ChatListItem;
    