# A Google App Scripts Bot for supporting team morale and happiness

[I JUST WANT TO GET GOING](#low-tech-quick-start)

## Glossary

I have attempted to use Spotify style language where possible:

- Squad - a small autonomous team of member practitioners working on a shared problem (e.g. a two pizza team)
- Squad Lead - a senior manager within the squad responsible for looking after the squad members
- Tribe - a group of teams working in a similar field that interact with each other regularly
- Trio - the senior management responsible for looking after the whole Tribe

## Why Would I Use This?

Anyone managing a squad is aware that there is much that happens that they don't know about. Private feedback conversations, low grade grudges and pleasant moments all come and go behind closed doors.

Each squad member has their own personal life, communities that they participate in at work, and relationships with the squad management themselves.

Everyone's reality is complex, and we never see it all.

When things go wrong, when someone is upset, or needs help, how do we know to help them?

This app bot is a set of scripts designed to help squads to share, monitor and support their collective health.

The main function is to create Google Forms based off of a set template:

1. to gather **anonymous** feedback on how squad members are feeling
2. distribute that form to your squad members
3. send summaries to the squad leads and trio for them to review and act on.

If you are managing multiple teams, as part of a wider tribe, then the bot is able to generate forms for each squad individually, and send summaries for both each squad and for the whole collective at the right level.

## Do I Need To Be A L33T Hacker To Use This?

You don't have to know how to code to use this bot. All that is required is a Google Workspaces account, the ability to copy and paste some files, and altering
_one file_ with contact information in javascript (following a template provided).

This bot has been written to be simple to use. Instructions are provided below.

## Getting Started

### Low Tech Quick Start

1. In [Google App Scripts](#google-app-scripts-access), create a new project

   <img alt="Create A New Project" src="docs/new_project.png" width="540"/>

2. Go to the editor

   <img alt="The Editor Menu" src="docs/editor.png" width="540"/>

3. Copy all the files from [the bot source folder](src/bot) into the app scripts project by clicking the plus symbol next to Files (this part is currently tedious as you have to move each file separately)

   <img alt="Adding files to your project" src="docs/new_file.png" width="540"/>

4. Copy the file [StartHere.template.js](src/StartHere.template.js) into the app scripts project, changing the placeholder values to be [your tribe's real values](#configuration)
5. Go to the triggers menu on the left of the page and add click a new trigger

   <img alt="The Triggers Menu" src="docs/triggers.png" width="540"/>

6. Select the following:
    - Function to run: `surveyTribeMorale`
    - Deployment should run: `Head`
    - Event source: `Time-driven`
    - Type of time based trigger: `Week timer`
    - Day of week: `Monday`
    - Time of day: `8am to 9am`
7. Add another trigger, this time selecting the following:
    - Function to run: `closeTribeMoraleSurveys`
    - Deployment should run: `Head`
    - Event source: `Time-driven`
    - Type of time based trigger: `Week timer`
    - Day of week: `Thursday`
    - Time of day: `5pm to 6pm`

You now have two triggers. One will create and distribute the forms to your squads every Monday morning.

The other will close the forms and send a summary to the Trio and Squad Leads every Thursday evening.

> N.B. Google should prompt you to approve permissions to create forms, and to send emails and gchat messages (if webhooks provided). If it does not, you may need to run the function `surveyTribeMorale` manually for the first time for this to happen.

To see if the trigger has run successfully, you can look under `Executions` in the side menu to see the status of every run.

### Prerequisites

#### Google App Scripts Access

![The Google App Scripts homepage](docs/app_scrips_homepage.png)

This bot runs on the Google Workspace utility [Google App Scripts](https://www.google.com/script), which is part of their enterprise offering. To check if you can use app scripts:

1. Go to the [App Scripts Dashboard](https://script.google.com/u/1/home/start)
2. Login to your Google Workspaces user, and approve permissions

You should now be able to view the Apps Scripts Dashboard

![The Google App Scripts Project Dashboard](docs/app_scripts_dashboard.png)

### Configuration

Configuration is written in basic javascript [with a basic template provided](src/StartHere.template.js), [a fuller example is also provided](src/ExampleConfig.js). The Schema for configuration [also can be found in the source directory](src/schema).

The configuration is broken up into three major blocks: `squads`, `trio` and `tribe`. A Tribe has one Trio, and multiple squads.

#### Tribe

|field name | type | definition |
| `name` | `string` | the tribe name, will be prefixed to the squad name in forms and messages |
| `id` | `string` | a unique value, used internally in the system, cannot be the same as any other id field |
| `trio` | `members object` | contains the [contact details of anyone](#members) who should be sent the full tribe summary |
| `squads` | `array of squads` | a list of all the [squad configuration objects](#squad) |
| `destinationId` | `string` | the id of the spreadsheet where the form data should be stored |

#### Squad

|field name | type | definition |
| `name` | `string` | the tribe name, will be used in forms and messages |
| `id` | `string` | a unique value, used internally in the system, cannot be the same as any other id field |
| `channel` | `string` | a webhook link to the team's gchat channel for sending updates and reminders |
| `members` | `members object` | contains the [contact details of anyone](#members) in the squad who should be sent the morale form |
| `leads` | `members object` | contains the [contact details of anyone](#members) who should receive a copy of the morale summary |

> N.B. If someone exists in both `members` and `leads` then they must be entered separately in both

#### Members

An object with each field keyed to a member with the following object:

|field name | type | definition |
| `email` | `string` | the persons email |
| `preferredName` | `string` | the persons preferred identified (i.e. shortened names, nicknames or names not stored in the system) |