import * as Notifications from 'expo-notifications';
import {useEffect} from "react";
import axios from "axios";

const scheduleNotifications = async (notificationTimes, deviceToken) => {
    for (const time of notificationTimes) {
        const notificationTime = new Date(time);
        const trigger = new Date();
        trigger.setHours(notificationTime.getHours());
        trigger.setMinutes(notificationTime.getMinutes());
        trigger.setSeconds(0);

        if (trigger < new Date()) {
            trigger.setDate(trigger.getDate() + 1);
        }

        const content = {
            title: 'Notification Title',
            body: 'Notification Body',
        };

        await Notifications.scheduleNotificationAsync({
            content,
            trigger,
        });
    }
};

const NotificationTimesAndSchedule = async () => {
    try {
        const response = await axios.get('http://192.168.43.246:8080/public/taches/notif');
        const data = response.data;
        const { notificationTimes, deviceToken } = data;
        await scheduleNotifications(notificationTimes, deviceToken);
    } catch (error) {
        console.error('Error fetching notification times:', error);
    }
};

useEffect(() => {
    NotificationTimesAndSchedule();
}, []);
