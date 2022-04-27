import { ScrollView, View, Text, SafeAreaView, Button } from "react-native";
import styles from "./styles";
import CustomText from "../../components/CustomText";
import CustomButton from "../../components/CustomButton";
import { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";

const QrCode = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
  };

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
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
      </View>
      <CustomButton
        type="ghost"
        title="Escaniar novamente"
        onPress={() => setScanned(false)}
      />
    </View>
  );
};

export default QrCode;
