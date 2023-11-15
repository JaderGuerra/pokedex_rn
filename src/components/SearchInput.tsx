import {
  Platform,
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDebouncedValue } from "../hooks/useDebouncedValue";
import { useEffect, useState } from "react";

interface Props {
  style?: StyleProp<ViewStyle>;
  onDebounce: (value: string) => void;
}
export const SearchInput = ({ style,onDebounce }: Props) => {
  const [textValue, setTextValue] = useState("");
  const debounce = useDebouncedValue(textValue, 1000);

  useEffect(() => {
    onDebounce(debounce);
  }, [debounce]);

  return (
    <View style={{ ...styles.container, ...(style as any) }}>
      <View style={styles.textBackground}>
        <TextInput
          placeholder="Buscarpokemon"
          style={{ ...styles.textInput }}
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />
        <Ionicons
          style={{ top: Platform.OS === "ios" ? 0 : 4 }}
          name="search-outline"
          color="grey"
          size={30}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textBackground: {
    backgroundColor: "#F3F1F3",
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
});
