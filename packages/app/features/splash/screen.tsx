'use client'

import { AccentButton } from 'app/ui/accent-button'
import { View } from 'react-native'
import { Typography } from 'app/ui/typography'
import { useRouter } from 'solito/navigation'
import { TextLink } from 'app/ui/link'

export function SplashScreen() {
  const router = useRouter()
  return (
    <View className="native:pt-[350px] web:py-0 native:pb-40 mx-4 flex h-full flex-col justify-between">
      <View className="flex gap-6">
        <Typography variant="h2" className="text-center font-bold text-white">
          {'PLFX Stack'}
        </Typography>
        <Typography variant="h4" className=" font-bold text-white">
          {'A monorepo for using nativewind with web and mobile.'}
        </Typography>
        <Typography variant="h4" className=" font-bold text-white">
          {'A work in progress that includes:'}
        </Typography>
        <Typography className="font-bold text-white">
          {'-  Shared screens imported on both web and mobile\n'}
          {'-  Storybook documentation for individual components\n'}
          {'-  Universal routing using Solito\n'}
          {'-  Universal styling using nativewind\n'}
          {'-  NextJS App Router\n'}
          {'-  React Native Webview for web-only routes\n\n'}
          {'A free resource provided by plfx.dev\n'}
          {'Consider supporting if you get value from the starter!\n'}
          <TextLink
            className="text-secondary"
            external
            href="https://plfx.dev/support"
          >
            {'Support plfx.dev\n'}
          </TextLink>
        </Typography>
      </View>

      <View className="flex flex-col items-end gap-6">
        <AccentButton title="Log in" onPress={() => router.push('/login')} />
      </View>
    </View>
  )
}
