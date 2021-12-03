import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedDirectivesComponent } from './customized-directives.component';

describe('CustomizedDirectivesComponent', () => {
  let component: CustomizedDirectivesComponent;
  let fixture: ComponentFixture<CustomizedDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizedDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
