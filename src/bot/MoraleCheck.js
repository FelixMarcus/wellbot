const surveySquadMorale = (tribe, squad) => {
  const form = createNewMoraleForm(tribe, squad);
  shareForm(tribe, squad, form)
  saveCurrentSquadForm(tribe, squad, form); 
}

const surveyTribeMorale = (tribe = TRIBE) => {
  Logger.log(`Creating morale surveys for tribe ${tribe.name}`, );
  for (squad of tribe.squads) {
    Logger.log(`Creating new morale survey for ${squad.name}`, squad)
    if (hasFormCurrentlyOpen(tribe, squad)) {
      console.error(`Already have an open form for ${tribe.name} ${squad.name}!`);
    } else {
      surveySquadMorale(tribe, squad);
    }
  }
}

const sendSquadReminder = (tribe, squad) => {
  Logger.log(`Sending morale survey reminder for ${squad.name}`)
  var currentForm = getCurrentForm(tribe, squad);
  var publishedUrl = currentForm.getPublishedUrl();

  sendGChatMessage(squad.channel, chatReminderMessage(publishedUrl));
}

const sendReminder = (tribe = TRIBE) => {
  for (squad of tribe.squads) {
    sendSquadReminder(tribe, squad)
  }
}

const closeSquadForm = (tribe, squad) => {
  const form = getCurrentForm(tribe, squad);
  form.setAcceptingResponses(false);
  return {
    squad,
    form,
    ...buildSquadInsights(form),
  }
}

const closeTribeSurveyForms = (tribe = TRIBE) => {
  const squadInsights = tribe.squads.map(squad => closeSquadForm(tribe, squad));

  const tribeInsights = {
    tribe: buildTribeInsights(squadInsights),
    squads: squadInsights,
  };

  Logger.log(`Gathered insights for tribe ${tribe.name}`)

  for(insights of squadInsights) {
    shareSquadSummary(tribe, insights);
  }

  shareTribeSummary(tribe, tribeInsights);

  clearAllTribeForms(tribe);
}
