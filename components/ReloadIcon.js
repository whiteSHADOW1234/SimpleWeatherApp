import React from 'react'
import { View, Platform, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../utils/index'

export default function ReloadIcon({ load }) {
    const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'
    return (
        <View style={styles.reloadIcon}>
            <Ionicons onPress={load} name={reloadIconName} size={24} color={colors.PRIMARY_COLOR} />
        </View>
    )
}

const styles = StyleSheet.create({
    reloadIcon: {
        position: 'absolute',
        ...Platform.select({
            ios: {
                right: 20,
            },
            android: {
                right: -100,
            },
        }),
        top: 60,
    },
})