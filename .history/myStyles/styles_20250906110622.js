//Calculator Styles
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    padding: 20,
  },
  display: {
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  displayText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    flex: 1,
    backgroundColor: '#007bff',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  operatorButton: {
    backgroundColor: '#ff9800',
  },
  clearButton: {
    backgroundColor: '#dc3545',
  },
});