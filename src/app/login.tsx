import { Pressable,View, Text, TextInput, TextInputProps } from "react-native";
import {Link} from "expo-router";
import { Input } from '../components/Inputs';

export function Button() {
  return (
    <Pressable
      onPress={() => console.log('clique')}
      className="w-full bg-Beige-texto active:bg-Navy p-2 h-fit rounded-lg items-center justify-center"
    >
      <Text className="text-Sky font-hy text-txt">Entrar</Text>
    </Pressable>
  );
}

export default function Home() {
  return (
    <View className="flex-1 items-center justify-start bg-Fundo-profundo">
      <View className="flex-1 items-center justify-center gap-6 px-4 py-6">
        <Text className="text-Navy-texto text-titulo text-center font-hy leading-[21px] tracking-[-2px]">{'Bem vindo(a) de volta\n ao Builds!'}</Text>
        <View className="w-full h-fit gap-4">
          <Text className="text-st text-Sky text-center font-hy">Entre em sua conta com suas credenciais</Text>
          <View className="w-full h-fit px-2 items-end">
            <Input label="E-mail" placeholder="" keyboardType="email-address" />
            <Input label="Senha" placeholder="" secureTextEntry />
            <Link href= "/signup">
            <Text className="text-sm text-Navy-texto text-Inter">Não tem uma conta? Clique aqui</Text>
            </Link>
          </View>
          <Button/>
        </View>
      </View>
    </View>
  );
}