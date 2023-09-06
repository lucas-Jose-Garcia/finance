import { View } from "react-native"
import { useTheme } from "react-native-paper"

export function Separator() {
    const theme = useTheme()

    return <View style={{width: '100%', height: 2, backgroundColor: theme.colors.secondary, opacity: 0.3}} />
}