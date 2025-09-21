import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 18,
        paddingHorizontal: 32,
        borderRadius: 12,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(0, 0, 0, 0.2)',
    },
    card_text: {
        fontSize: 24,

    },
    card_img: {
        height: 25,
        width: 25,

    },
})
