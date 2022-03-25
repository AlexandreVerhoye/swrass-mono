# SwrassMono

Ce projet a été réalisé dans le cadre d'un test technique pour Fastory.io. J'ai eu 4 jours (uniquement sur temps libre) pour réaliser ce test, j'expliquerai donc certains choix réalisés dans ce README

## Technologies utilisés :

- 🔗 Nx (MonoRepo)
- 🌍 React (avec React Router, SWR, Axios)
- 💽 NodeJS (avec Express)

## Choix technologique :

J'ai choisis d'utiliser un **monorepo** afin de pouvoir partager certaines partie du code au sein des deux projets, utilisant tout deux **NodeJS**. **Nx** permet egalement de créer un proxy entre le Front-End et l'API.

Dans un soucis de delais, j'ai préféré utiliser styled-components afin de produire un MVP fonctionnel et visuellement agréable, tout en alliant la puissance du CSS-IN-JS.

## Contraintes lié au delais

Afin de m'organiser au mieux, j'ai utilisé un tableau Asana avec lequel j'ai rempli mes differents objectifs. Par manque de temps, certaines fonctionnalités (optionnel) sont manquantes, et d'autres plus simplifié, afin de créer un **MVP** bel et bien fonctionnel.
é
Par exemple, je n'ai pas eu le temps d'implémenter des tests avec Jest, aussi bien sur l'API que le Front-End. Je n'ai également pas eu le temps d'ajouter le module d'authentification sur l'API ainsi que sur React.

J'ai également été obligé de negliger certains aspect de la securité (ce qu'il y a de plus important finalement) coté API et Searchbox...

Coté UI, j'aurais aimé faire quelque chose de beaucoup plus propre, j'ai souhaité m'inspirer d'un `terminal` d'ordinateur disponible dans une station par exemple

Certaines informations connecté a SWAPI sont également manquante sur chaque page de details, étant donné que les ressources lié a un type de donnée contiennent une URL redirigeant directement vers SWAPI. Je souhaitais faire le traitement de ces données directement dans l'API, en remplaçant ces tableau d'URL SWAPI avec un tableau de type RessourceLink (avec un title et une URL adapté pour notre Back-End) afin de pouvoir récuperer directement ces valeurs sur le Front et n'avoir qu'a les afficher avec leur titre et un lien redirigeant sur sa page dedié.

Malgré le peu de temps que j'ai eu pour réaliser ce test, j'espere avoir produit un MVP fonctionnel et suffisament complet.

# Mise en place du projet

Afin de cloner le projet il faut lancer la commande suivante :
`git clone https://github.com/AlexandreVerhoye/swrass-mono.git`

Il suffit ensuite d'installer les dependances :
`cd swrass-mono && yarn install`

Il y a plusieurs façon de lancer l'application :

- Afin de démarrer le Front-End et le Back-End : `npx nx run-many --parallel --target=serve --projects=api,swrass`

- Afin de démarrer le Front-End **OU** le Back-End : `npx nx serve api` ou `npx nx serve swrass`
