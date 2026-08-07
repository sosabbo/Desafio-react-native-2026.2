import { TextInput, TextInputProps, View, Text } from "react-native";
interface InputProps extends TextInputProps {
  label?: string;
  placeholder?: string;
}

export function Input({ label, placeholder, ...rest }: InputProps) {
  return (
    <View className="w-full p-2 gap-2 mb-4">
      {label && <Text className="text-txt font-hy text-Sky">{label}</Text>}
      
      <TextInput
        placeholder={placeholder}
        selectionColor="#C8D9E6"
        placeholderTextColor="#9CA3AF"
        className="w-full text-Sky bg-Azul p-4 h-7 rounded-lg focus:border-Sky focus:ring-Sky focus:ring-1 focus:outline-none"
        {...rest} 
      />
    </View>
  );
}