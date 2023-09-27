const TRIO = {
    name: {
        preferredName: "how-someone-likes-to-be-called",
        email: "persons-email",
    }
}

const SQUAD_ALPHA = {
    name: "squad-name",
    channel: "gchat-webhook-url",
    id: "unique-squad-id",
    members: {
        name: {
            preferredName: "how-someone-likes-to-be-called",
            email: "persons-email",
        }
    },
    leads: {
        name: {
            preferredName: "how-someone-likes-to-be-called",
            email: "persons-email",
        }
    }
}

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