import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyPlanStrongerPage } from './my-plan-stronger.page';

describe('MyPlanStrongerPage', () => {
  let component: MyPlanStrongerPage;
  let fixture: ComponentFixture<MyPlanStrongerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPlanStrongerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyPlanStrongerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
