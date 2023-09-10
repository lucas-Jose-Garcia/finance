import {Picker} from '@react-native-picker/picker';
import { View } from 'react-native';
import { IconButton, Text, useTheme } from 'react-native-paper';
import { Separator } from './Separator';

interface CustomPickerProps {
    listItems: string[]
    selected: string
    setSelected: React.Dispatch<React.SetStateAction<string>>
}


export function CustomPicker({listItems, selected, setSelected}: CustomPickerProps) {
    const theme = useTheme()
    return (
        <View>
            <Text variant='bodySmall' style={{paddingLeft: 12, paddingTop: 6}}>Categoria</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <IconButton icon='tag-outline' style={{paddingLeft: 2}}/>
                    <View style={{flexDirection: 'row'}}>
                        <Picker
                            mode='dropdown'
                            style={{width: '78%'}}
                            selectedValue={selected}
                            onValueChange={(itemValue, itemIndex) => {
                                setSelected(itemValue)
                            }}
                        >
                            {listItems.map((item) => <Picker.Item key={item} label={item} value={item} style={{color: theme.colors.secondary }}/>)}
                        
                        </Picker>
                        <IconButton icon='plus' style={{paddingLeft: 8}}/>
                    </View>
                </View>
            </View>
                <Separator />
        </View>
    )
}