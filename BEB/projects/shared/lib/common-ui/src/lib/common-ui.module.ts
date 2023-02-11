import { NgModule } from '@angular/core';
import { CommonUiComponent } from './common-ui.component';
import { SideNavigationComponent } from './reusable-components/side-navigation/side-navigation.component';
import { HeaderComponent } from './reusable-components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card'
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    CommonUiComponent,
    SideNavigationComponent,
    HeaderComponent
  ],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule
  ],
  exports: [
    CommonUiComponent,
    HeaderComponent,
    SideNavigationComponent,
    
  ]
})
export class CommonUiModule { }
