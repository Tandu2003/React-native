import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  svgBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  innerContainer: {
    width: "90%",
    marginHorizontal: 5,
    height: "95%",
    borderRadius: 15,
    backgroundColor: "#23235B",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "700",
    lineHeight: 29.3,
    color: "#fff",
  },
  inputContainer: {
    flex: 1.5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  mainOutput: {
    width: screenWidth * 0.9 - 66,
    height: 55,
    backgroundColor: "#151537",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textOuput: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 21.09,
    color: "#fff",
    paddingHorizontal: 13,
  },
  copyButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
  },
  optionContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 13,
  },
  optionText: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 21.09,
    color: "#FFFFFF",
  },
  optionInput: {
    width: 118,
    height: 33,
    textAlign: "right",
    fontWeight: "bold",
    paddingRight: 10,
    backgroundColor: "#fff",
  },
  optionCheckbox: {
    width: 25,
    height: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },
  buttonContainer: {
    width: "100%",
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  generateButton: {
    width: 269,
    height: 55,
    backgroundColor: "#3B3B98",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 21.09,
    color: "#fff",
  },
});

export default styles;
