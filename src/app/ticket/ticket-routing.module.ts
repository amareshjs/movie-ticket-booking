import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from '../dashboard/history/history.component';
import { AuthGuardGuard } from '../guards/auth-guard.guard';
import { ConfirmComponent } from './confirm/confirm.component';
import { TicketComponent } from './ticket.component';

const routes: Routes = [
  { path: 'ticket/:id', component: TicketComponent },
  { path: 'confirm/:id', canActivate: [AuthGuardGuard], component: ConfirmComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
