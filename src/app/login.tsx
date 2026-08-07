import { Pressable,View, Text, TextInput, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
  placeholder: string;
}

export function Input({ label, placeholder, ...rest }: InputProps) {
  return (
    <View className="w-full pd-2 gap-2 mb-4">
      {label && <Text className="text-txt font-hy text-Sky">{label}</Text>}
      
      <TextInput
        placeholder={placeholder}
        selectionColor={'#C8D9E6'}
        placeholderTextColor="#9CA3AF"
        className="w-full text-Sky bg-Azul p-4 h-7 rounded-lg focus:border-Sky focus:ring-Sky focus:ring-1 focus:outline-none"
        {...rest} 
      />
    </View>
  );
}

export default function Home() {
  return (
    <View className="flex-1 items-center justify-start bg-Fundo-profundo">
      <View className="flex-1 items-center justify-center gap-6 px-4 py-6">
        <Text className="text-Navy-texto text-titulo text-center font-hy leading-[21px] tracking-[-2px]">{'Bem vindo(a) de volta\n ao Builds!'}</Text>
        <View className="w-full h-fit gap-4">
          <Text className="text-st text-Sky text-center font-hy">Entre em sua conta com suas credenciais</Text>
          <View>
            <Input label="E-mail" placeholder="" keyboardType="email-address" />
            <Input label="Senha" placeholder="" secureTextEntry />
          </View>
        </View>
      </View>
    </View>
  );
}