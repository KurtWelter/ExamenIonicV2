import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresoUsuarioPage } from './ingreso-usuario.page';

describe('IngresoUsuarioPage', () => {
  let component: IngresoUsuarioPage;
  let fixture: ComponentFixture<IngresoUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngresoUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
