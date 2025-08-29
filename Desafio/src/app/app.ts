import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TituloForm } from './titulo-form/titulo-form';
import { TituloList } from './titulo-list/titulo-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TituloForm, TituloList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
