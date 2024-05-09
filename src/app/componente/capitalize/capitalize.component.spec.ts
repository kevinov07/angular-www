import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalizeComponent } from './capitalize.component';

describe('CapitalizeComponent', () => {
  let component: CapitalizeComponent;
  let fixture: ComponentFixture<CapitalizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CapitalizeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapitalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
