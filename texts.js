// Every text of the form and the page, German and English. The form's wording
// is the WebApp's release (doc_release3.asp), word for word, typos included,
// so this page and the Case Console's bilingual form say the same. {name} and
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
      "Ich, {name}, erlaube {recipient} meine Personendaten, aufgeführt in Abschnitt II dieses Dokuments, mit den Personen oder Organizationen,aufgeführt in Abschnitt III dieses Dokuments, zu teilen.",
    s2: "Abschnitt II – Gesundheitsdaten",
    s2Text: "Ich erlaube die Teilung meiner Daten mit der oben aufgeführten Organisation:",
    tick: "Zutreffendes ankreuzen",
    record:
      "Weitergabe meiner vollständigen Gesundheitsakte, einschließlich, aber nicht beschränkt auf, Diagnosen, Labortestergebnisse, Behandlung und Abrechnungsunterlagen für alle Krankheiten",
    form: "Art der Weitergabe:",
    electronic: "Elektronische Kopie oder Zugang über Web-Plattform",
    hardCopy: "Hartkopie",
    formBoth: "Beides: elektronische Kopie und Hartkopie",
    yes: "Ja",
    no: "Nein",
    answerNeeded: "Antwort nötig",
    openOne: "Noch 1 Frage offen",
    openMany: "Noch {n} Fragen offen",
    allAnswered: "Alles beantwortet",
    s3: "Abschnitt III – Wer kann meine Gesundheitsdaten erhalten",
    s3Text:
      "Ich autorisiere die Teilung meiner Gesundheitsdaten, definiert in Abschnitt II dieses Dokuments, mit den folgenden Personen oder Organisationen:",
    s3Name: "Name",
    s3Org: "Organization",
    s3Address: "Address",
    s3Note:
      "Mir ist bekannt, dass die oben genannte(n) Person(en)/Organisation(en) möglicherweise nicht den (bundes)staatlichen Vorschriften über den Datenschutz und die Datensicherheit unterliegen und die ihnen zur Verfügung gestellten Informationen weitergeben dürfen.",
    s4: "Abschnitt IV – Dauer der Erlaubnis",
    s4Text: "Diese Autorisierung zur Teilung meiner Gesundheitstdaten ist gültig für 1Jahr nach Unterschriftsdatum.",
    signature: "Unterschrift",
    date: "Datum",
    repIntro:
      "Wenn dieses Formular von einer Person ausgefüllt wird, die rechtlich befugt ist, im Namen einer Person zu handeln, z. B. von einem Elternteil oder Erziehungsberechtigten eines Minderjährigen oder einem Bevollmächtigten im Gesundheitswesen, füllen Sie bitte die folgenden Informationen aus:",
    repName: "Name der Vertretungsperson",
    repSignature: "Unterschrift der Vertretungsperson",
    repAuthority: "Beschreiben Sie welche Art der Vertretungsberechtigung vorliegt",
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
    needRecord: "Ohne Ja bei der Weitergabe der Gesundheitsakte gibt es nichts freizugeben.",
    needForm: "Bitte wählen Sie die Art der Weitergabe.",
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
    patient: "Patient Name",
    dob: "DOB",
    caseNo: "Case file",
    s1: "Section I",
    s1Text:
      "I, {name}, give my permission to {recipient} to share the information listed in Section II of this document with the person(s) or organization(s) I have specified in Section III of this document.",
    s2: "Section II – Health Information",
    s2Text: "I would like to give the above healthcare organization permission to:",
    tick: "Tick as appropriate",
    record:
      "Disclose my complete health record including, but not limited to, diagnoses, lab test results, treatment, and billing records for all conditions.",
    form: "Form of Disclosure:",
    electronic: "Electronic copy or access via a web-based portal",
    hardCopy: "Hard copy",
    formBoth: "Both: electronic copy and hard copy",
    yes: "Yes",
    no: "No",
    answerNeeded: "Answer needed",
    openOne: "1 question still open",
    openMany: "{n} questions still open",
    allAnswered: "All answered",
    s3: "Section III – Who Can Receive My Health Information",
    s3Text:
      "I give authorization for the health information detailed in section II of this document to be shared with the following individual(s) or organization(s)",
    s3Name: "Name",
    s3Org: "Organization",
    s3Address: "Address",
    s3Note:
      "I understand that the person(s)/organization(s) listed above may not be covered by state/federal rules governing privacy and security of data and may be permitted to further share the information that is provided to them.",
    s4: "Section IV – Duration of Authorization",
    s4Text: "This authorization to share my health information is valid for one year from signature date.",
    signature: "Signature",
    date: "Date",
    repIntro:
      "If this form is being completed by a person with legal authority to act an individual’s behalf, such as a parent or legal guardian of a minor or health care agent, please complete the following information:",
    repName: "Name of person completing this form",
    repSignature: "Signature of person completing this form",
    repAuthority: "Describe below how this person has legal authority to sign this form",
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
    needRecord: "Without a Yes to the disclosure of your health record there is nothing to release.",
    needForm: "Please choose the form of disclosure.",
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

// The second version of the form (?mrf-version=02): the reworked Medical
// Information Release, Data Sharing & Optional Telemedicine Consent. The
// English is the new MRF as drafted; the German is a translation of it (to be
// checked by a German speaker before it goes to a provider). Page and PDF
// texts that do not change come from the first version.
const MRF_VERSIONS = ["01", "02"];
const MRF_DEFAULT = "01";

const TEXTS2 = {
  de: {
    ...TEXTS.de,
    docTitle: "Einwilligung und Schweigepflichtentbindung",
    title: "Entbindung von der Schweigepflicht, Datenweitergabe und Einwilligung zur Telemedizin",
    caseNo: "Goral-Fallnummer",
    provider: "Behandelnder Arzt / Praxis",
    treatDate: "Behandlungsdatum",
    patientFull: "Vollständiger Name der Patientin / des Patienten",
    dob: "Geburtsdatum",
    location: "Aktueller Aufenthaltsort (Stadt / PLZ / Land)",
    locationPh: "z. B. 50667 Köln, Deutschland",
    s1: "1. Entbindung von der ärztlichen Schweigepflicht",
    s1Text:
      "Hiermit entbinde ich den oben genannten Behandler, einschließlich seines Praxisteams und der beteiligten medizinischen Fachkräfte, von der gesetzlichen ärztlichen Schweigepflicht. Sie dürfen meine medizinischen Daten und Abrechnungsdaten ausschließlich weitergeben an:",
    s1Recipients: [
      "Goral Assistance Germany GmbH, Girardetstraße 4, 45131 Essen, Deutschland",
    ],
    s1After:
      "Andere Dritte erhalten meine Daten nicht, es sei denn, dies ist gesetzlich vorgeschrieben oder für eine in meinem Auftrag organisierte medizinische Weiterbehandlung erforderlich.",
    s2: "2. Welche Daten",
    s2Text:
      "Mein Name, Geburtsdatum, Kontaktdaten und aktueller Aufenthaltsort; Daten zur Identitätsprüfung; Symptome, relevante Krankengeschichte, Diagnosen, Labor-/Bildgebungsbefunde, Behandlungs- und Konsultationsunterlagen; Rezepte, medizinische Berichte (MR) und spezifizierte Rechnungen (einschließlich damit zusammenhängender Folgebehandlungen).",
    s3: "3. Zweck",
    s3Text:
      "Um meine Identität zu prüfen, meine medizinische Behandlung zu organisieren und durchzuführen, eine Kostenübernahmegarantie (GOP) auszustellen, den Versicherungsschutz zu prüfen, ärztliche Rechnungen direkt mit dem Behandler abzurechnen und, falls erforderlich, weitere Behandlung, Rezepte, einen Krankenhausaufenthalt oder den medizinischen Rücktransport zu organisieren.",
    s4: "4. E-Mail-Kommunikation und optionale Einwilligung zur Telemedizin",
    s4Email:
      "E-Mail-Übermittlung: Ich bin damit einverstanden, dass medizinische Berichte, Rezepte und Rechnungen elektronisch (z. B. per E-Mail oder Patientenportal) zwischen dem Behandler, Goral Assistance und mir übermittelt werden. Mir ist bekannt, dass gewöhnliche unverschlüsselte E-Mail nicht vollständig sicher ist.",
    telehealth:
      "Optional – Telemedizinische Beratung (nur ankreuzen, wenn Ihre Beratung per Videoanruf oder Telefon erfolgt): Ich bin mit einer Behandlung per Videoanruf oder Telefon einverstanden. Mir ist bewusst, dass eine Fernberatung diagnostische Grenzen im Vergleich zu einer körperlichen Untersuchung vor Ort hat, und ich bestätige, dass ich mich während der Teleberatung physisch am oben angegebenen aktuellen Aufenthaltsort befinde.",
    s5: "5. Meine Wahl und Datenschutzrechte",
    s5Items: [
      "Meine Einwilligung ist freiwillig und gilt für diesen Fall und die damit zusammenhängende Folgebehandlung für höchstens 12 Monate.",
      "Ich kann meine Einwilligung jederzeit mit Wirkung für die Zukunft per E-Mail oder Brief an den Behandler oder an Goral Assistance widerrufen. Vor dem Widerruf weitergegebene Daten bleiben rechtmäßig weitergegeben.",
      "Ohne Einwilligung zahlt meine Versicherung möglicherweise nicht direkt; in diesem Fall zahle ich die ärztliche Rechnung selbst.",
      "Ich kann Auskunft über meine Daten sowie deren Berichtigung oder Löschung verlangen (im Rahmen der gesetzlichen Grenzen) und mich bei einer zuständigen Datenschutz-Aufsichtsbehörde beschweren (z. B. LDI NRW, Düsseldorf).",
      "Mir ist bekannt, dass der Arzt nach deutschem Recht Behandlungsunterlagen 10 Jahre aufbewahren muss.",
    ],
    s6: "6. Bestätigung",
    s6Text: "Ich habe dieses Formular gelesen und verstanden und bin einverstanden.",
    digital:
      "Digitale / mündliche Bestätigung (falls nicht auf Papier unterschrieben wird): Ich bestätige meine Einwilligung digital (per E-Mail, Nachricht oder Online-Bestätigung) oder mündlich während der dokumentierten Videoberatung. Eine handschriftliche Unterschrift ist dann nicht erforderlich.",
    place: "Ort, Datum",
    signature: "Unterschrift der Patientin / des Patienten (bei Unterschrift auf Papier/Bildschirm)",
    repName: "Name der Vertretungsperson und Beziehung (bei Minderjährigen / nicht Einwilligungsfähigen)",
    repNamePh: "Name, Beziehung, z. B. Elternteil / Betreuer",
    repSignature: "Unterschrift der Vertretungsperson",
    internal: "Nur für Behandler / Goral – Nachweis der digitalen Einwilligung und Identitätsprüfung",
    internalConfirmed: "Bestätigt über (schriftlich / E-Mail / Nachricht / Video):",
    internalDocumented: "Datum, Uhrzeit und dokumentiert von:",
    internalId: "Identität geprüft anhand (Reisepass / Personalausweis):",
    internalChecked: "Geprüft von (Goral / Behandler):",
    needLocation: "Bitte geben Sie Ihren aktuellen Aufenthaltsort an.",
  },
  en: {
    ...TEXTS.en,
    docTitle: "Medical Release",
    title: "Release from Medical Confidentiality, Data Sharing & Telemedicine Consent",
    caseNo: "Goral File Number",
    provider: "Healthcare Provider / Practice",
    treatDate: "Date of Treatment",
    patientFull: "Patient Full Name",
    dob: "Date of Birth",
    location: "Current Location (City / Postal Code / Country)",
    locationPh: "e.g. 50667 Cologne, Germany",
    s1: "1. Release from Medical Confidentiality",
    s1Text:
      "I hereby release the healthcare provider named above, including their practice team and involved medical staff, from statutory medical confidentiality. They are authorized to share my medical and billing data exclusively with:",
    s1Recipients: [
      "Goral Assistance Germany GmbH, Girardetstraße 4, 45131 Essen, Germany",
    ],
    s1After:
      "No other third parties will receive my data unless required by law or necessary for follow-up medical care arranged on my behalf.",
    s2: "2. Which Data",
    s2Text:
      "My name, date of birth, contact details, and current location; identity verification data; symptoms, relevant medical history, diagnoses, lab/imaging findings, treatment and consultation records; prescriptions, medical reports (MR), and itemized invoices (including related follow-up care).",
    s3: "3. Why",
    s3Text:
      "To verify my identity, organize and carry out my medical treatment, issue a Guarantee of Payment (GOP), verify insurance coverage, settle medical invoices directly with the provider, and—if needed—arrange further care, prescriptions, hospitalization, or medical transport home.",
    s4: "4. E-Mail Communication & Optional Telemedicine Consent",
    s4Email:
      "E-Mail Transmission: I agree that medical reports, prescriptions, and invoices may be sent electronically (e.g., by e-mail or patient portal) between the provider, Goral Assistance, and myself. I know that standard unencrypted e-mail is not fully secure.",
    telehealth:
      "Optional — Telehealth Consultation (tick only if your consultation is by video call or phone): I agree to treatment by video call or phone. I understand that a remote consultation has diagnostic limitations compared to an in-person physical examination, and I confirm that I am physically located at the current location stated above during the teleconsultation.",
    s5: "5. My Choice & Data Protection Rights",
    s5Items: [
      "My consent is voluntary and valid for this case and related follow-up care for a maximum of 12 months.",
      "I can withdraw my consent at any time with future effect by e-mail or letter to the provider or to Goral Assistance. Data shared before withdrawal remains lawfully shared.",
      "Without consent, my insurance may not pay directly; in that case, I will pay the medical bill myself.",
      "I can request access to, correction, or deletion of my data (within legal limits) and can lodge a complaint with a competent data protection supervisory authority (e.g., LDI NRW, Düsseldorf).",
      "I acknowledge that under German law, the physician must retain medical records for 10 years.",
    ],
    s6: "6. Confirmation",
    s6Text: "I have read and understood this form and I agree.",
    digital:
      "Digital / Verbal Confirmation (if not signing on paper): I confirm my consent digitally (via e-mail, message, or online confirmation) or verbally during the documented video consultation. No handwritten signature is needed then.",
    place: "Place, Date",
    signature: "Patient Signature (if signed on paper/screen)",
    repName: "Name of Representative (if minor / incapacitated)",
    repNamePh: "Name & Relationship, e.g. Parent / Guardian",
    repSignature: "Representative Signature",
    internal: "For Provider / Goral Use Only — Proof of Digital Consent & Identity Check",
    internalConfirmed: "Confirmed via (written / e-mail / message / video):",
    internalDocumented: "Date, time & documented by:",
    internalId: "Identity checked via (passport / ID card):",
    internalChecked: "Checked by (Goral / Provider):",
    needLocation: "Please enter your current location.",
  },
};
