import { TouchableOpacity, View } from "react-native";
import { IconButton, Switch, Text, useTheme } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { Separator } from "./Separator";

interface CustomSwitchProps {
    isSwitchOn: boolean
    options: {
        on: {
            label: string
            icon: IconSource
        }
        off: {
            label: string
            icon: IconSource
        }
    }
    onToggleSwitch: () => void
}

export function CustomSwitch({isSwitchOn, options, onToggleSwitch}: CustomSwitchProps) {
    const theme = useTheme()
    return (
        <View>
            <View style={{padding: 2}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={onToggleSwitch}>
                    <IconButton icon={isSwitchOn ? options.on.icon : options.off.icon } />
                    <Text variant="titleMedium">{isSwitchOn ? options.on.label : options.off.label}</Text>
                    </TouchableOpacity>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                </View>
                <Separator />
            </View>
        </View>
    )
}