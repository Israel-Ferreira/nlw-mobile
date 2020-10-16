import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import OrphanagesMap from './screens/OrphanagesMap'
import OrphanagesDetails from './screens/OrphanageDetails'

const {Navigator, Screen} = createStackNavigator()

const Routes = () => (
    <NavigationContainer>
        <Navigator screenOptions={{headerShown: false}}>
            <Screen  name="OrphanagesMap" component={OrphanagesMap} />
            <Screen name="OrphanageDetails" component={OrphanagesDetails} />
        </Navigator>
    </NavigationContainer>
)

export default Routes;