import { Link } from 'expo-router';
import { View } from 'react-native';
import Header from '../../../../components/atoms/Header';
import headerStyles from '../../../../components/styles/headerStyles';
import { useFocusEffect } from 'expo-router';
import React from 'react';
import { TabFocusContext } from '../../../../context/NavigationProvider';
const Settings = () => {
    const { setFocusedTab } = React.useContext(TabFocusContext);
    
    useFocusEffect(
        React.useCallback(() => {
            setFocusedTab('Settings');
            return () => {
                console.log('Unfocused');
            };
        }, [])
    );
    return (
        <View>
        <Header text="Thuis Veilig" style={[headerStyles.test]}  />
        
        </View>
    );
}

export default Settings;