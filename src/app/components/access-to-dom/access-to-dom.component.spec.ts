import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessToDomComponent } from './access-to-dom.component';

describe('AccessToDomComponent', () => {
  let component: AccessToDomComponent;
  let fixture: ComponentFixture<AccessToDomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessToDomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessToDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
