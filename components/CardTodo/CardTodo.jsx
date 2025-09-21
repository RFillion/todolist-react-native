import { Image, Text, TouchableOpacity } from 'react-native';
import { s } from './Card.style';

import checkImg from '../../assets/check.png'

export function CardTodo({ todo }) {
    return (
        <TouchableOpacity style={s.card}>
            <Text style={s.card_text}>{todo.title}</Text>
            <Image style={s.card_img} source={checkImg} />
        </TouchableOpacity>
    )
}
