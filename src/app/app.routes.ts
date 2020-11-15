// ng-router
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';

// import { PageNotFoundComponent } from './';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)], // Copied from ng doc
    // imports: [RouterModule.forChild(ROUTES)], DEFAULT
    exports: [RouterModule]
})
export class AppRoutingModule {}


/*
Examples
    { path: 'path/:routeParam', component: MyComponent },
    { path: 'staticPath', component: ... },
    { path: '**', component: ... },
    { path: 'oldPath', redirectTo: '/staticPath' },
    { path: ..., component: ..., data: { message: 'Custom' }
*/
