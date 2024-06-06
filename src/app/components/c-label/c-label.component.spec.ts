import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLabelComponent } from './c-label.component';

describe('CLabelComponent', () => {
  let component: CLabelComponent;
  let fixture: ComponentFixture<CLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
