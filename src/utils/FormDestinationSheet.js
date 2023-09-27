const renameFormConnectedSheet = (form, spreadsheet, sheetName) => {
  const formUrl = form.getEditUrl().replace('/edit', '');
  spreadsheet.getSheets().forEach(sheet => {
    const destFormUrl = sheet.getFormUrl().replace('/viewform', '');
    if(destFormUrl === formUrl) {
      sheet.setName(sheetName);
    }
  });
}

const connectToSpreadsheet = (form, destinationId, sheetName) => {
  const destinationSpreadsheet = SpreadsheetApp.openById(destinationId);
  form.setDestination(FormApp.DestinationType.SPREADSHEET, destinationId);
  renameFormConnectedSheet(form, destinationSpreadsheet, sheetName);  
}
