import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetrieveIdPipe } from './retrieve-id.pipe';

@NgModule({
  declarations: [RetrieveIdPipe],
  imports: [CommonModule],
  exports: [RetrieveIdPipe],
})
export class RetrieveIdModule {}
