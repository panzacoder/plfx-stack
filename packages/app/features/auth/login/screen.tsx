'use client'

import { View } from 'react-native'
import { Image } from 'app/ui/image'
import { TextInput } from 'app/ui/text-input'
import { Button } from 'app/ui/button'
import { FeatherButton } from 'app/ui/icons'
import { useRouter } from 'solito/navigation'
import { useState } from 'react'

export function LoginScreen() {
  const router = useRouter()

  async function login() {
    router.replace('/home')
  }

  const [email, onChangeEmail] = useState('')
  const [password, onChangePassword] = useState('')
  const [isShowPassword, onChangeShowPassword] = useState(false)

  return (
    <View className="my-auto flex w-full items-center justify-center ">
      <View className="mx-4 my-auto rounded-2xl bg-white px-4 pt-5 md:w-full md:max-w-md">
        <View className="flex flex-row justify-between">
          <Image
            src={require('app/assets/plfx-logo.png')}
            width={100}
            height={100}
            alt="PLFX Logo"
          />
          <View className="flex flex-col items-end"></View>
        </View>
        <View className="my-5 flex flex-col gap-2">
          <TextInput
            onChangeText={onChangeEmail}
            placeholder={'Email Address'}
            value={email}
          />
          <TextInput
            onChangeText={(password) => {
              onChangePassword(password)
            }}
            autoCorrect={false}
            secureTextEntry={!isShowPassword}
            placeholder="Password"
            value={password}
            trailingSlot={
              <FeatherButton
                onPress={() => {
                  onChangeShowPassword(!isShowPassword)
                }}
                name={isShowPassword ? 'eye' : 'eye-off'}
                size={20}
                color={'black'}
              />
            }
          />
          <View className="mt-[20] flex-row justify-end">
            <Button title="Log in" trailingIcon="arrow-right" onPress={login} />
          </View>
        </View>
      </View>
    </View>
  )
}
