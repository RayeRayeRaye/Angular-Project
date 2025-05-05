import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RayeComponent } from './raye.component';

describe('RayeComponent', () => {
  let component: RayeComponent;
  let fixture: ComponentFixture<RayeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RayeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RayeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
