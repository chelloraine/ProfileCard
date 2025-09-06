// Requirements:
  // Use useState to manage the display and other states.
  // Use useEffect if needed (e.g., to handle display updates or debugging).
  // You are NOT allowed to use eval() or any external math libraries.
  // The calculator should support at least the following operations:
    // Addition (+)
    // Subtraction (-)
    // Multiplication (*)
    // Division (/)
    // Decimal input (.)
    // Clear (C)
    // Equal (=)

// Design
  // You may use the provided design or create your own style.
  // The main focus is functionality, not aesthetics — but creativity is encouraged.
// Expected Behavior
  // The display should update as buttons are pressed (e.g., 12+7*3).
  // When = is pressed, it should compute the result correctly and show it on the display.
  // When C is pressed, it should reset the display to 0.
  // Division by zero should return "Error".



// // import React from 'react';
// // import { Text, TouchableOpacity, View } from 'react-native';
// // import { SafeAreaView } from 'react-native-safe-area-context';

// // import CalculatorStyles from './styles/CalculatorStyles';

// // const App = () => {
// //   const handlePress = (value) => {
// //     console.log("Pressed:", value);
// //   };


// //   const renderButton = (label, style = {}) => (
// //     <TouchableOpacity
// //       style={[CalculatorStyles.button, style]}
// //       onPress={() => handlePress(label)}
// //     >
// //       <Text style={CalculatorStyles.buttonText}>{label}</Text>
// //     </TouchableOpacity>
// //   );

// //   return (
// //     <SafeAreaView style={CalculatorStyles.container}>
// //       {/* Display */}
// //       <View style={CalculatorStyles.display}>
// //         <Text style={CalculatorStyles.displayText}>0</Text>
// //       </View>

// //       {/* Buttons Grid */}
// //       <View style={CalculatorStyles.row}>
// //         {renderButton("7")}
// //         {renderButton("8")}
// //         {renderButton("9")}
// //         {renderButton("/", CalculatorStyles.operatorButton)}
// //       </View>
// //       <View style={CalculatorStyles.row}>
// //         {renderButton("4")}
// //         {renderButton("5")}
// //         {renderButton("6")}
// //         {renderButton("*", CalculatorStyles.operatorButton)}
// //       </View>
// //       <View style={CalculatorStyles.row}>
// //         {renderButton("1")}
//         {renderButton("2")}
// //         {renderButton("3")}
// //         {renderButton("-", CalculatorStyles.operatorButton)}
// //       </View>
// //       <View style={CalculatorStyles.row}>
// //         {renderButton("0")}
// //         {renderButton(".")}
// //         {renderButton("=", CalculatorStyles.operatorButton)}
// //         {renderButton("+", CalculatorStyles.operatorButton)}
// //       </View>
// //       <View style={CalculatorStyles.row}>
// //         {renderButton("C", CalculatorStyles.clearButton)}
// //       </View>
// //     </SafeAreaView>
// //   );
// // };

// // export default App;
