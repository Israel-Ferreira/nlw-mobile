import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import OrphanagesMap from './screens/OrphanagesMap'
import OrphanageDetails from './screens/OrphanageDetails'
import OrphanageData from './screens/CreateOrphanage/OrphanageData'

import SelectMapPosition from './screens/CreateOrphanage/SelectMapPosition'
import Header from './components/Header'

const {Navigator, Screen} = createStackNavigator()

const NavHeader = (title: string, hasQuitButton?: boolean) => 
    <Header title={title} hasQuitButton={hasQuitButton} />



const Routes = () => (
    <NavigationContainer>
        <Navigator screenOptions={{headerShown: false, cardStyle: {backgroundColor: "#f2f3f5"}}}>
            <Screen  name="OrphanagesMap" component={OrphanagesMap} />
            <Screen name="OrphanageDetails" component={OrphanageDetails}
             options={{headerShown: true,  header: () => NavHeader("Detalhes do Orfanato", false)}} />
            <Screen  name="OrphanageData" component={OrphanageData}  
            options={{headerShown: true,  header: () => NavHeader("Informe os dados")}} />
            <Screen  name="SelectMapPosition" component={SelectMapPosition}
             options={{headerShown: true, header: () => NavHeader("Selecione no mapa")}} />
        </Navigator>
    </NavigationContainer>
)

export default Routes;