import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumenRegistroComponent } from '../components/resumen-registro/resumen-registro.component';
import { SelectorTipoComponent } from '../components/selector-tipo/selector-tipo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ResumenRegistroComponent,
    SelectorTipoComponent
  ],
  exports: [ResumenRegistroComponent, SelectorTipoComponent]
})
export class SharedModule {}