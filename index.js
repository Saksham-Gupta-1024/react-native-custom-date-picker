import { View, Text } from 'react-native';
import React from 'react';
import YearMonthDayPicker from './YearMonthDayPicker';
import YearMonthPicker from './YearMonthPicker';
import YearPicker from './YearPicker';

export default function DatePicker(props) {
	function renderPicker(mode) {
		switch (mode) {
			case 'day':
				return <YearMonthDayPicker props={props} />;
			case 'month':
				return <YearMonthPicker props={props} />;
			case 'year':
				return <YearPicker props={props} />;
			default:
				return <YearMonthDayPicker props={props} />;
		}
	}
	return renderPicker(props.mode);
}
