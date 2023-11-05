import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPerfilComponent } from './users-perfil.component';

describe('UsersPerfilComponent', () => {
  let component: UsersPerfilComponent;
  let fixture: ComponentFixture<UsersPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersPerfilComponent]
    });
    fixture = TestBed.createComponent(UsersPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
