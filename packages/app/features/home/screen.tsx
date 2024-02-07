'use client'

import { View } from 'react-native'
import { SplashBackground } from 'app/ui/splash-background'
import { Typography } from 'app/ui/typography'

export function HomeScreen() {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Typography variant="h1" className="text-background">
        {'Neat digs, huh?'}
      </Typography>
    </View>
  )
}
