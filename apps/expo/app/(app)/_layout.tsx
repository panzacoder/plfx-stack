import { Tabs } from 'expo-router/tabs'

import { SplashBackground } from 'app/ui/splash-background'
import MyTabBar from 'app/ui/tab-bar'

export default function Root() {
  return (
    <SplashBackground>
      <Tabs
        tabBar={MyTabBar}
        screenOptions={{ headerShown: false, tabBarShowLabel: false }}
        sceneContainerStyle={{ backgroundColor: 'transparent' }}
      >
        <Tabs.Screen name="home" />
        <Tabs.Screen name="settings" />
      </Tabs>
    </SplashBackground>
  )
}
