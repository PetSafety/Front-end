import { ScrollView, View, Text, SafeAreaView } from "react-native";
import Chip from "../../components/Chip";
import styles from "./styles";
import CustomText from "../../components/CustomText";
import PetCard from "../../components/PetCard";
import { useEffect } from "react";

const infoDummy = {
  dogName: "Maju",
  date: new Date(),
  destiny: "Brasilia - Fortaleza",
  status: "Inicio pendente",
  type: "Cachorro",
};

const Trips = () => {
  useEffect(() => {
    console.log(refChip);
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <CustomText type="headline2" content={`Boa tarde, ${"Youssef"}`} />
        <CustomText content="Vamos iniciar um transporte seguro?" />
      </View>
      <View style={styles.headerContainer}>
        <CustomText type="headline1" content="Histórico de viagens" />
        <Chip
          initialChips={["Mais recentes", "Mais antigas"]}
          onChangeChips={(chips) => {
            console.log(refChip);
          }}
        />
      </View>
      <ScrollView>
        <PetCard
          info={infoDummy}
          cancelHandle={() => {
            console.log(refChip);
          }}
        />
        <PetCard info={infoDummy} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Trips;
