# **TP WIK-DPS-TP01**

## Exécution du projet :

**Pour lancer le projet :**

Cloner le dossier dans un repertoire de votre choix : https://github.com/PaulVigneron/WIK-DPS-TP01.git

Lancer le projet depuis Visual Studio Code.
Installer tout les paquets nécessaire pour le projet :

* npm install typescript --save-dev
* npm install @types/node --save-dev

Ensuite pour executer le code faites :

* cd src
* npx tsc
* node index.js

Sur internet écrivez dans la barre de recherche :
***localhost:8080***

1. Réponse en voulant accéder à la page ping :
***localhost:8080/ping***

    Une fois sur cette page vous aurez accès au HEADER qui vous montrera la réponse et tout les informations nécessaire, si vous allez voir dans le réseau vous pourrez voir le content-lenght qui sera à **795** et en status code **200**.

--------------------------------------

   2.Réponse en voulant accéder à une page non existante:
***localhost:8080/test***

    
Une fois sur cette page vous aurez une erreur 404 si vous allez regarder dans le réseau vous pourrez constater que le status code est en 404 Not Found et que le Content-Length est à 0.


