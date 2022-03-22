# SwrassMono

Ce projet a été réalisé dans le cadre d'un test technique pour Fastory.io

## Technologies utilisés :

- 🔗 Nx (MonoRepo)
- 🌍 React
- 💽 NodeJS (avec Express)

## Choix technologique :

J'ai choisis d'utiliser un **monorepo** afin de pouvoir partager certaines partie du code au sein des deux projets, utilisant tout deux **NodeJS**. **Nx** permet egalement de créer un proxy entre le front et le back.

Dans un soucis de delais, j'ai préféré utiliser une librairie UI (ChakraUI) afin de produire un MVP fonctionnel et visuellement agréable.

# Mise en place du projet

Afin de cloner le projet il faut lancer la commande suivante :
`git clone https://github.com/AlexandreVerhoye/swrass-mono.git`

Il suffit ensuite d'installer les dependances :
`cd swrass-mono && yarn install`

Il y a plusieurs façon de lancer l'application :

- Afin de démarrer le Front-End et le Back-End : `npx nx run-many --parallel --target=serve --projects=api,swrass`

- Afin de démarrer le Front-End **OU** le Back-End : `npx nx serve api` ou `npx nx serve swrass`
