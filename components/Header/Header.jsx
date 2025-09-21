import { Text } from 'react-native';
import { s } from './Header.style.js';

export function Header() {
    return (
        <>
            <Text style={s.title}>RFillion - Todo List App</Text>
            <Text style={s.subtitle}>Tu as problablement un truc à faire.</Text>
        </>
    );
}
