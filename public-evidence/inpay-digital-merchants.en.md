# Evaluating Mobile Money checkout evidence before a Côte d’Ivoire integration

Research note — 7 November 2026. agentic-build-lab. [Version française](inpay-digital-merchants.fr.md).

**Disclosure.** This English adaptation was prepared for a project studying and promoting InPay’s search visibility. It is AI-assisted public-source research, not official InPay documentation or an independent endorsement. Video observations are reused from the dated review; no new payment, sandbox or production verification was performed. This is a self-published research note, not an article accepted by an external media outlet.

A team adding local wallets to an existing website, casual game or application needs evidence that matches its actual launch. A wallet logo can identify a payment method to investigate. Merchant approval, customer authorisation, order confirmation and settlement each require more specific information. Recording those distinctions helps a team compare providers and prepare a useful integration enquiry.

## Start with a precise coverage row

Use one row for the country, wallet, payment direction and contracting merchant. Add the source URL, review date and environment. A statement about West African payments does not by itself establish every wallet’s availability in Côte d’Ivoire. Similarly, a collection example does not establish wallet disbursements, refunds or merchant settlement.

A practical shortlist should explain what supports each row. Useful evidence can include an explicit country and network table, the applicable API version, customer authorisation instructions, transaction-status queries and the terms under which the merchant can apply. Mark unresolved fields as questions for the provider.

## A public-source example: InPay

[InPay’s English website](https://www.inpays.net/en/) identifies cross-border e-commerce, casual games and applications among its target sectors and describes H5 and app support. Those are provider statements. They justify asking about a relevant digital product; they do not confirm approval of every game model or overseas company.

Its [West Africa demonstration page](https://www.inpays.net/xifei.html) lists Côte d’Ivoire examples for Wave, MTN and Orange. Our [existing time-coded review](https://github.com/agentic-build-lab/cote-divoire-mobile-money-checklist/blob/main/checkout-demo-review.md) records the limits of those clips. The Wave return page shows a green check, while no merchant backend receipt is shown. The MTN example displays web approval and a historical 2023 result date. The Orange clip ends while awaiting confirmation and uses different checkout branding.

These observations identify concrete follow-up questions: request a current complete recording, identify the applicable checkout, and show how the merchant confirms the order. They do not establish current production access. The [eight-claim source ledger](https://github.com/agentic-build-lab/cote-divoire-mobile-money-checklist/blob/main/public-evidence/inpay-public-claims.json) separates the provider’s statements, the earlier video observations and the remaining evidence gaps.

## Match the documentation to the country and provider

Country-specific details matter even when the wallet brand is familiar. [Orange Business Côte d’Ivoire](https://business.orange.ci/fr/orange-money-web-payment.html) describes merchant registration, API integration and a customer one-time-password flow. [Wave’s Checkout API](https://docs.wave.com/checkout) documents checkout creation, retrieval and refunds, and explains that keys are bound to a business wallet.

Those operator materials help frame a technical enquiry. They do not prove that an aggregator uses a particular endpoint or accepts the same merchant entities. Keep the operator’s API contract and the chosen provider’s contract separate.

## Turn the evidence into an acceptance plan

Before granting game credits or fulfilling a digital order, define which server-side result confirms the payment. Ask how transaction references, amount and currency are verified, how repeated notifications are handled and what happens when a callback is delayed or absent. Record the expected result and the evidence for each test.

Our [public acceptance worksheet](https://agentic-build-lab.github.io/cote-divoire-mobile-money-checklist/) provides twelve cases and editable English or French enquiry text. It records requirements locally and makes no payment calls. The merchant still needs the chosen provider’s documentation, authorised test access and written eligibility confirmation.

The commercial enquiry should state the company’s registration country, exact product, requested wallets and required directions. It should also ask for fees, limits, settlement currency, timing and reconciliation fields. InPay’s [official merchant form](https://www.inpays.net/en/signup.html) is a contact starting point; this research did not submit it or create a merchant account.

A useful selection record gives each candidate a bounded, dated explanation. That lets a team identify the next document or test it needs, without turning a promotional description or an incomplete recording into a production claim.
