const TEST_TRIO = {
  FelixTrio: {
    email: "fmillne@thoughtworks.com",
    preferredName: "Sir Principal of the Trio"
  }
}

const TESTING_GOOGLE_CHAT_WEBHOOK_LINK = "https://chat.googleapis.com/v1/spaces/AAAA8NKaYqc/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=ExMCtW1el5Vexs6L0pNWiC0A7dflwvY7UtKufCKeRXI";

const TEST_TEAMS = [
  {
    name: "Super Happy Fun Squad",
    id: "happy-test-squad",
    channel: TESTING_GOOGLE_CHAT_WEBHOOK_LINK,
    members: {
      Felix: {
        email: "fmillne@thoughtworks.com",
        preferredName: "Felix"
      },
    },
    leads: {
      FelixLead: {
        email: "fmillne@thoughtworks.com",
        preferredName: "Mr Lead of the ETrio"
      },
    }
  },{
    name: "Sad Squad",
    id: "sad-test-squad",
    channel: TESTING_GOOGLE_CHAT_WEBHOOK_LINK,
    members: {
      Felix: {
        email: "fmillne@thoughtworks.com",
        preferredName: "SadBoy"
      },
    },
    leads: {
      SadTrio: {
        email: "fmillne@thoughtworks.com",
        preferredName: "The squad lead with the saddest squad"
      },
    }
  }
];

const TEST_ACCOUNT = {
  name: "TEST MORALE ACCOUNT",
  id: "test-tribe",
  trio: TEST_TRIO,
  squads: TEST_TEAMS,
  destinationId: '1nHrwIP3-GUmHps2UiZWlHQ2C_irgrNrtzT2xdzu8RYw'
};