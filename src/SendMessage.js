const emailOptions = () => ({
  name: "WellbeingBot",
  noReply: true,
})

const sendEmailsToGroup = (recipients, subject, createEmailMessageFunction) => {
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
    const payload = JSON.stringify({ text: message });

    const options = {
        method: 'POST',
        contentType: 'application/json',
        payload: payload,
    };

    UrlFetchApp.fetch(channel, options);
}
