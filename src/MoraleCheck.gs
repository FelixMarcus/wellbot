const surveyTeamMorale = (account, team) => {
  const form = createNewMoraleForm(account, team);
  shareForm(account, team, form)
  saveCurrentTeamForm(account, team, form); 
}

const surveyAccountMorale = (account = ACCOUNT) => {
  Logger.log(`Creating morale surveys for account ${account.name}`, );
  for (team of account.teams) {
    Logger.log(`Creating new morale survey for ${team.name}`, team)
    if (hasFormCurrentlyOpen(account, team)) {
      console.error(`Already have an open form for ${account.name} ${team.name}!`);
    } else {
      surveyTeamMorale(account, team);
    }
  }
}

const sendTeamReminder = (account, team) => {
  Logger.log(`Sending morale survey reminder for ${team.name}`)
  var currentForm = getCurrentForm(account, team);
  var publishedUrl = currentForm.getPublishedUrl();

  sendGChatMessage(team.channel, chatReminderMessage(publishedUrl));
}

const sendReminder = (account = ACCOUNT) => {
  for (team of account.teams) {
    sendTeamReminder(account, team)
  }
}

const closeTeamForm = (account, team) => {
  const form = getCurrentForm(account, team);
  form.setAcceptingResponses(false);
  return {
    team,
    form,
    ...buildTeamInsights(form),
  }
}

const closeAccountSurveyForms = (account = ACCOUNT) => {
  const teamInsights = account.teams.map(team => closeTeamForm(account, team));

  const accountInsights = {
    account: buildAccountInsights(teamInsights),
    teams: teamInsights,
  };

  Logger.log(`Gathered insights for account ${account.name}`)

  for(insights of teamInsights) {
    shareTeamSummary(account, insights);
  }

  shareAccountSummary(account, accountInsights);

  clearAllAccountForms(account);
}
