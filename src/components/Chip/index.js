import React from "react";
import SelectableChips from "react-native-chip/SelectableChips";

const Chip = ({ initialChips, onChangeChips }) => {
  return (
    <SelectableChips
      initialChips={initialChips}
      onChangeChips={onChangeChips}
      alertRequired={false}
      valueStyle={{ fontSize: 14 }}
    />
  );
};

export default Chip;
