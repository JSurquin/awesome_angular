// Voici comment commenter, avec des shashhhhhhhhhhhh
/// slashhhhh

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component'; //cela permet d'importer le composant principal de l'app

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
