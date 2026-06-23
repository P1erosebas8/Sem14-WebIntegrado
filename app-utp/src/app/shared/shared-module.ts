import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumenRegistroComponent } from '../components/resumen-registro/resumen-registro.component';
import { SelectorTipoComponent } from '../components/selector-tipo/selector-tipo.component';



@NgModule({
  declarations: [ResumenRegistroComponent, SelectorTipoComponent],
  imports: [
    CommonModule
  ],
  exports: [ResumenRegistroComponent, SelectorTipoComponent]
})
export class SharedModule { }
