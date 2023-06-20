import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebratoryComponent } from './celebratory.component';

describe('CelebratoryComponent', () => {
  let component: CelebratoryComponent;
  let fixture: ComponentFixture<CelebratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelebratoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelebratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
