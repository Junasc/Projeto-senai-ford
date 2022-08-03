import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaIntroComponent } from './pagina-intro.component';

describe('PaginaIntroComponent', () => {
  let component: PaginaIntroComponent;
  let fixture: ComponentFixture<PaginaIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
