import {exampleSquad} from "./SquadSchema";

const exampleTrio = {
    name: {
        preferredName: "how-someone-likes-to-be-called",
        email: "persons-email",
    }
}

const exampleTribe = {
    name: "",
    id: "unique-namespaced-id",
    trio: exampleTrio,
    squads: [exampleSquad],
    destinationId: "moraleform-data-destination-spreadsheet-id"
};