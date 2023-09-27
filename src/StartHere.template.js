/*
    Note that the ordering of the file is important,
    with the Trio and Squad definitions at the top and the Tribe at the bottom

    Changing that ordering will result in errors on execution...
 */

const TRIO = {
    trioMembersName: { // Change trioMembersName to actual persons name, must be unique within trio
        preferredName: "how-someone-likes-to-be-called",
        email: "persons-email",
    },
    // Additional members can be added by copying the previous four lines
    // There do not have to be exactly three members in the trio (more or less allowed)
}

const SQUAD_ALPHA = {
    name: "Squad Alpha",
    channel: "gchat-webhook-url", // the link generated when creating a webhook url in a gchat channel, including key and token
    id: "unique-squad-id", // Change to any squad specific hyphenated id - must not be the same as any other id in the tribe
    members: {
        membersName: { // Change membersName to actual persons name, must be unique within members
            preferredName: "how-someone-likes-to-be-called",
            email: "persons-email",
        }
        // Additional members can be added by copying the previous four lines
    },
    leads: {
        squadLeadsName: { // Change squadLeadsName to actual persons name, must be unique within leads
            preferredName: "how-someone-likes-to-be-called",
            email: "persons-email",
        }
        // Additional members can be added by copying the previous four lines
    }
}

// To add more squads:
// 1. duplicate this above block for Squad Alpha
// 2. change the values as desired
// 3. add to the list below

const ALL_SQUADS = [
    SQUAD_ALPHA,
    // TEAM_BETA,
    // TEAM_GAMMA
    // Add more teams here to the Tribe
];

const TRIBE = {
    name: "Super Tribe of Squads",
    id: "Tribe",
    trio: TRIO,
    squads: ALL_SQUADS,
    destinationId: "1Oasqf4WmTryaN0h55JfYCanf-VTm_C3GE78iRiqZdJo"
};

const surveyTribeMorale = () => {
    surveyTribeMorale(TRIBE);
}

const sendTribeMoraleReminder = () => {
    sendReminder(TRIBE);
}

const closeTribeMoraleSurveys = () => {
    closeTribeSurveyForms(TRIBE);
}

const spreadTheLoveToTheTribe = () => {
    spreadTheLoveAround(TRIBE);
}