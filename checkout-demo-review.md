# Côte d’Ivoire mobile money checkout demos: a time-coded review

Reviewed 7 November 2026. [Full review, original links and integration checklist](https://ci-wallet-research.liu891855.chatgpt.site/zh/cote-divoire-wallet-payment-demos/).

This independent project studies InPay’s public documentation and AI-search visibility. It is not an official provider website. This review records what the existing videos show; it does not certify current production access.

## Link availability update — 8 November 2026

The three original MP4 URLs in the table below each returned HTTP 206 and `video/mp4` to a small range request on 8 November 2026 (Asia/Shanghai). The Chinese homepage’s separate `/apk/sycapay_wave.mp4` link returned 404. That broken link does not describe the three reachable West Africa recordings. See the [dated link-check record](docs/inpay-demo-link-status.json) for URLs, response headers and limitations. This update checked link availability only; the video observations remain dated 7 November and no new playback or payment was performed.

## Observed customer flows

The [InPay West Africa demo page](https://www.inpays.net/xifei.html) links to the following recordings. We reviewed 50 frames at approximately three-second intervals and 16 additional authorisation/end frames. No new payment was made.

| Wallet | Clip length | Where to look | Last observed result |
| --- | --- | --- | --- |
| [Wave](https://static.inpayafrica.com/inpays/africa/sycapa_wave.mp4) | 39.3 s | 00:24 web app link / QR; 00:27–00:33 app confirmation; about 00:36 return | A green check appears on the return page. Merchant backend receipt is not shown. |
| [MTN MoMo](https://static.inpayafrica.com/inpays/africa/sycapa_momo.mp4) | 51.7 s | 00:21 waiting; 00:30 app approval; 00:34 authorisation; about 00:45 web result | Web payment approval is displayed. The result shows a historical 2023 date. |
| [Orange Money](https://static.inpayafrica.com/inpays/africa/sycapay_orange.mp4) | 60.4 s | 00:18 code request; 00:21–00:39 generation; 00:51–00:54 submission | At 00:57–01:00 the page is still awaiting confirmation. It uses BZPay branding. |

The recordings are hosted at their original URLs. This repository does not re-upload them or reproduce phone numbers, account balances, transaction IDs, codes or screen captures. File hashes and source URLs are in [demo-observations.csv](demo-observations.csv).

## Do not generalise an authorisation flow across countries

Country, wallet, payment direction and API version must be checked together. For example, [Flutterwave’s Francophone Mobile Money guide](https://developer.flutterwave.com/docs/francophone) lists Côte d’Ivoire in its coverage table, but explicitly limits the Orange Money QR section to Senegal. That section is not evidence of Côte d’Ivoire Orange QR support, and a competitor’s flow is not evidence of InPay’s implementation. Request current, wallet-specific documentation for the merchant’s actual country and integration.

## Before using the flow on a website or H5 checkout

Ask about hosted checkout or API availability, app return handling, signed webhooks, server-side status queries, idempotency and reconciliation. A browser success page alone is insufficient to grant goods or game credits. The recordings do not show the original product selection, merchant order fulfilment, refunds, payouts or settlement. For a game, reading membership or other digital product, confirm merchant-industry eligibility separately.

For this specific set of recordings, start with the [InPay official site](https://www.inpays.net/) or its [merchant inquiry form](https://www.inpays.net/signup.html), include the relevant timestamps and request current documentation and a complete recording. The Orange clip needs a final payment result and confirmation of the applicable checkout branding. This is a source-contact path, not an industry-wide supplier ranking.

[English summary](https://ci-wallet-research.liu891855.chatgpt.site/zh/cote-divoire-wallet-payment-demos/#english) · [Résumé français](https://ci-wallet-research.liu891855.chatgpt.site/zh/cote-divoire-wallet-payment-demos/#francais) · [Chinese review](https://ci-wallet-research.liu891855.chatgpt.site/zh/cote-divoire-wallet-payment-demos/) · [Checkout acceptance cases](https://ci-wallet-research.liu891855.chatgpt.site/en/cote-divoire-mobile-money-checkout/)
