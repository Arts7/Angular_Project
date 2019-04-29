import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdCardComponent } from './id-card/id-card.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HighlightDirective } from './highlight.directive';
import { MenuComponent } from './menu/menu.component';
import { ROUTES } from './app.route';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    IdCardComponent,
    SignUpComponent,
    UserProfileComponent,
    HighlightDirective,
    MenuComponent,
    DeveloperComponent,
    SkillComponent,
    SearchMovieComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
