import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMueblesComponent } from './listado-muebles.component';

describe('ListadoMueblesComponent', () => {
  let component: ListadoMueblesComponent;
  let fixture: ComponentFixture<ListadoMueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoMueblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoMueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
