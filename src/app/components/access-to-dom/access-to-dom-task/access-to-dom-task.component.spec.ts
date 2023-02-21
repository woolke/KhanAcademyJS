import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessToDomTaskComponent } from './access-to-dom-task.component';

describe('AccessToDomTaskComponent', () => {
  let component: AccessToDomTaskComponent;
  let fixture: ComponentFixture<AccessToDomTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessToDomTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessToDomTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
