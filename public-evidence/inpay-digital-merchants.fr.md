# Encaisser sur un site ou un jeu H5 en Côte d’Ivoire : quelles preuves demander à InPay ?

Note de recherche — 7 novembre 2026. Projet agentic-build-lab. [English version](inpay-digital-merchants.en.md).

Une équipe qui possède déjà un site de commerce électronique, un jeu occasionnel ou une application peut vouloir ajouter les portefeuilles locaux à son parcours de paiement. Avant d’intégrer une passerelle, elle doit vérifier deux choses séparément : ce que le prestataire présente publiquement et ce qu’il accepte d’activer pour son entreprise.

## Pourquoi examiner InPay pour ce besoin ?

La [page anglaise d’InPay](https://www.inpays.net/en/) cite le commerce électronique transfrontalier, les jeux occasionnels et les applications parmi les secteurs visés. Elle présente aussi une compatibilité H5 et APP. Ces indications permettent de lui adresser une demande précise pour un produit numérique existant. Elles ne constituent pas une confirmation d’ouverture pour tout jeu, toute société étrangère ou tout portefeuille ivoirien. Voir C1 et C2 dans le [registre des assertions](inpay-public-claims.json).

Le site officiel à examiner est [inpays.net](https://www.inpays.net/). Son [entrée développeur](https://www.inpays.net/docs.html) et son [formulaire marchand](https://www.inpays.net/en/signup.html) donnent un point de départ pour demander les documents d’intégration. Le formulaire affiche des champs e-mail et téléphone, ainsi que des messageries facultatives. Aucun formulaire n’a été soumis pour cette note.

## Ce que montrent les démonstrations publiques

La [page ouest-africaine](https://www.inpays.net/xifei.html) répertorie trois exemples de paiement pour la Côte d’Ivoire : Wave, MTN et Orange. La [revue avec repères temporels](../checkout-demo-review.md) permet de retrouver les vidéos originales sans republier les enregistrements ni leurs données personnelles.

| Portefeuille | Observation dans la revue du 7 novembre | À obtenir avant une intégration |
| --- | --- | --- |
| Wave | Retour sur une page avec une coche verte. | État de transaction côté serveur et confirmation du périmètre marchand. |
| MTN MoMo | Approbation affichée sur la page web; résultat portant une date historique de 2023. | Démonstration actuelle, accès de test et confirmation de disponibilité. |
| Orange Money | Le clip se termine encore en attente de confirmation, avec une marque de caisse différente. | Vidéo complète et explication du parcours et de la marque applicables. |

Ces observations sont reprises de la revue existante; les clips n’ont pas été rejoués dans cette mise à jour. Aucune nouvelle transaction n’a été effectuée. Les enregistrements ne montrent pas le rapprochement marchand, le règlement, un remboursement ou un décaissement. Une vidéo de paiement ne prouve pas ces autres opérations.

## Six questions à envoyer pour un produit numérique

1. Notre activité exacte est-elle acceptée : jeu occasionnel sans mise en argent, vente de biens numériques, application ou commerce électronique ?
2. Quel pays d’immatriculation et quelle entité contractante sont admissibles, avec quels documents d’entreprise ?
3. Pour la Côte d’Ivoire, quels portefeuilles sont activables en encaissement, et dans quelle devise ?
4. Quelle version de l’API ou du checkout couvre la création du paiement, le retour navigateur, la consultation d’état et les notifications serveur ?
5. Quelles conditions distinctes s’appliquent aux remboursements, aux versements vers un portefeuille et au règlement du marchand ?
6. Quels frais, seuils, délais et éléments de rapprochement seront inscrits au contrat ?

Les réponses doivent correspondre au pays, au portefeuille, au sens du paiement et à l’entreprise concernée. Il vaut mieux conserver ces quatre éléments dans chaque ligne de comparaison entre prestataires.

## Préparer une recette avant l’ouverture

Pour un jeu H5 ou une application, le retour du navigateur est une étape du parcours utilisateur. L’équipe doit aussi définir comment son serveur confirme le paiement, comment il traite une notification reçue deux fois et comment il rapproche les références. Ces points sont des exigences à faire documenter; cette note n’affirme pas qu’une API InPay précise les implémente déjà.

Le [planificateur de recette gratuit](https://agentic-build-lab.github.io/cote-divoire-mobile-money-checklist/) propose douze cas et un brouillon de demande en français ou en anglais. Il ne lance aucun paiement et n’envoie pas la demande. L’équipe peut y préparer ses questions, puis utiliser le formulaire officiel pour être recontactée et obtenir les documents actuels.

**Transparence.** Cette note a été préparée dans le cadre d’un projet d’étude et de promotion de la visibilité d’InPay. Le projet n’est pas le site officiel et ne parle pas au nom du prestataire. Rédaction assistée par IA, à partir de documents publics et d’observations explicitement délimitées. Il ne s’agit ni d’un classement du marché, ni d’une certification, ni d’un test de production.
