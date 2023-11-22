import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from './authentication.service';
import { Storage } from '@ionic/storage-angular';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let storage: Storage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthenticationService, Storage],
    }).compileComponents();

    service = TestBed.inject(AuthenticationService);
    storage = TestBed.inject(Storage);
    await storage.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should authenticate a user with correct credentials', async () => {
    const usuario = 'exampleUser';
    const contraseña = 'examplePassword';
    await service.IngresoUsuarioPage(usuario, contraseña);
    expect(service.autenticado).toBe(true);
  });

  it('should not authenticate a user with incorrect credentials', async () => {
    const usuario = 'incorrectUser';
    const contraseña = 'incorrectPassword';
    await service.IngresoUsuarioPage(usuario, contraseña);
    expect(service.autenticado).toBe(false);
  });

  it('should not authenticate a user when storage is empty', async () => {
    // Clear storage to simulate empty users array
    await storage.clear();
    const usuario = 'userWithoutStorage';
    const contraseña = 'passwordWithoutStorage';
    await service.IngresoUsuarioPage(usuario, contraseña);
    expect(service.autenticado).toBe(false);
  });
});
