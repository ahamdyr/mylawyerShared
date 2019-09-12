import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Store from '../Redux/Store'
export const registerExpoPushToken = async () => {
  const PUSH_ENDPOINT =
    "https://hlogicodesk.pythonanywhere.com/api/beta/sandbox/messaging/";

  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== "granted") {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== "granted") {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();

  // notification handler
  this._notificationSubscription = Notifications.addListener(notification => {
    //console.log('notification ', JSON.stringify(notification))
  });

  // POST the token to your backend server from where you can retrieve it to send push notifications.
  var requestBody = `fcmToken=${token}`;
  var userToken = Store.getState().accessToken
  
  return new Promise((resolve, reject) => {
    fetch(PUSH_ENDPOINT, {
      method: "POST",
      headers: {
        "Authorization": `Firebase ${userToken}`,
        "Accept": "application/json",
        "Content-Type": `application/x-www-form-urlencoded`
      },
      body: requestBody
    })
      .then(res => {
        if (res.data.data) {
          //console.log('res.data.data  ',res.data)
          resolve(res.data);
        } else {
          //console.log('res.data.error  ',res.data)
          reject(res.data.error.message);
        }
      })
      .catch(err => {
        //console.log('err  ',err)
        reject(err);
      });
  });
};
