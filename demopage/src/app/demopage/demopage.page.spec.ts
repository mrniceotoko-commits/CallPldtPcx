import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemopagePage } from './demopage.page';

describe('DemopagePage', () => {
  let component: DemopagePage;
  let fixture: ComponentFixture<DemopagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DemopagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
