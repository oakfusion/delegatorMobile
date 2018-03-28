import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';

const Container = styled.View`
  width: 100%;
`;

const errorColor = '#ef5350';
const regularColor = '#fff';

export default class DatePickerField extends Component {
	constructor (props) {
		super(props);
		this.state = {
			color: regularColor,
			border: 0.25
		}
	}
  
	makeWrong () {
		this.setState({
			color: errorColor,
			border: 2
		});
	}
	
	makeRight () {
		this.setState({
			color: regularColor,
			border: 0.25
		});
	}
	
	componentWillReceiveProps (nextProps) {
		if (nextProps.date) {
			this.makeRight()
		}
	}
	
	validate () {
		if (this.props.required) {
			if (this.props.date) {
				if (!!this.props.min && this.props.date < this.props.min) {
					this.makeWrong();
					return false
				}

                this.makeRight();
                return true;
            } else {
                this.makeWrong();
                return false
            }
		}
	}

	render () {
		return (
			<Container>
				<DatePicker
					style={{width: '100%', paddingTop: 0}}
					date={this.props.date}
					placeholder={this.props.placeholder}
					mode={this.props.mode}
					minDate={this.props.min || undefined}
					maxDate={this.props.max || undefined}
					disabled={this.props.disabled}
					androidMode="spinner"
					is24Hour={true}
					format={this.props.mode === "date" ? "YYYY-MM-DD" : "YYYY-MM-DD HH:mm"}
					confirmBtnText="Confirm"
					iconComponent={<Icon name="perm-contact-calendar" size={20} color={this.state.color}/>}
					cancelBtnText="Cancel"
					customStyles={{
						dateIcon: {
							position: 'absolute',
							left: 0,
							top: 4,
							marginLeft: 0
						},
						dateInput: {
							marginRight: 10,
							borderWidth: 0,
							borderBottomWidth: this.state.border,
							borderBottomColor: this.state.color
						},
						placeholderText: {
							color: this.state.color
						},
						dateText: {
							color: regularColor,
							fontSize: 16
						}
					}}
					onDateChange={this.props.handleChange}
				/>
				{!!this.props.min && this.props.date && this.props.date < this.props.min 
					? <Text style={{color: errorColor, fontSize: 12, paddingTop: 5}}>Nieprawidłowa kolejność dat</Text> 
					: null}
			</Container>
		)
	}
} 