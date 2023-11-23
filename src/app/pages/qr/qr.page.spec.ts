import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrPage } from './qr.page';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

describe('QrPage', () => {
  let component: QrPage;
  let fixture: ComponentFixture<QrPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QrPage],
      providers: [
        {
          provide: BarcodeScanner,
          useValue: {
            checkPermission: () => Promise.resolve({ granted: true }), // Simular el escenario de permiso concedido
            hideBackground: () => {}, // Simular función
            startScan: () =>
              Promise.resolve({ hasContent: true, content: 'some-content' }), // Simular el escaneo con contenido
            stopScan: () => {}, // Simular función
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QrPage);
    component = fixture.componentInstance;
    spyOn(component, 'enviarCorreo'); // Espiar el método enviarCorreo
    fixture.detectChanges();
  });

  it('should start scanner and call enviarCorreo on content', async () => {
    component.startScanner();
    await fixture.whenStable(); // Esperar a que las promesas se resuelvan

    expect(component.scanActivate).toBe(true); // Verificar que el scanner está activado
    expect(component.enviarCorreo).toHaveBeenCalled(); // Verificar que enviarCorreo fue llamado
  });

  // Puedes agregar más pruebas para otros métodos y escenarios en tu componente
});
