import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
/*
Questo codice definisce un array di oggetti di tipo Routes che viene esportato con il nome "routes". Ogni oggetto rappresenta una route dell'applicazione. Ecco una spiegazione dettagliata:

1. `{ path: '', redirectTo: 'home', pathMatch: 'full' }`: Questa route definisce il percorso vuoto ('') come redirect a 'home'. Ciò significa che quando l'utente visita la radice del sito, verrà reindirizzato alla route 'home'. Il `pathMatch: 'full'` specifica che il percorso deve corrispondere esattamente all'URL per attivare il reindirizzamento.

2. `{ path: 'home', component: HomeComponent }`: Questa route definisce il percorso 'home' come associato al componente HomeComponent. Quando l'URL dell'applicazione corrisponde a '/home', il router visualizzerà il componente HomeComponent.

In sintesi, questo codice definisce due route principali per l'applicazione: una route per la radice che reindirizza alla pagina principale ('home') e una route per la pagina principale stessa ('home') che utilizza il componente HomeComponent.

*/
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
];
