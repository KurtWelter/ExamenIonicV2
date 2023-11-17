import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciarClasePage } from './iniciar-clase.page';

describe('IniciarClasePage', () => {
  let component: IniciarClasePage;
  let fixture: ComponentFixture<IniciarClasePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IniciarClasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
