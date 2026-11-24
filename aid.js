// Translations as an aid only (Spanish, Portuguese, Polish). They are shown
// beside the German / English text when the patient asks for them, never in
// the PDF. The binding text is the German / English one; each language says
// so in its `notice`. A key is a key of texts.js; `common` holds what both
// versions of the form share. DRAFT: to be read by a native speaker.
"use strict";

const AID_LANGS = ["es", "pt", "pl"];

const AID_NOTICE = {
  es: "Traducción solo como ayuda de comprensión. Solo el texto en alemán / inglés es jurídicamente vinculante; el PDF se genera en alemán / inglés.",
  pt: "Tradução apenas como ajuda à compreensão. Só o texto em alemão / inglês é juridicamente vinculativo; o PDF é gerado em alemão / inglês.",
  pl: "Tłumaczenie służy wyłącznie pomocą w zrozumieniu. Prawnie wiążący jest tylko tekst niemiecki / angielski; PDF powstaje po niemiecku / angielsku.",
};

const AID_LABEL = { es: "Español · solo ayuda", pt: "Português · só ajuda", pl: "Polski · tylko pomoc" };

const AID = {
  common: {
    es: {
      intro: "Lea el formulario, firme abajo y envíenos el PDF. Sus datos permanecen en su dispositivo; no se envía nada a ningún servidor.",
      tick: "Marque lo que corresponda",
      form: "Forma de entrega:",
      electronic: "Copia electrónica o acceso a través de un portal web",
      hardCopy: "Copia en papel",
      formBoth: "Ambas: copia electrónica y copia en papel",
      onBehalf: "Firmo en nombre del paciente",
      repIntro: "Si este formulario lo rellena una persona con autoridad legal para actuar en nombre de otra, como el padre, la madre o el tutor legal de un menor o un representante en materia de salud, complete los siguientes datos:",
    },
    pt: {
      intro: "Leia o formulário, assine abaixo e envie-nos o PDF. Os seus dados ficam no seu dispositivo; nada é enviado para um servidor.",
      tick: "Assinale o que se aplica",
      form: "Forma de entrega:",
      electronic: "Cópia eletrónica ou acesso através de um portal web",
      hardCopy: "Cópia em papel",
      formBoth: "Ambas: cópia eletrónica e cópia em papel",
      onBehalf: "Assino em nome do paciente",
      repIntro: "Se este formulário for preenchido por uma pessoa com poder legal para agir em nome de outra, como o pai, a mãe ou o tutor legal de um menor ou um representante em matéria de saúde, preencha os seguintes dados:",
    },
    pl: {
      intro: "Prosimy przeczytać formularz, podpisać go poniżej i odesłać nam plik PDF. Dane pozostają na Pana/Pani urządzeniu; nic nie jest wysyłane na serwer.",
      tick: "Zaznacz właściwe",
      form: "Forma udostępnienia:",
      electronic: "Kopia elektroniczna lub dostęp przez portal internetowy",
      hardCopy: "Kopia papierowa",
      formBoth: "Obie: kopia elektroniczna i papierowa",
      onBehalf: "Podpisuję w imieniu pacjenta",
      repIntro: "Jeżeli formularz wypełnia osoba uprawniona do działania w imieniu innej osoby, np. rodzic lub opiekun prawny małoletniego albo pełnomocnik w sprawach zdrowia, prosimy o uzupełnienie poniższych danych:",
    },
  },

  // version 01, the WebApp's form
  "01": {
    es: {
      title: "Autorización médica para Goral Assistance Germany",
      s1: "Sección I",
      s1Text: "Yo, {name}, autorizo a {recipient} a compartir la información indicada en la Sección II de este documento con las personas u organizaciones que he especificado en la Sección III de este documento.",
      s2: "Sección II – Información de salud",
      s2Text: "Deseo autorizar a la organización sanitaria arriba indicada a:",
      record: "Entregar mi historial médico completo, incluidos, entre otros, diagnósticos, resultados de laboratorio, tratamientos y datos de facturación de todas las enfermedades.",
      s3: "Sección III – Quién puede recibir mi información de salud",
      s3Text: "Autorizo que la información de salud detallada en la sección II de este documento se comparta con las siguientes personas u organizaciones:",
      s3Note: "Entiendo que las personas u organizaciones indicadas arriba pueden no estar sujetas a las normas estatales o federales sobre privacidad y seguridad de los datos, y que pueden estar autorizadas a compartir a su vez la información que se les entrega.",
      s4: "Sección IV – Duración de la autorización",
      s4Text: "Esta autorización para compartir mi información de salud es válida durante un año desde la fecha de la firma.",
    },
    pt: {
      title: "Autorização médica para a Goral Assistance Germany",
      s1: "Secção I",
      s1Text: "Eu, {name}, autorizo {recipient} a partilhar as informações indicadas na Secção II deste documento com as pessoas ou organizações que indiquei na Secção III deste documento.",
      s2: "Secção II – Informações de saúde",
      s2Text: "Desejo autorizar a organização de saúde acima indicada a:",
      record: "Entregar o meu processo clínico completo, incluindo, entre outros, diagnósticos, resultados de análises, tratamentos e registos de faturação de todas as doenças.",
      s3: "Secção III – Quem pode receber as minhas informações de saúde",
      s3Text: "Autorizo que as informações de saúde detalhadas na secção II deste documento sejam partilhadas com as seguintes pessoas ou organizações:",
      s3Note: "Compreendo que as pessoas ou organizações acima indicadas podem não estar abrangidas pelas normas estaduais ou federais sobre privacidade e segurança dos dados e podem ser autorizadas a partilhar, por sua vez, as informações que lhes forem entregues.",
      s4: "Secção IV – Duração da autorização",
      s4Text: "Esta autorização para partilhar as minhas informações de saúde é válida por um ano a contar da data da assinatura.",
    },
    pl: {
      title: "Zgoda na udostępnienie danych medycznych dla Goral Assistance Germany",
      s1: "Część I",
      s1Text: "Ja, {name}, upoważniam {recipient} do udostępnienia informacji wymienionych w Części II tego dokumentu osobom lub organizacjom wskazanym przeze mnie w Części III tego dokumentu.",
      s2: "Część II – Informacje o zdrowiu",
      s2Text: "Chcę upoważnić powyższą placówkę ochrony zdrowia do:",
      record: "Udostępnienia mojej pełnej dokumentacji medycznej, w tym między innymi diagnoz, wyników badań laboratoryjnych, leczenia i dokumentów rozliczeniowych dotyczących wszystkich schorzeń.",
      s3: "Część III – Kto może otrzymać informacje o moim zdrowiu",
      s3Text: "Upoważniam do udostępnienia informacji o zdrowiu, opisanych w części II tego dokumentu, następującym osobom lub organizacjom:",
      s3Note: "Rozumiem, że wymienione wyżej osoby lub organizacje mogą nie podlegać przepisom stanowym/federalnym o ochronie prywatności i bezpieczeństwie danych oraz że mogą mieć prawo przekazywać dalej otrzymane informacje.",
      s4: "Część IV – Okres ważności upoważnienia",
      s4Text: "To upoważnienie do udostępniania informacji o moim zdrowiu jest ważne przez rok od daty podpisu.",
    },
  },

  // version 02, the reworked form
  "02": {
    es: {
      title: "Liberación del secreto médico, intercambio de datos y consentimiento a la telemedicina",
      s1: "1. Liberación del secreto médico",
      s1Text: "Por la presente libero al profesional sanitario arriba indicado, incluido su equipo y el personal médico participante, del secreto médico legal. Quedan autorizados a compartir mis datos médicos y de facturación exclusivamente con:",
      s1After: "Ningún otro tercero recibirá mis datos, salvo que lo exija la ley o sea necesario para una atención médica posterior organizada en mi nombre.",
      s2: "2. Qué datos",
      s2Text: "Mi nombre, fecha de nacimiento, datos de contacto y ubicación actual; datos de verificación de identidad; síntomas, antecedentes médicos relevantes, diagnósticos, resultados de laboratorio e imagen, registros de tratamiento y consulta; recetas, informes médicos (MR) y facturas detalladas (incluida la atención posterior relacionada).",
      s3: "3. Para qué",
      s3Text: "Para verificar mi identidad, organizar y llevar a cabo mi tratamiento médico, emitir una garantía de pago (GOP), comprobar la cobertura del seguro, liquidar las facturas médicas directamente con el profesional y, si es necesario, organizar más atención, recetas, hospitalización o el traslado médico a mi país.",
      s4: "4. Comunicación por correo electrónico y consentimiento opcional a la telemedicina",
      s4Email: "Envío por correo electrónico: Acepto que los informes médicos, las recetas y las facturas puedan enviarse electrónicamente (p. ej., por correo electrónico o portal del paciente) entre el profesional, Goral Assistance y yo. Sé que el correo electrónico habitual sin cifrar no es totalmente seguro.",
      telehealth: "Opcional – Consulta de telemedicina (marque solo si su consulta es por videollamada o teléfono): Acepto el tratamiento por videollamada o teléfono. Entiendo que una consulta a distancia tiene limitaciones diagnósticas frente a una exploración física presencial, y confirmo que durante la teleconsulta me encuentro físicamente en la ubicación actual indicada arriba.",
      s5: "5. Mi decisión y mis derechos de protección de datos",
      s5Items: [
        "Mi consentimiento es voluntario y válido para este caso y la atención posterior relacionada durante un máximo de 12 meses.",
        "Puedo retirar mi consentimiento en cualquier momento, con efecto futuro, por correo electrónico o carta al profesional o a Goral Assistance. Los datos compartidos antes de la retirada siguen habiéndose compartido legalmente.",
        "Sin consentimiento, mi seguro podría no pagar directamente; en ese caso pagaré yo mismo la factura médica.",
        "Puedo solicitar el acceso, la rectificación o la supresión de mis datos (dentro de los límites legales) y presentar una reclamación ante una autoridad de control de protección de datos competente (p. ej., LDI NRW, Düsseldorf).",
        "Soy consciente de que, según la ley alemana, el médico debe conservar la documentación clínica durante 10 años.",
      ],
      s6: "6. Confirmación",
      s6Text: "He leído y entendido este formulario y estoy de acuerdo.",
      digital: "Confirmación digital / verbal (si no firmo en papel): Confirmo mi consentimiento de forma digital (por correo electrónico, mensaje o confirmación en línea) o verbalmente durante la videoconsulta documentada. En ese caso no se requiere firma manuscrita.",
    },
    pt: {
      title: "Dispensa do sigilo médico, partilha de dados e consentimento para telemedicina",
      s1: "1. Dispensa do sigilo médico",
      s1Text: "Pelo presente dispenso o prestador de cuidados de saúde acima indicado, incluindo a sua equipa e o pessoal médico envolvido, do sigilo médico legal. Ficam autorizados a partilhar os meus dados médicos e de faturação exclusivamente com:",
      s1After: "Nenhum outro terceiro receberá os meus dados, salvo se a lei o exigir ou se for necessário para cuidados médicos de seguimento organizados em meu nome.",
      s2: "2. Que dados",
      s2Text: "O meu nome, data de nascimento, contactos e localização atual; dados de verificação de identidade; sintomas, historial médico relevante, diagnósticos, resultados laboratoriais e de imagem, registos de tratamento e consulta; receitas, relatórios médicos (MR) e faturas detalhadas (incluindo cuidados de seguimento relacionados).",
      s3: "3. Para quê",
      s3Text: "Para verificar a minha identidade, organizar e realizar o meu tratamento médico, emitir uma garantia de pagamento (GOP), verificar a cobertura do seguro, liquidar as faturas médicas diretamente com o prestador e, se necessário, organizar mais cuidados, receitas, internamento ou o transporte médico de regresso a casa.",
      s4: "4. Comunicação por e-mail e consentimento opcional para telemedicina",
      s4Email: "Envio por e-mail: Concordo que relatórios médicos, receitas e faturas possam ser enviados eletronicamente (p. ex., por e-mail ou portal do paciente) entre o prestador, a Goral Assistance e mim. Sei que o e-mail comum, sem cifragem, não é totalmente seguro.",
      telehealth: "Opcional – Consulta de telemedicina (assinale apenas se a sua consulta for por videochamada ou telefone): Concordo com o tratamento por videochamada ou telefone. Compreendo que uma consulta à distância tem limitações de diagnóstico em comparação com um exame físico presencial e confirmo que, durante a teleconsulta, me encontro fisicamente na localização atual indicada acima.",
      s5: "5. A minha escolha e os meus direitos de proteção de dados",
      s5Items: [
        "O meu consentimento é voluntário e válido para este caso e para os cuidados de seguimento relacionados durante, no máximo, 12 meses.",
        "Posso retirar o meu consentimento a qualquer momento, com efeito para o futuro, por e-mail ou carta ao prestador ou à Goral Assistance. Os dados partilhados antes da retirada continuam a ter sido partilhados legalmente.",
        "Sem consentimento, o meu seguro pode não pagar diretamente; nesse caso, pagarei eu próprio a fatura médica.",
        "Posso solicitar o acesso, a retificação ou o apagamento dos meus dados (dentro dos limites legais) e apresentar reclamação a uma autoridade de controlo de proteção de dados competente (p. ex., LDI NRW, Düsseldorf).",
        "Reconheço que, segundo a lei alemã, o médico tem de conservar os registos clínicos durante 10 anos.",
      ],
      s6: "6. Confirmação",
      s6Text: "Li e compreendi este formulário e estou de acordo.",
      digital: "Confirmação digital / verbal (se não assinar em papel): Confirmo o meu consentimento digitalmente (por e-mail, mensagem ou confirmação online) ou verbalmente durante a videoconsulta documentada. Nesse caso não é necessária assinatura manuscrita.",
    },
    pl: {
      title: "Zwolnienie z tajemnicy lekarskiej, udostępnianie danych i zgoda na telemedycynę",
      s1: "1. Zwolnienie z tajemnicy lekarskiej",
      s1Text: "Niniejszym zwalniam wyżej wymienionego świadczeniodawcę, w tym jego zespół oraz zaangażowany personel medyczny, z ustawowej tajemnicy lekarskiej. Mogą oni udostępniać moje dane medyczne i rozliczeniowe wyłącznie:",
      s1After: "Żadne inne osoby trzecie nie otrzymają moich danych, chyba że wymaga tego prawo albo jest to konieczne dla dalszej opieki medycznej organizowanej w moim imieniu.",
      s2: "2. Jakie dane",
      s2Text: "Moje imię i nazwisko, data urodzenia, dane kontaktowe i aktualne miejsce pobytu; dane do weryfikacji tożsamości; objawy, istotny wywiad medyczny, diagnozy, wyniki badań laboratoryjnych i obrazowych, dokumentacja leczenia i konsultacji; recepty, raporty medyczne (MR) i szczegółowe faktury (w tym dotyczące związanej z tym dalszej opieki).",
      s3: "3. W jakim celu",
      s3Text: "Aby zweryfikować moją tożsamość, zorganizować i przeprowadzić moje leczenie, wystawić gwarancję pokrycia kosztów (GOP), sprawdzić zakres ubezpieczenia, rozliczać rachunki medyczne bezpośrednio ze świadczeniodawcą oraz, w razie potrzeby, zorganizować dalszą opiekę, recepty, hospitalizację lub transport medyczny do domu.",
      s4: "4. Komunikacja e-mailowa i dobrowolna zgoda na telemedycynę",
      s4Email: "Przesyłanie e-mailem: Zgadzam się, aby raporty medyczne, recepty i faktury były przesyłane elektronicznie (np. e-mailem lub przez portal pacjenta) między świadczeniodawcą, Goral Assistance i mną. Wiem, że zwykły, niezaszyfrowany e-mail nie jest w pełni bezpieczny.",
      telehealth: "Opcjonalnie – Konsultacja telemedyczna (zaznacz tylko, jeśli konsultacja odbywa się przez wideorozmowę lub telefon): Zgadzam się na leczenie przez wideorozmowę lub telefon. Rozumiem, że konsultacja na odległość ma ograniczenia diagnostyczne w porównaniu z badaniem fizykalnym na miejscu, i potwierdzam, że podczas teleporady fizycznie przebywam w podanym wyżej aktualnym miejscu pobytu.",
      s5: "5. Mój wybór i prawa dotyczące ochrony danych",
      s5Items: [
        "Moja zgoda jest dobrowolna i ważna dla tej sprawy oraz związanej z nią dalszej opieki przez maksymalnie 12 miesięcy.",
        "Mogę w każdej chwili wycofać zgodę ze skutkiem na przyszłość, e-mailem lub listem do świadczeniodawcy albo do Goral Assistance. Dane udostępnione przed wycofaniem zgody pozostają udostępnione zgodnie z prawem.",
        "Bez zgody moje ubezpieczenie może nie zapłacić bezpośrednio; w takim przypadku sam(a) pokryję rachunek medyczny.",
        "Mogę żądać dostępu do moich danych, ich sprostowania lub usunięcia (w granicach prawa) oraz wnieść skargę do właściwego organu nadzorczego ds. ochrony danych (np. LDI NRW, Düsseldorf).",
        "Przyjmuję do wiadomości, że według prawa niemieckiego lekarz musi przechowywać dokumentację medyczną przez 10 lat.",
      ],
      s6: "6. Potwierdzenie",
      s6Text: "Przeczytałem/am i zrozumiałem/am ten formularz oraz wyrażam zgodę.",
      digital: "Potwierdzenie cyfrowe / ustne (jeśli nie podpisuję na papierze): Potwierdzam zgodę cyfrowo (e-mailem, wiadomością lub potwierdzeniem online) albo ustnie podczas udokumentowanej wideokonsultacji. Podpis odręczny nie jest wtedy wymagany.",
    },
  },
};
