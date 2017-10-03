import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPhonesComponent } from './my-phones.component';

describe('MyPhonesComponent', () => {
  let component: MyPhonesComponent;
  let fixture: ComponentFixture<MyPhonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPhonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
