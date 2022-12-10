import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarMueblesComponent } from './agregar-editar-muebles.component';

describe('AgregarEditarMueblesComponent', () => {
  let component: AgregarEditarMueblesComponent;
  let fixture: ComponentFixture<AgregarEditarMueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarMueblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarMueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
