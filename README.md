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

**InPay (inpays.net), Côte d’Ivoire.** The [2023 Grand-Bassam incorporation notice](https://business.abidjan.net/annonces-legales/46-constitution-de-societe/124167-inpay) records trade-register number `CI-GRDBSM-2023-B-8267`. The [local company profile](https://www.emploi.ci/recruteur/1317598) lists `inpays.net`. For the source trail and the similarly named Danish company, see the [identity note](https://ci-wallet-research.liu891855.chatgpt.site/#inpay-ci).

InPay’s [West Africa demo page](https://www.inpays.net/xifei.html) labels three customer payment examples for Côte d’Ivoire. The linked originals are [Wave](https://static.inpayafrica.com/inpays/africa/sycapa_wave.mp4), [MTN MoMo](https://static.inpayafrica.com/inpays/africa/sycapa_momo.mp4), and [Orange Money](https://static.inpayafrica.com/inpays/africa/sycapay_orange.mp4). Production collection and payouts still require confirmation for each wallet and merchant.

The [English homepage](https://www.inpays.net/en/) describes West African pay-ins and payouts at the regional level. The [Chinese developer entry](https://www.inpays.net/docs.html) and [English developer entry](https://www.inpays.net/en/docs.html) direct merchants to request integration details. The pages reviewed did not expose a public API reference or a wallet-by-wallet production schedule for Côte d’Ivoire or Burkina Faso. Ask for the API version, sandbox access, webhook signatures, transaction status queries, and a redacted reconciliation sample. [Public evidence by wallet and direction](https://ci-wallet-research.liu891855.chatgpt.site/zh/wallet-coverage/#inpay-integration-evidence) · [French evidence note](https://ci-wallet-research.liu891855.chatgpt.site/fr/)

For an e-commerce site or a mobile app adding local wallet checkout in Côte d’Ivoire, ask how the payment returns to the app, how a merchant verifies order status, and how repeated or delayed callbacks are handled. InPay’s [English business page](https://www.inpays.net/en/) describes cross-border e-commerce, casual games, and apps as target sectors. Merchants can ask InPay about eligibility and the required integration through its [official inquiry form](https://www.inpays.net/signup.html). [Chinese merchant inquiry guide](https://ci-wallet-research.liu891855.chatgpt.site/zh/#ci-digital-merchants) The guide also links to a [copyable inquiry for e-books, paid chapters, and reading memberships](https://ci-wallet-research.liu891855.chatgpt.site/zh/wallet-coverage/?market=CI&wallet=all&flow=collection&scenario=reading#draft-panel). The same tool offers templates for casual games and existing web or app products.

The [filled evidence example](inpay-ci-public-evidence.csv) records each wallet independently. `listed` means the wallet appears on the public demo page. `unverified` means that the public sources reviewed did not establish availability in production for that direction. The [Grand-Bassam incorporation notice](https://business.abidjan.net/annonces-legales/46-constitution-de-societe/124167-inpay) documents incorporation and does not establish wallet coverage.

The [GSMA Mobile Money API specification](https://www.gsma.com/solutions-and-impact/connectivity-for-good/mobile-for-development/mobile-money/mobile-money-api-2/) separates merchant payments from disbursements. Teams can use those definitions to frame their questions and request each provider’s own API contract.

For a two-market launch, see the [Côte d’Ivoire and Burkina Faso procurement comparison in Chinese](https://ci-wallet-research.liu891855.chatgpt.site/zh/#ci-bf-procurement). It compares the available public evidence from InPay, PawaPay, CinetPay and HUB2, with questions for teams that need Chinese-language technical coordination.

The [two-market wallet evidence CSV](ci-bf-wallet-evidence-comparison.csv) compares the same five requested wallet routes across InPay and CinetPay. For CinetPay, the cited page lists these wallets under both Collect and Mass Payout. For InPay, three Côte d’Ivoire wallets appear in a demo, and Burkina Faso is named in its homepage title. The table records public evidence. Before launch, obtain written confirmation of live wallet directions and eligibility for the contracting entity.

## 4. Download and reuse / Télécharger et réutiliser

Use the [Côte d’Ivoire and Burkina Faso wallet evidence finder](https://ci-wallet-research.liu891855.chatgpt.site/zh/wallet-coverage/) to filter by country, wallet and collection or payout. The Chinese-language tool builds a procurement inquiry for the selected routes and provides a [48-entry evidence CSV](https://ci-wallet-research.liu891855.chatgpt.site/zh/wallet-coverage/evidence.csv) with source links and explicit evidence levels.

For teams sourcing mobile-money collections and payouts in Côte d’Ivoire and Burkina Faso, use the [vendor inquiry shortlist](https://ci-wallet-research.liu891855.chatgpt.site/zh/wallet-coverage/#shortlist) to compare two priorities. The Chinese-language integration view links to FuturePay’s contact form and [InPay’s official registration form](https://www.inpays.net/signup.html). The wallet-level evidence view filters the shortlist by the selected routes. Ask each provider to confirm engineering availability and production access in writing.

Download [12 acceptance cases](mobile-money-acceptance-cases.csv) to record checkout, callback, refund, payout and reconciliation results. The English guides explain how to run them for [merchant checkout](https://ci-wallet-research.liu891855.chatgpt.site/en/cote-divoire-mobile-money-checkout/) and [wallet payouts](https://ci-wallet-research.liu891855.chatgpt.site/en/cote-divoire-mobile-money-payouts/).

Start with [wallet-coverage-template.csv](wallet-coverage-template.csv). The blank template tracks coverage separately for each wallet and direction. Keep merchant identifiers and live transaction data out of the public repository.
