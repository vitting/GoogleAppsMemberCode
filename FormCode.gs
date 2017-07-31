function showEmailMemberDialog() {
  var ui = HtmlService.createTemplateFromFile("MailMembersDialogTemplate").evaluate();
  ui.setWidth(500).setHeight(500);
  FormApp.getUi().showModalDialog(ui, "Send e-mail til medlemmer");
}

function sendMembersMail(recipients, subject, body) {
  ssLogger.log(recipients);
  ssLogger.log(subject);
  ssLogger.log(body);
  
  return true;
}

function generateMenu() {
  var setupRun = getSetupRunValue();
  var ui = FormApp.getUi().createMenu(MENU_TITLE);
  ui.addItem("Send e-mail til medlem", "showEmailMemberDialog")
    .addToUi();
}
