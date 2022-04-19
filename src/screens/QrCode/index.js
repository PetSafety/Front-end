import { ScrollView, View, Text, SafeAreaView } from "react-native";
import styles from "./styles";
import CustomText from "../../components/CustomText";
import CustomButton from "../../components/CustomButton";

const QrCode = () => {
  return (
    <View style={styles.container}>
      <View>
        <CustomText type="headline1" content="Instruções" />

        <CustomText
          type="body"
          content="Leve seu pet para nosso ponto de check-in, leia o QR Code de sua caixa e receba o relatório após a viagem."
        />
      </View>

      <View>
        <CustomText content="QRCode" />
      </View>
      <CustomButton type="ghost" title="Inserir código manualmente" />
    </View>
  );
};

export default QrCode;
