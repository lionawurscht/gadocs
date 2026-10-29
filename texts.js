// Every text of the form and the page, German and English. The form's wording
// follows the WebApp's release (doc_release3.asp), typos fixed. {name} and
// {recipient} come from the link.
"use strict";

const COMPANY = {
  name: "GORAL ASSISTANCE Germany",
  organisation: "GORAL ASSISTANCE Germany",
  address: "Goral Assistance Germany GmbH, Girardetstr. 4, 45131 Essen",
};

const TEXTS = {
  de: {
    title: "Patienteneinwilligungserklärung für Goral Assistance Germany",
    docTitle: "Schweigepflichtsentbindung",
    to: "An",
    patient: "Patientenname",
    dob: "Geburtsdatum",
    caseNo: "Fallnummer",
    s1: "Abschnitt I",
    s1Text:
      "Ich, {name}, erlaube {recipient}, meine Personendaten, aufgeführt in Abschnitt II dieses Dokuments, mit den Personen oder Organisationen, aufgeführt in Abschnitt III dieses Dokuments, zu teilen.",
    s2: "Abschnitt II – Gesundheitsdaten",
    s2Text: "Ich erlaube die Teilung meiner Daten mit der oben aufgeführten Organisation:",
    tick: "Zutreffendes ankreuzen",
    record:
      "Weitergabe meiner vollständigen Gesundheitsakte, einschließlich, aber nicht beschränkt auf, Diagnosen, Labortestergebnisse, Behandlung und Abrechnungsunterlagen für alle Krankheiten",
    form: "Art der Weitergabe:",
    electronic: "Elektronische Kopie oder Zugang über Web-Plattform",
    hardCopy: "Hartkopie",
    s3: "Abschnitt III – Wer kann meine Gesundheitsdaten erhalten",
    s3Text:
      "Ich autorisiere die Teilung meiner Gesundheitsdaten, definiert in Abschnitt II dieses Dokuments, mit den folgenden Personen oder Organisationen:",
    s3Name: "Name",
    s3Org: "Organisation",
    s3Address: "Adresse",
    s3Note:
      "Mir ist bekannt, dass die oben genannte(n) Person(en)/Organisation(en) möglicherweise nicht den (bundes)staatlichen Vorschriften über den Datenschutz und die Datensicherheit unterliegen und die ihnen zur Verfügung gestellten Informationen weitergeben dürfen.",
    s4: "Abschnitt IV – Dauer der Erlaubnis",
    s4Text: "Diese Autorisierung zur Teilung meiner Gesundheitsdaten ist gültig für 1 Jahr nach Unterschriftsdatum.",
    signature: "Unterschrift",
    date: "Datum",
    repIntro:
      "Wenn dieses Formular von einer Person ausgefüllt wird, die rechtlich befugt ist, im Namen einer Person zu handeln, z. B. von einem Elternteil oder Erziehungsberechtigten eines Minderjährigen oder einem Bevollmächtigten im Gesundheitswesen, füllen Sie bitte die folgenden Informationen aus:",
    repName: "Name der Vertretungsperson",
    repSignature: "Unterschrift der Vertretungsperson",
    repAuthority: "Beschreiben Sie, welche Art der Vertretungsberechtigung vorliegt",
    confidentiality:
      "Diskretionshinweis: Die in diesem Formular enthaltenen Informationen sind für die oben genannte Person oder Gesellschaft bestimmt und können Informationen enthalten, die privilegiert oder vertraulich sind. Sollte der Leser dieser Nachricht nicht der vorgesehene Empfänger sein, werden Sie hiermit darauf hingewiesen, dass jegliche Verbreitung, Verteilung oder Vervielfältigung dieser Mitteilung streng verboten ist. Sollten Sie diese Mitteilung irrtümlich erhalten haben, benachrichtigen Sie uns bitte umgehend. Wir wären Ihnen dankbar, wenn Sie das Original an uns zurückschicken würden.",
    signedAt: "Elektronisch unterzeichnet am {when}",
    signedBy: "Unterzeichnet von",
    page: "Seite",

    // the page only
    intro:
      "Bitte lesen Sie das Formular, unterschreiben Sie unten und senden Sie uns das PDF zurück. Ihre Daten bleiben auf Ihrem Gerät; nichts wird an einen Server übertragen.",
    onBehalf: "Ich unterschreibe für die Patientin / den Patienten",
    repNamePh: "Vor- und Nachname",
    authorityPick: "Art der Vertretung",
    authorities: {
      parent: "Elternteil eines minderjährigen Kindes",
      guardian: "Gesetzliche/r Betreuer/in oder Vormund",
      proxy: "Vorsorgebevollmächtigte/r",
      other: "Andere (bitte beschreiben)",
    },
    authorityPh: "z. B. Vorsorgevollmacht vom 01.02.2024",
    sign: "Unterschreiben",
    signAgain: "Neu unterschreiben",
    signHere: "Hier unterschreiben",
    clear: "Löschen",
    cancel: "Abbrechen",
    confirm: "Bestätigen",
    rotateHint: "Tipp: Drehen Sie das Telefon quer für mehr Platz.",
    makePdf: "PDF erstellen",
    share: "Teilen / Senden",
    download: "Herunterladen",
    view: "Ansehen",
    sendBack:
      "Senden Sie das PDF bitte auf dem Weg zurück, auf dem Sie den Link erhalten haben (E-Mail oder WhatsApp).",
    needRecord: "Bitte kreuzen Sie die Weitergabe der Gesundheitsakte an, sonst gibt es nichts freizugeben.",
    needForm: "Bitte wählen Sie mindestens eine Art der Weitergabe.",
    needSignature: "Bitte unterschreiben Sie zuerst.",
    needRepName: "Bitte geben Sie den Namen der Vertretungsperson an.",
    needAuthority: "Bitte beschreiben Sie die Vertretungsberechtigung.",
    badLink:
      "Dieser Link ist unvollständig oder beschädigt. Bitte öffnen Sie ihn noch einmal aus der Nachricht oder bitten Sie uns um einen neuen.",
    noData: "Dieser Link enthält keine Falldaten. Bitte verwenden Sie den Link, den Sie von uns erhalten haben.",
    oldBrowser: "Ihr Browser ist zu alt für dieses Formular. Bitte öffnen Sie den Link in einem aktuellen Chrome, Safari oder Firefox.",
    pdfFailed: "Das PDF konnte nicht erstellt werden:",
  },

  en: {
    title: "Medical Release for Goral Assistance Germany",
    docTitle: "Medical Release",
    to: "To",
    patient: "Patient name",
    dob: "Date of birth",
    caseNo: "Case file",
    s1: "Section I",
    s1Text:
      "I, {name}, give my permission to {recipient} to share the information listed in Section II of this document with the person(s) or organization(s) I have specified in Section III of this document.",
    s2: "Section II – Health Information",
    s2Text: "I would like to give the above healthcare organization permission to:",
    tick: "Tick as appropriate",
    record:
      "Disclose my complete health record including, but not limited to, diagnoses, lab test results, treatment, and billing records for all conditions.",
    form: "Form of disclosure:",
    electronic: "Electronic copy or access via a web-based portal",
    hardCopy: "Hard copy",
    s3: "Section III – Who Can Receive My Health Information",
    s3Text:
      "I give authorization for the health information detailed in Section II of this document to be shared with the following individual(s) or organization(s):",
    s3Name: "Name",
    s3Org: "Organization",
    s3Address: "Address",
    s3Note:
      "I understand that the person(s)/organization(s) listed above may not be covered by state/federal rules governing privacy and security of data and may be permitted to further share the information that is provided to them.",
    s4: "Section IV – Duration of Authorization",
    s4Text: "This authorization to share my health information is valid for one year from the signature date.",
    signature: "Signature",
    date: "Date",
    repIntro:
      "If this form is being completed by a person with legal authority to act on an individual’s behalf, such as a parent or legal guardian of a minor or health care agent, please complete the following information:",
    repName: "Name of person completing this form",
    repSignature: "Signature of person completing this form",
    repAuthority: "Describe how this person has legal authority to sign this form",
    confidentiality:
      "Confidentiality: The information contained in this form is intended for the individual or entity named above and may contain information that is privileged or confidential. If the reader of this message is not the intended recipient you are hereby notified that any dissemination, distribution or copying of this communication is strictly prohibited. If you have received this communication in error, please notify us immediately. We would appreciate your returning the original to us.",
    signedAt: "Signed electronically on {when}",
    signedBy: "Signed by",
    page: "Page",

    intro:
      "Please read the form, sign below and send the PDF back to us. Your data stays on your device; nothing is sent to a server.",
    onBehalf: "I am signing on behalf of the patient",
    repNamePh: "First and last name",
    authorityPick: "Type of authority",
    authorities: {
      parent: "Parent of a minor",
      guardian: "Legal guardian",
      proxy: "Health care agent (power of attorney)",
      other: "Other (please describe)",
    },
    authorityPh: "e.g. power of attorney dated 01.02.2024",
    sign: "Sign",
    signAgain: "Sign again",
    signHere: "Sign here",
    clear: "Clear",
    cancel: "Cancel",
    confirm: "Confirm",
    rotateHint: "Tip: turn your phone sideways for more room.",
    makePdf: "Create PDF",
    share: "Share / Send",
    download: "Download",
    view: "View",
    sendBack: "Please send the PDF back the way you received this link (email or WhatsApp).",
    needRecord: "Please tick the disclosure of your health record, otherwise there is nothing to release.",
    needForm: "Please choose at least one form of disclosure.",
    needSignature: "Please sign first.",
    needRepName: "Please enter the name of the person signing.",
    needAuthority: "Please describe the legal authority.",
    badLink: "This link is incomplete or damaged. Please open it again from the message, or ask us for a new one.",
    noData: "This link carries no case data. Please use the link you received from us.",
    oldBrowser: "Your browser is too old for this form. Please open the link in a current Chrome, Safari or Firefox.",
    pdfFailed: "The PDF could not be created:",
  },
};

function fill(text, values) {
  return text.replace(/\{(\w+)\}/g, (m, k) => (k in values ? values[k] : m));
}
