const TEST_TRIO = {
  FelixTrio: {
    email: "fmillne@test.dev.com",
    preferredName: "Sir Principal of the Trio"
  }
}

const TESTING_GOOGLE_CHAT_WEBHOOK_LINK = "https://chat.googleapis.com/v1/spaces/AAAA8NKaYqc/messages?key=test_key&token=test_token";

const TEST_TEAMS = [
  {
    name: "Super Happy Fun Squad",
    id: "happy-test-squad",
    channel: TESTING_GOOGLE_CHAT_WEBHOOK_LINK,
    members: {
      Felix: {
        email: "fmillne@test.dev.com",
        preferredName: "Felix"
      },
    },
    leads: {
      FelixLead: {
        email: "fmillne@test.dev.com",
        preferredName: "Mr Lead of the ETrio"
      },
    }
  },{
    name: "Sad Squad",
    id: "sad-test-squad",
    channel: TESTING_GOOGLE_CHAT_WEBHOOK_LINK,
    members: {
      Felix: {
        email: "fmillne@test.dev.com",
        preferredName: "SadBoy"
      },
    },
    leads: {
      SadTrio: {
        email: "fmillne@test.dev.com",
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