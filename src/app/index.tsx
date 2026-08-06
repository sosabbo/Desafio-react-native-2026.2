import { View, Text } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center gap-6 px-4 py-4 bg-Fundo">
      <Text className="text-Azalea text-principal font-hy">Início</Text>
      <Text className="text-Sky text-texto-justify font-inter">Interaja com a comunidade de Genshin Impact para construir sua build perfeita.</Text>
      <Text className="text-Azalea text-titulo font-hy">Páginas</Text>
    </View>
  );
}