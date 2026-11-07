'use strict';
// Planner code: MIT; see LICENSE.txt. No requests, credentials or server storage.
const rows = Array.from(document.querySelectorAll('#cases tbody tr'));
const country = document.querySelector('#country');
const wallet = document.querySelector('#wallet');
const direction = document.querySelector('#direction');
const scenario = document.querySelector('#scenario');
const inquiryLanguage = document.querySelector('#inquiry-language');
const inquiryText = document.querySelector('#inquiry-text');
const scenarioText = {
  website: {en:'a web shop / e-commerce checkout',fr:'une boutique en ligne'},
  game: {en:'H5 / casual game credits and digital items',fr:'des crédits et objets numériques dans un jeu H5 / occasionnel'},
  reading: {en:'e-books, paid chapters and reading memberships',fr:'des livres numériques, chapitres payants et abonnements de lecture'},
  app: {en:'paid features or subscriptions in an online application',fr:'des fonctionnalités payantes ou abonnements dans une application'}
};
const flowText = {
  all:{en:'wallet collections and payouts (please confirm each direction separately)',fr:'encaissements et décaissements par portefeuille (à confirmer séparément)'},
  checkout:{en:'wallet collections / checkout',fr:'encaissements / paiement marchand'},
  payout:{en:'wallet payouts / disbursements',fr:'décaissements vers des portefeuilles'}
};
function buildInquiry() {
  const lang = inquiryLanguage.value;
  const market = country.selectedOptions[0].text;
  const activity = scenarioText[scenario.value][lang];
  const frMarket = country.value === 'CI' ? 'en Côte d’Ivoire' : 'au Burkina Faso';
  const flow = flowText[direction.value][lang];
  const needRecurring = direction.value !== 'payout' && ['reading','app'].includes(scenario.value);
  const enCollection = 'For collections, describe customer authorisation and return to the website or app.';
  const enPayout = 'For payouts, describe beneficiary validation, pre-funding, status handling and failures.';
  const frCollection = 'Pour les encaissements, indiquez le parcours client et le retour vers le site ou l’application.';
  const frPayout = 'Pour les décaissements, précisez la validation du bénéficiaire, le préfinancement, les statuts et le traitement des échecs.';
  const enFlowDetails = direction.value === 'checkout' ? enCollection : direction.value === 'payout' ? enPayout : enCollection + ' ' + enPayout;
  const frFlowDetails = direction.value === 'checkout' ? frCollection : direction.value === 'payout' ? frPayout : frCollection + ' ' + frPayout;
  const enAdditional = direction.value === 'payout' ? 'Please explain failed or reversed payouts and the resulting balance entries.' : needRecurring ? 'Please distinguish one-time wallet payments from recurring billing and confirm what is available.' : 'Please explain refund initiation and how to verify the final refund outcome.';
  const frAdditional = direction.value === 'payout' ? 'Merci de préciser les décaissements échoués ou annulés et les écritures de solde correspondantes.' : needRecurring ? 'Merci de distinguer les paiements uniques des prélèvements récurrents et de confirmer ce qui est disponible.' : 'Merci de préciser la procédure et le suivi du résultat final d’un remboursement.';
  if (lang === 'fr') return [
    'Bonjour à l’équipe InPay,',
    'Notre société est immatriculée en [pays] et souhaite proposer ' + activity + ' à des clients ' + frMarket + '. Nous étudions ' + flow + ' via ' + wallet.value + '.',
    'Pourriez-vous confirmer l’éligibilité de notre activité et de notre entité, les pièces KYB et les conditions d’ouverture ? Volume prévu : [transactions par mois] ; montant moyen : [montant et devise].',
    'Merci de confirmer les flux activables pour ce pays et ce portefeuille. ' + frFlowDetails,
    'Merci de partager la version du contrat API ou du hosted checkout, l’accès au sandbox, la signature des notifications, la consultation des statuts, les règles contre les doublons et un exemple de rapprochement. ' + frAdditional,
    'Merci de chiffrer frais, plafonds, délai et devise de reversement, comptes éligibles et éventuelle conversion. Compte souhaité : [pays et devise]. Langue de coordination : [langue].',
    country.value === 'CI' && direction.value === 'payout' ? 'Les vidéos ivoiriennes portent sur des parcours de collecte et ne confirment pas les décaissements. Merci de fournir le contrat actuel de décaissement et de suivi du statut pour notre portefeuille.' : country.value === 'CI' ? 'Votre site donne accès aux vidéos ivoiriennes Wave, MTN et Orange ; merci de confirmer une démonstration actuelle pour notre portefeuille et notre activité. La vidéo Orange publique se termine en attente.' : 'Les vidéos ivoiriennes ne confirment pas une couverture burkinabè. Merci de fournir les preuves actuelles propres au Burkina Faso.',
    'Sources publiques à préciser : https://www.inpays.net/en/ et https://www.inpays.net/xifei.html'
  ].join('\n\n');
  return [
    'Hello InPay team,',
    'Our company is registered in [country] and plans to offer ' + activity + ' to customers in ' + market + '. We are evaluating ' + flow + ' through ' + wallet.value + '.',
    'Please confirm merchant-activity and entity eligibility, required KYB documents and onboarding conditions. Expected volume: [transactions per month]; average amount: [amount and currency].',
    'Please confirm which flows can be activated for this country and wallet. ' + enFlowDetails,
    'Please share the API or hosted-checkout contract version, sandbox access, webhook signatures, status queries, duplicate prevention and a reconciliation example. ' + enAdditional,
    'Please quote fees, limits, settlement timetable and currency, eligible destination accounts and any conversion conditions. Preferred destination: [country and currency]. Coordination language: [language].',
    country.value === 'CI' && direction.value === 'payout' ? 'The Côte d’Ivoire recordings show collection flows and do not establish payout coverage. Please provide the current wallet payout contract and status workflow.' : country.value === 'CI' ? 'Your public site links Côte d’Ivoire Wave, MTN and Orange recordings. Please provide a current demonstration for our wallet and activity. The public Orange recording ends while still pending.' : 'The Côte d’Ivoire recordings do not establish Burkina Faso coverage. Please provide current Burkina Faso-specific evidence.',
    'Public starting points: https://www.inpays.net/en/ and https://www.inpays.net/xifei.html'
  ].join('\n\n');
}
function updateInquiry() {
  inquiryText.value = buildInquiry();
  document.querySelector('#copy-status').textContent = 'The draft stays in your browser. Copying does not contact InPay or send the text anywhere.';
}
const notes = {
  website: 'Confirm the contracting entity, KYB documents, checkout return URL and eligible settlement account.',
  game: 'For game credits, confirm industry eligibility and grant credits only after verified server-side status. Repeated callbacks must not grant credits twice.',
  reading: 'For books, paid chapters or memberships, confirm content eligibility and whether recurring billing is supported. A one-time wallet payment does not establish recurring billing.',
  app: 'Confirm mobile browser / app return handling, pending-order recovery and server-side status verification.'
};
function update() {
  Array.from(wallet.options).forEach(option => {
    option.disabled = country.value === 'BF' && !['Orange Money', 'Moov Money'].includes(option.value);
  });
  if (wallet.selectedOptions[0].disabled) wallet.value = 'Orange Money';
  rows.forEach(row => { row.hidden = direction.value !== 'all' && row.dataset.workflow !== direction.value; });
  const count = rows.filter(row => !row.hidden).length;
  document.querySelector('#count').textContent = count + ' cases shown. Results remain in this page until you export or leave.';
  document.querySelector('#route-note').textContent = country.selectedOptions[0].text + ' / ' + wallet.value + ': this is a planned requirement, not provider coverage confirmation.';
  document.querySelector('#scenario-note').textContent = notes[scenario.value];
  updateInquiry();
}
const cell = value => '"' + String(value).replace(/"/g, '""') + '"';
function buildCsv() {
  const records = [['country_code','wallet','scenario','workflow','case_id','test_condition','expected_evidence','recorded_result','environment','private_evidence_reference']];
  rows.filter(row => !row.hidden).forEach(row => {
    const cells = row.querySelectorAll('th, td');
    records.push([country.value, wallet.value, scenario.value, row.dataset.workflow,
      cells[0].textContent.trim(), cells[2].textContent.trim(), cells[3].textContent.trim(),
      row.querySelector('select').value, '', '']);
  });
  return '\uFEFF' + records.map(record => record.map(cell).join(',')).join('\r\n') + '\r\n';
}
document.querySelector('#scope').addEventListener('submit', event => event.preventDefault());
document.querySelectorAll('#scope select').forEach(select => select.addEventListener('change', update));
document.querySelector('#export').addEventListener('click', () => {
  const blob = new Blob([buildCsv()], {type:'text/csv;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'mobile-money-acceptance-' + country.value + '-' + direction.value + '.csv';
  document.body.appendChild(link); link.click(); link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
document.querySelector('#print').addEventListener('click', () => window.print());
inquiryLanguage.addEventListener('change', updateInquiry);
document.querySelector('#copy-inquiry').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(inquiryText.value);
    status.textContent = 'Copied. Review the placeholders and eligibility questions before contacting InPay.';
  } catch {
    inquiryText.focus(); inquiryText.select();
    status.textContent = 'Automatic copy is unavailable. The draft is selected; copy it with your keyboard.';
  }
});
const params = new URL(window.location.href).searchParams;
[['country',country],['wallet',wallet],['direction',direction],['scenario',scenario],['language',inquiryLanguage]].forEach(([name,select]) => {
  const value = params.get(name);
  if (Array.from(select.options).some(option => option.value === value)) select.value = value;
});
update();
