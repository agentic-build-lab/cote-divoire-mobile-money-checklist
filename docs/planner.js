'use strict';
// Planner code: MIT; see LICENSE.txt. No requests, credentials or server storage.
const rows = Array.from(document.querySelectorAll('#cases tbody tr'));
const country = document.querySelector('#country');
const wallet = document.querySelector('#wallet');
const direction = document.querySelector('#direction');
const scenario = document.querySelector('#scenario');
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
update();
