import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSidenavListComponent } from './app-sidenav-list.component';

describe('AppSidenavListComponent', () => {
  let component: AppSidenavListComponent;
  let fixture: ComponentFixture<AppSidenavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSidenavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidenavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
