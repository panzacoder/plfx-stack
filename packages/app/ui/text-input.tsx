import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View
} from 'react-native'
import { cn } from './utils'

export type TextInputProps = {
  trailingSlot?: React.ReactNode
} & RNTextInputProps

export const TextInput = ({
  className,
  trailingSlot,
  ...rest
}: TextInputProps) => {
  return (
    <View
      className={cn(
        'flex w-full flex-row justify-between  rounded-lg border-[1px] border-gray-400 px-4 py-3',
        className
      )}
    >
      <RNTextInput className="flex-1" {...rest} />
      {trailingSlot}
    </View>
  )
}
