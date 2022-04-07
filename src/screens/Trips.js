import { ScrollView, View, Text } from "react-native";
import Chip from "../components/Chip";

import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";
import PetCard from "../components/PetCard";
import StaticChip from "../components/StaticChip";

const Trips = () => {
  return (
    <ScrollView>
      <View>
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
    </ScrollView>
  );
}

export default Trips;