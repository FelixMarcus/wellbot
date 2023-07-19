const affirmations = [
  "your brain is basically just a balloon of sugar and water - go get a glass of water",
  "it's ok to feel the way you feel",
  "it's ok to talk about how you're feeling",
  "it's ok to ask for feedback",
  "it's ok to have days off",
  "it's ok to have off days",
  "it's ok to go outside during work",
  "it's ok to switch off at the end of the day",
  "it's ok to not be constantly checking chat and emails",
  "it's ok to have screen breaks",
  "it's ok to say you're not comfortable with something",
  "it's ok to raise your concerns",
  "it's ok to be you",
  "it's ok to change your mind",
  "it's ok to say no",
  "it's ok to have other things going on",
  "it's ok to forget things",
  "it's ok to have a meeting",
  "it's ok to not have a meeting",
  "it's ok to turn off notifications",
  "it's ok to block time out to think and reflect",
  "it's ok to approach tasks your own way",
  "it's ok to work flexibly",
  "it's ok to turn your camera off",
  "it's ok to take time off if you're not feeling well",
  "it's ok to make mistakes",
  "it's ok to say you don't understand",
  "it's ok to ask for help",
  "it's ok to put yourself first",
  "it's ok to love what you do",
]

const sayItWithLove = (affirmation) => `
  \u{2764} You need to make sure that you're looking after _you_ first \u{2764}
  
  And remember, ${affirmation}
  `

const sendALittleLove = (teamChannel) => {
  const affirmation = affirmations[pickANumberFromZeroTo(affirmations.length)]
  sendGChatMessage(teamChannel, sayItWithLove(affirmation));
}

const spreadTheLoveAround = (account = ACCOUNT) => {
  for (team of account.teams) {
    sendALittleLove(team.channel)
  }
}

const spreadTheLoveToTheWellbeingChamps = () => {
  spreadTheLoveAround(WELLBEING_CHAMPS);
}
