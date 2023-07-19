const TEST_CLT = {
  FelixCLT: {
    email: "fmillne@thoughtworks.com",
    preferredName: "Sir Principal of the CLT"
  }
}

const TESTING_GOOGLE_CHAT_WEBHOOK_LINK = "https://chat.googleapis.com/v1/spaces/AAAA8NKaYqc/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=ExMCtW1el5Vexs6L0pNWiC0A7dflwvY7UtKufCKeRXI";

const TEST_TEAMS = [
  {
    name: "Super Happy Fun Team",
    id: "happy-test-team",
    channel: TESTING_GOOGLE_CHAT_WEBHOOK_LINK,
    members: {
      Felix: {
        email: "fmillne@thoughtworks.com",
        preferredName: "Felix"
      },
    },
    eclt: {
      FelixECLT: {
        email: "fmillne@thoughtworks.com",
        preferredName: "Mr Lead of the ECLT"
      },
    }
  },{
    name: "Sad Team",
    id: "sad-test-team",
    channel: TESTING_GOOGLE_CHAT_WEBHOOK_LINK,
    members: {
      Felix: {
        email: "fmillne@thoughtworks.com",
        preferredName: "SadBoy"
      },
    },
    eclt: {
      SadECLT: {
        email: "fmillne@thoughtworks.com",
        preferredName: "The team lead with the saddest team"
      },
    }
  }
];

const TEST_ACCOUNT = {
  name: "TEST MORALE ACCOUNT",
  id: "test-account",
  clt: TEST_CLT,
  teams: TEST_TEAMS,
  destinationId: '1nHrwIP3-GUmHps2UiZWlHQ2C_irgrNrtzT2xdzu8RYw'
};