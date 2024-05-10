import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


const CustomButton = ({ title, handlePress, containerStyles, texStyles, isLoading }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            style={[containerStyles, { backgroundColor: '#ED2748' }]} 
            className={`bg-[#ED2748] rounded-xl min-h-[62px] justify-center items-center 
            ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}>
            <Text className={`text-primary text-lg font-psemibold`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton