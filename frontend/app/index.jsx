import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants/'
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';
import { useGlobalContext } from '../context/GlobalProvider';
export default function App() {
    const { isLoading, isLoggedIn } = useGlobalContext();
    if (!isLoading && isLoggedIn) return <Redirect href='/home' />
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: '100 %' }} >
                <View className='w-full items-center min-h-[85vh] px-4'>
                    <Image
                        source={images.logo}
                        className='w-[130px] h-[84px] '
                        resizeMode='contain'
                    />
                    <Image
                        source={images.cards}
                        className='max-w-[380px] w-full h-[300px] '
                        resizeMode='contain'
                    />
                    <View className='relative mt-5'>
                        <Text className='text-3xl text-white font-bold text-center'>READ MANGAS IN COLOR WITH
                            <Text className='text-secondary-200'> RED MANGA</Text></Text>
                        <Image
                            source={images.path}
                            className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
                            resizeMode='contain' />
                    </View>
                    <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>With a gallery of thousands of chapters of famous Mangas and all of that for free!!</Text>
                    <CustomButton
                        title="Continue With Email"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles="w-full mt-7" />
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView>
    );
}

const CustomButton = ({ title, handlePress, containerStyles, texStyles, isLoading }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            // style={[containerStyle, { backgroundColor: '#FFC700' }]} 
            className={`bg-[#ED2748] rounded-xl min-h-[62px] justify-center items-center 
            ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}>
            <Text className={`text-primary text-lg font-psemibold`}>{title}</Text>
        </TouchableOpacity>
    )
}

