
# react-native-custom-date-picker

The React Native Date Picker Library is a versatile and customizable date picker component for React Native applications. This library is designed to provide cross-platform support, enabling it to run seamlessly on both iOS and Android platforms. With various customization options, you can tailor the date picker to suit your application's design and functionality.

## Screenshots
Works same way on both ios and android platform.
| Day     | Month    | Year    | Labels |
| :------- |:------- | :------- | :--------- |
|![App Screenshot](https://drive.google.com/uc?id=139cr8otVKRIrGW4ffdNlc1NXkVNsppTu)|![App Screenshot](https://drive.google.com/uc?id=1_d4SiX0NRDxsYrtXYvx7QsFbiFZGJ9aS)|![App Screenshot](https://drive.google.com/uc?id=10gI_Welrv4bskf6CaIT2yOAHFPs_qLIk)|![App Screenshot](https://drive.google.com/uc?id=1AqDIgDSTVKZp8LsUCtDqe8K6M7y53His)|


## Installation

To install this package with npm use following command inside project root directory

- If you are using npm use this

    ```bash
    npm i react-native-custom-date-picker
    ```
- If you are using yarn use this

    ```bash
    yarn add react-native-custom-date-picker
    ```
    
## Features

- Cross-Platform Support

    The React Native Date Picker Library is compatible with both iOS and Android, ensuring a consistent user experience across different platforms.

- Fully Customizable

    Customize the date picker to match your application's visual style and requirements. You can modify various aspects, including:

    - Background color
    - Title
    - Formate etc...

- Three Main Date Formats

    This library offers three primary date formats based on the specified type prop:

    - Day (mode="day")

        Displays the date in the dd-mm-yyyy format.
    - Month (mode="month")

        Displays the date in the mm-yyyy format.
    - Year (mode="year")

        Displays the date in the yyyy format.

## Usage/Examples

```javascript
import React, { useState } from "react";
import { Button, View } from "react-native";
import DatePicker from "react-native-custom-date-picker";

const Example = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleSelect = (date) => {
    console.log("Selected Date: ", date);
    hideDatePicker();
  };

  const handleReset = (date) => {
    console.log("Reset Date: ", date);
    hideDatePicker();
  };

  return (
    <View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DatePicker
        isVisible={isDatePickerVisible}
        mode="year"
        startYear={2000}
        endYear={2050}
        defaultValue={2023}
        showTitle={true}
        onSelect={handleSelect}
        onReset={handleReset}
        onClose={hideDatePicker}
      />
    </View>
  );
};

export default Example;
```


## Props


| Prop       | Type     | Default    |Description              |
| :--------- | :------- | :--------- |:------------------------|
| `isVisible`  | `boolean` | **Required**   | Determine whether to show date-picker or not. |
| `mode`  | `string` | `"day"`    | Specifies the date format type ("day", "month", or "year"). |
| `startYear`  | `number` | **Required**    | Specifies the start year for picker eg: 2000. |
| `endYear`  | `number` | **Required**     | Specifies the end year for picker eg: 2050. |
| `backgroundColor`  | `string` | `"#FFFFFF"`    | Specifies the model background color. |
| `showTitle`  | `boolean` | **Required**    | Determine whether to show title or not.|
| `title`  | `string` | `"Selected Date: "`    | Specifies the title text. |
| `titleColor`  | `string` | `"#000000"`    | Specifies the title text color. |
| `defaultValue`  | `string` |  **Required**   | Specifies the default date eg: day: "15-09-2000", month: "09-2000", year: "2000"|
| `selectedViewBackgroundColor`  | `string` | `"#d3d3d3"`    | Specifies the selected view color.|
| `selectedViewTextColor`  | `string` | `"#000000"`    | Specifies the selected view text color. |
| `unselectedViewBackgroundColor`  | `string` | `"#f9f9f9"`    | Specifies the unselected view color. |
| `unselectedViewTextColor`  | `string` | `"#949494"`    | Specifies the unselected view text color. |
| `selectButtonText`  | `string` | `"Select"`    | Specifies the reset button text label. |
| `selectButtonBackgroundColor`  | `string` | `"#2196F3"`    | Specifies the select button color. |
| `selectButtonTextColor`  | `string` | `"#FFFFFF"`    | Specifies the select button text color. |
| `resetButtonText`  | `string` | `"Reset"`    | Specifies the reset button text label. |
| `resetButtonBackgroundColor`  | `string` | `"#d3d3d3"`    | Specifies the reset button color. |
| `resetButtonTextColor`  | `string` | `"#FFFFFF"`    | Specifies the reset button text color. |
| `crossButtonTintColor`  | `string` | `"#000000"`    | Specifies the cross button tint color. |
| `crossButtonBackgroundColor`  | `string` | `"#d3d3d3"`    | Specifies the cross button background color. |

## Methods


| Name        | Return type    |Description              |
| :--------- | :--------- |:------------------------|
| `onReset`  | `string`    | Sets default date. |
| `onSelect`  | `string`   | Returns selected date eg: day:"15-09-2000", month:"09-2000", year:"2000". |
| `onClose`  | `void`     | Closes date picker model. |



## Author

- [@Saksham Gupta](https://github.com/Saksham-Gupta-1024)
## Support

- If you like this package, consider giving it a [github](https://github.com/Saksham-Gupta-1024) → star ⭐ Also, PR's are welcome!

- For support, [email](guptasaksham098@gmail.com) or join our Slack channel.
