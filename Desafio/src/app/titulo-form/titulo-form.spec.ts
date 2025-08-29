import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloForm } from './titulo-form';

describe('TituloForm', () => {
  let component: TituloForm;
  let fixture: ComponentFixture<TituloForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloForm],
    }).compileComponents();

    fixture = TestBed.createComponent(TituloForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
