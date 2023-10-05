import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
let years = [];
export default function YearMonthPicker({props}) {
  const months = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    '',
  ];
  const startYear = props.startYear;
  const endYear = props.endYear;
  const scrollViewRef = useRef(null);
  const scrollYearViewRef = useRef(null);
  const [selectedYear, setSelectedYear] = React.useState(
    props.defaultValue.split('-')[1],
  );
  const [selectedMonth, setSelectedMonth] = React.useState(
    months[Number(props.defaultValue.split('-')[0])],
  );

  useEffect(() => {
    for (let i = startYear; i <= endYear; i++) {
      years.push(i);
    }
    years = ['', ...years, ''];
  }, []);
  useEffect(() => {
    scrollToMonth(selectedMonth);
  }, [selectedMonth]);
  useEffect(() => {
    scrollToYear(selectedYear);
  }, [selectedYear]);
  const scrollToYear = year => {
    const index = years.indexOf(Number(year));
    if (index !== -1 && scrollYearViewRef.current) {
      const scrollToY = index * 50 - 50; // Adjust this value based on your layout
      scrollYearViewRef.current.scrollTo({y: scrollToY, animated: true});
    }
  };
  const scrollToMonth = month => {
    const index = months.indexOf(month);
    if (index !== -1 && scrollViewRef.current) {
      const scrollToY = index * 50 - 50; // Adjust this value based on your layout
      scrollViewRef.current.scrollTo({y: scrollToY, animated: true});
    }
  };
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.isVisible}
        onRequestClose={() => {
          props.onClose();
        }}>
        <View style={styles.centeredView}>
          <View
            style={{
              ...styles.modalView,
              backgroundColor: props?.backgroundColor ?? '#ffffff',
            }}>
            <TouchableOpacity
              onPress={() => props.onClose()}
              style={{
                backgroundColor: props?.crossButtonBackgroundColor ?? '#d3d3d3',
                borderRadius: 200,
                aspectRatio: 1,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'flex-end',
                padding: 5,
              }}>
              <Text
                style={{
                  fontWeight: '600',
                  color: props?.crossButtonTintColor ?? '#000000',
                }}>
                X
              </Text>
            </TouchableOpacity>
            <View style={{padding: 25}}>
              {!props?.showTitle ? (
                <></>
              ) : (
                <Text
                  style={{
                    fontSize: 22,
                    textAlign: 'center',
                    color: props?.titleColor ?? '#000',
                    marginBottom: 20,
                  }}>
                  {props?.title ?? 'Date:'} {selectedMonth}-{selectedYear}
                </Text>
              )}
              <View style={{flexDirection: 'row'}}>
                <ScrollView
                  ref={scrollViewRef}
                  showsVerticalScrollIndicator={false}
                  style={{
                    maxHeight: 150,
                    marginEnd: 10,
                  }}>
                  {months.map((item, index) => {
                    return (
                      <TouchableOpacity
                        disabled={item == '' ? true : false}
                        onPress={() => {
                          setSelectedMonth(item);
                        }}
                        onLayout={() => {
                          scrollToMonth(selectedMonth);
                        }}
                        style={{
                          backgroundColor:
                            item == selectedMonth
                              ? props?.selectedViewBackgroundColor ?? '#d3d3d3'
                              : props?.unselectedViewBackgroundColor ??
                                '#f9f9f9',
                          marginVertical: 5,
                          padding: 5,
                          height: 40,
                          justifyContent: 'center',
                          borderRadius: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 22,
                            textAlign: 'center',
                            color:
                              item == selectedMonth
                                ? props?.selectedViewTextColor ?? '#000'
                                : props?.unselectedViewTextColor ?? '#949494',
                          }}>
                          {item}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
                <ScrollView
                  ref={scrollYearViewRef}
                  showsVerticalScrollIndicator={false}
                  style={{
                    maxHeight: 150,
                  }}>
                  {years.map((item, index) => {
                    return (
                      <TouchableOpacity
                        disabled={item == '' ? true : false}
                        onPress={() => {
                          setSelectedYear(item);
                        }}
                        onLayout={() => {
                          scrollToYear(selectedYear);
                        }}
                        style={{
                          backgroundColor:
                            item == selectedYear
                              ? props?.selectedViewBackgroundColor ?? '#d3d3d3'
                              : props?.unselectedViewBackgroundColor ??
                                '#f9f9f9',
                          marginVertical: 5,
                          padding: 5,
                          height: 40,
                          justifyContent: 'center',
                          borderRadius: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 22,
                            textAlign: 'center',
                            color:
                              item == selectedYear
                                ? props?.selectedViewTextColor ?? '#000'
                                : props?.unselectedViewTextColor ?? '#949494',
                          }}>
                          {item}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  width: '80%',
                  marginTop: 20,
                }}>
                <TouchableOpacity
                  style={{
                    ...styles.button,
                    backgroundColor:
                      props?.resetButtonBackgroundColor ?? '#d3d3d3',
                  }}
                  onPress={() => {
                    setSelectedYear(props.defaultValue.split('-')[1]);
                    setSelectedMonth(
                      months[Number(props.defaultValue.split('-')[0])],
                    );
                  }}>
                  <Text
                    style={{
                      ...styles.textStyle,
                      color: props?.resetButtonTextColor ?? 'white',
                    }}>
                    {props?.resetButtonText ?? 'Reset'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...styles.button,
                    backgroundColor:
                      props?.selectButtonBackgroundColor ?? '#2196F3',
                  }}
                  onPress={() =>
                    props.onSelect(
                      `${
                        months.indexOf(selectedMonth) < 10
                          ? `0${months.indexOf(selectedMonth).toString()}`
                          : months.indexOf(selectedMonth).toString()
                      }-${selectedYear}`,
                    )
                  }>
                  <Text
                    style={{
                      ...styles.textStyle,
                      color: props?.selectButtonTextColor ?? 'white',
                    }}>
                    {props?.selectButtonText ?? 'Select'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    width: 80,
    elevation: 2,
  },
  resetButton: {
    backgroundColor: '#d3d3d3',
  },
  selectButton: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
