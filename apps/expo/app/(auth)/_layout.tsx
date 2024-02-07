import { Slot } from 'expo-router'
import { SplashBackground } from 'app/ui/splash-background'

export default function AuthLayout() {
  return (
    <SplashBackground>
      <Slot />
    </SplashBackground>
  )
}
