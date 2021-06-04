import { NgModule } from '@angular/core';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import {
  faAlignCenter,
  faBars,
  faBolt,
  faCompass,
  faEdit,
  faRocket,
  faSocks,
  faSuitcaseRolling,
  faTasks
} from '@fortawesome/free-solid-svg-icons';
import {
  faAngular,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const ICONS = [
  faAlignCenter,
  faBars,
  faBolt,
  faCompass,
  faEdit,
  faRocket,
  faSocks,
  faSuitcaseRolling,
  faTasks,

  faAngular,
  faGithub,
  faLinkedin
];

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class IaCoreIconModule {

  constructor(lib: FaIconLibrary) {
    lib.addIcons(...ICONS);
  }

}
