const emailOptions = () => ({
  name: "WellBot",
  noReply: true,
})

const sendEmailsToTribe = (recipients, subject, createEmailMessageFunction) => {
  if (!recipients) {
    return;
  };

  for(recipientEntry of Object.entries(recipients)) {
    const [id, _] = recipientEntry;
    const recipient = recipients[id];
    Logger.log(`Sharing form with ${id} - ${recipient.email}`);
    const messageBody = createEmailMessageFunction(recipient.preferredName);
    GmailApp.sendEmail(recipient.email, subject, messageBody, emailOptions());
  }
}

function sendGChatMessage(channel, message) {
    if (!channel || !message) {
        Logger.warn("No channel or message provided [channel: %s, message: %s]", channel, message)
        return;
    }

    const payload = JSON.stringify({ text: message });

    const options = {
        method: 'POST',
        contentType: 'application/json',
        payload: payload,
    };

    UrlFetchApp.fetch(channel, options);
}
