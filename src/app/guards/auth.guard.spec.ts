import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuard],
    });
    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow navigation when isAuthenticated is true', () => {
    guard.setAuthenticationStatus(true);

    const result = guard.canActivate(
      {} as any,
      { url: '/some-url' } as RouterStateSnapshot
    );

    expect(result).toBe(true);
  });
});
