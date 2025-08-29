import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { TituloService } from '../titulo.service';

@Component({
  selector: 'app-titulo-list',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './titulo-list.html',
  styleUrl: './titulo-list.css',
})
export class TituloList implements OnInit {
  titulos: any[] = [];

  constructor(private tituloService: TituloService) {}

  ngOnInit() {
    this.tituloService.listarTitulos().subscribe((titulos) => (this.titulos = titulos));
  }
}
