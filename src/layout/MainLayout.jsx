import { ImageBackground, SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import light_bg from '../assets/img/bg.png'


const Layout = ({ children }) => {
    const dark = useColorScheme() === 'dark'

    return (
        <SafeAreaView className="flex-1">
            <ImageBackground
                // source={dark ? dark_bg : light_bg}
                source={light_bg}
                imageStyle={{ objectFit: 'fill' }}
                resizeMode='cover'
                resizeMethod='scale'
                className="flex-1 pt-10">
                <StatusBar 
                translucent={true} 
                barStyle={'dark-content'} 
                backgroundColor={'transparent'} />
                {children}
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Layout;