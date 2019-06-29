import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Switch, Button, Alert, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';
import * as Animatable from 'react-native-animatable';
import { Permissions, Notifications, Calendar } from 'expo';



class Reservation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            guests: '1',
            smoking: false,
            date: ''
        }
    }

    static navigationOptions = {
        title: 'Reserve Table',
    };

    handleReservation() {
        console.log(JSON.stringify(this.state));
        Alert.alert(
            'Your Reservation OK?',
            'Number of guests ' + this.state.guests + '\nSmoking? ' + this.state.smoking + '\nDate and Time: ' +this.state.date,
            [
            {
                text: 'Cancel',
                onPress: () => { console.log('Reservation Cancelled'); this.resetForm(); },
                style: ' cancel'
            },
            {
                text: 'OK',
                onPress: () => { 
                    this.presentLocalNotification(this.state.date); 
                    this.addReservationToCalendar(this.state.date); 
                    console.log('Reservation Confirmed'); 
                    this.resetForm(); 
                }
            }
            ],
            { cancelable: false }
        );
    }

    resetForm() {
        this.setState({
            guests: '1',
            smoking: false,
            date: ''
        });
    }

    async obtainNotificationPermission() {
        let permission = await Permissions.getAsync(Permissions.USER_FACING_NOTIFICATIONS);
        if (permission.status !== 'granted') {
            permission = await Permissions.askAsync(Permissions.USER_FACING_NOTIFICATIONS);
            if (permission.status !== 'granted') {
                Alert.alert('Permission not granted to show notifications');
            }
        }
        return permission;
    }

    async obtainCalendarPermission() {
        let permission = await Permissions.getAsync(Permissions.CALENDAR);
        if (permission.status !== 'granted') {
            permission = await Permissions.askAsync(Permissions.CALENDAR);
            if (permission.status !== 'granted') {
                Alert.alert('PermissionS not granted to use the calendar');
            }
        }
        return permission;
    }


    async presentLocalNotification(date) {
        await this.obtainNotificationPermission();
        Notifications.presentLocalNotificationAsync({
            title: 'Your Reservation',
            body: 'Reservation for ' + date + ' requested',
            ios: {
                sound: true
            },
            android: {
                sound: true,
                vibrate: true,
                color: '#512DA8'
            }
        });
    }

    async addReservationToCalendar(date) {
        await this.obtainCalendarPermission();
        const eventId =     
        Calendar.createEventAsync(
            
                Calendar.DEFAULT,
            {
                title: 'Con Fusion Table Reservation',
                startDate: new Date(Date.parse(date)),
                endDate: new Date(Date.parse(date) + 7200000),
                timeZone: 'Asia/Hong_Kong',
                location: '121, Clear Water Bay Road, Clear Water Bay, Kowloon, Hong Kong'
            }
        );
        console.log('Calendar event Id: ', eventId);
    }

    render() {
        return (
            <ScrollView>
                <Animatable.View animation="zoomIn" duration={2000}>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>Number of Guests</Text>
                        <TextInput
                            style={{borderColor: 'gray', borderWidth: 1, width: 150, textAlign: 'center'}}
                            value={this.state.guests}
                            keyboardType={'numeric'}
                            placeholder="1-10"
                            onChangeText = {(guests) => this.setState({guests})}
                        />
                    </View>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>Non-Smoking/Smoking?</Text>
                        <Switch
                            style={styles.formItem}
                            value={this.state.smoking}
                            trackColor={{ true: '#512DA8', false: null }}
                            onValueChange={(value) =>
                                this.setState({ smoking: value })}>
                        </Switch>
                    </View>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>Date and Time</Text>
                        <DatePicker
                            style={{ flex: 2, marginRight: 20 }}
                            date={this.state.date}
                            format=''
                            mode="datetime"
                            placeholder="select date and Time"
                            minDate="2017-01-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                // ... You can check the source to find the other keys. 
                            }}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />
                    </View>
                    <View style={styles.formRow}>
                        <Button
                            onPress={() => this.handleReservation()}
                            title="Reserve"
                            color="#512DA8"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </View>
                </Animatable.View>
            </ScrollView>
        );
    }

};

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    formBox: {
        borderColor: 'gray',
        borderWidth: 1,        
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#512DA8',
        textAlign: 'center',
        color: 'white',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
});

export default Reservation;