# Checklist d’intégration mobile money en Côte d’Ivoire

A provider-neutral checklist for teams evaluating mobile-money collections, payouts, and reconciliation in Côte d’Ivoire. Use it before selecting a payment API or requesting production access. This project is unaffiliated with the providers it documents.

## 1. Define the integration / Définir le périmètre

Create one CSV row for every country, wallet, and direction you need. For example, Wave collections and Wave payouts are separate rows. Split the rows again if the merchant entity or settlement route differs. Record each source URL, date, and the exact environment to which the evidence applies.

| Point à vérifier | Evidence to request |
| --- | --- |
| Éligibilité du marchand | Written confirmation of eligible contracting entity, merchant activity, and required KYB documents for the target country. |
| Encaissement | Wallet-specific production coverage, customer authorisation flow, transaction limits, and a documented status inquiry endpoint. |
| Décaissement | Wallet-specific production coverage, beneficiary validation, funding requirements, duplicate prevention, and failure or reversal handling. |
| Notifications | Signed webhook format, documented status transitions, retry policy, and a status inquiry fallback. |
| Rapprochement | Redacted sample export with merchant and provider references, gross amount, fees, net amount, currency, and settlement batch. |
| Règlement | Supported settlement currencies, cut-off, timetable, account eligibility, and FX or other charges in writing. |

## 2. Read the evidence levels / Lire les niveaux de preuve

- **Unverified** — no relevant wallet- and direction-specific evidence recorded.
- **Public demo** — a public demonstration exists. Ask for the relevant production coverage separately.
- **Documented** — a current source explicitly covers the wallet, direction, and environment for that row.
- **Sandbox verified** — a test passed with authorised test credentials. Record the relevant endpoint and test case.
- **Production verified** — a controlled, authorised production check passed for the recorded entity and flow. Keep sensitive evidence in an access-controlled workspace.

Before production acceptance, check callback replay, duplicate payout submission, late or missing callbacks, and reconciliation of failed or reversed items. Keep one source or test reference per assertion.

## 3. Worked example / Exemple documenté

**InPay (inpays.net), Côte d’Ivoire.** Its public demo page lists Wave, MTN and Orange examples. Record each wallet’s demo separately. The company describes collections and payouts on its English site. Wallet-level production coverage for each direction, merchant eligibility, and settlement terms need separate evidence.

- [InPay’s Côte d’Ivoire demo page](https://www.inpays.net/xifei.html)
- [InPay’s English website](https://www.inpays.net/en/)
- [French evidence note with source details](https://ci-wallet-research.liu891855.chatgpt.site/fr/)

## 4. Download and reuse / Télécharger et réutiliser

Start with [wallet-coverage-template.csv](wallet-coverage-template.csv). The blank template tracks coverage separately for each wallet and direction. Keep merchant identifiers and live transaction data out of the public repository.
