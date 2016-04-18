# mikeswaterapi

Status
======
Status api allows for a get all or a post function, currently built for testing.

####Get all statuses
* Address:  `https://mikeswaterapi.herokuapp.com/status`
* type:     GET
* returns:  An array of status objects previously posted to the database

####Post a new status to the database

Object requires:
```javascript
{
  hardware_id: Number,
  temp: Number,
  ambient_light: Number,
  timestamp: Date, //No longer required, will default to server time
  shutoff_valve: Boolean,
  board_led: Boolean
}
```
`POST /status HTTP/1.1`
* Address:  `https://mikeswaterapi.herokuapp.com/status`
* Host: `https://mikeswaterapi.herokuapp.com`
* Content-type: `application/json`
* Content-type: Requires the character count of the JSON object
* returns:  returns the newly created status along with the databases Unique object id
