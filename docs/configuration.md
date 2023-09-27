# Configuration

Configuration is written in basic javascript.

[A template is provided](src/StartHere.template.js) and there is also [a fuller example available](src/ExampleConfig.js).

The Schema for configuration [also can be found in the source directory](src/schema).

## Tribe

The top level object that is used by the bot to generate messages.

A Tribe has one Trio, and multiple squads.

| field name      | type              | definition                                                                                   |
|-----------------|-------------------|----------------------------------------------------------------------------------------------|
| `name`          | `string`          | the tribe name, will be prefixed to the squad name in forms and messages                     |
| `id`            | `string`          | a unique value, used internally in the system, cannot be the same as any other id field      |
| `trio`          | `members object`  | contains the [contact details of anyone](#members) who should be sent the full tribe summary |
| `squads`        | `array of squads` | a list of all the [squad configuration objects](#squad)                                      |
| `destinationId` | `string`          | the id of the spreadsheet where the form data should be stored                               |

## Squad

| field name | type             | definition                                                                                         |
|------------|------------------|----------------------------------------------------------------------------------------------------|
| `name`     | `string`         | the tribe name, will be used in forms and messages                                                 |
| `id`       | `string`         | a unique value, used internally in the system, cannot be the same as any other id field            |
| `channel`  | `string`         | a webhook link to the team's gchat channel for sending updates and reminders                       |
| `members`  | `members object` | contains the [contact details of anyone](#members) in the squad who should be sent the morale form |
| `leads`    | `members object` | contains the [contact details of anyone](#members) who should receive a copy of the morale summary |

> N.B. If someone exists in both `members` and `leads` then they must be entered separately in both

## Members

An object with each field keyed to a member with the following object:

| field name      | type     | definition                                                                                           |
|-----------------|----------|------------------------------------------------------------------------------------------------------|
| `email`         | `string` | the persons email                                                                                    |
| `preferredName` | `string` | the persons preferred identified (i.e. shortened names, nicknames or names not stored in the system) |