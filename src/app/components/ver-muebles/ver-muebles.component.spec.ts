import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMueblesComponent } from './ver-muebles.component';

describe('VerMueblesComponent', () => {
  let component: VerMueblesComponent;
  let fixture: ComponentFixture<VerMueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerMueblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerMueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
