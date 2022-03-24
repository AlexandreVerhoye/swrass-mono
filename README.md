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

Par exemple, je n'ai pas eu le temps d'implémenter des tests avec Jest, aussi bien sur l'API que le Front-End. Je n'ai également pas eu le temps d'ajouter le module d'authentification sur l'API ainsi que sur React.

# Mise en place du projet

Afin de cloner le projet il faut lancer la commande suivante :
`git clone https://github.com/AlexandreVerhoye/swrass-mono.git`

Il suffit ensuite d'installer les dependances :
`cd swrass-mono && yarn install`

Il y a plusieurs façon de lancer l'application :

- Afin de démarrer le Front-End et le Back-End : `npx nx run-many --parallel --target=serve --projects=api,swrass`

- Afin de démarrer le Front-End **OU** le Back-End : `npx nx serve api` ou `npx nx serve swrass`
