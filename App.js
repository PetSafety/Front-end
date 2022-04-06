import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./src/components/CustomButton";
import CustomText from "./src/components/CustomText";
import PetCard from "./src/components/PetCard";
import SelectableChips from "react-native-chip/SelectableChips";
import RemovableChips from "react-native-chip/RemovableChips";
import Chip from "./src/components/Chip";
import StaticChip from "./src/components/StaticChip";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Buttons</Text>
        <CustomButton title="Default" />
        <CustomButton title="Disabled" disabled />
        <CustomButton title="GhostWarning" type="ghostWarning" />
        <CustomButton title="Ghost" type="ghost" />
      </View>
      <View>
        <Text>PetCard</Text>
        <PetCard />
      </View>
      <View>
        <Text>Tipografia</Text>
        <CustomText type="headline1" content="headline1" />
        <CustomText type="headline2" content="headline2" />
        <CustomText type="subtitle1" content="subtitle1" />
        <CustomText type="subtitle2" content="subtitle2" />
        <CustomText type="body" content="body" />
        <CustomText type="caption" content="caption" />
      </View>
      <View>
        <Text>Chip statico</Text>
        <StaticChip label="Cachorro" />
      </View>
      <View>
        <Text>Chip</Text>
        <Chip
          initialChips={["Ordernar mais recentes", "Ordenar mais antigas"]}
          onChangeChips={(chips) => console.log(chips)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
