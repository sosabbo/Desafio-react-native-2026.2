import { View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Redirect } from 'expo-router';

export default function Index() {
  // Redireciona automaticamente para a rota /login
  return <Redirect href="/login" />;
}
/*export default function Home() {
  return (
    <View className="flex-1 items-center justify-start h-full w-full bg-Navy ">
      <LinearGradient
      colors={['#597A8E', '#2F4156']}
      className="flex-1 justify-center items-center bg-gradient-to-b from-Beige-texto to-Azul">
      <View className="flex-1 items-center justify-center gap-6 px-4 py-4">
        <Text className="text-Azalea text-principal font-hy">Início</Text>
        <Text className="text-Sky text-texto-justify font-inter">Interaja com a comunidade de Genshin Impact para construir sua build perfeita.</Text>
        <View>
          <Text className="text-Azalea text-titulo font-hy">Páginas</Text>
        </View>
      </View> 
      </LinearGradient>
    </View>
  );
}*/