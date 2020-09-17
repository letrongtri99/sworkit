import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyPlanFitterPage } from './my-plan-fitter.page';

describe('MyPlanFitterPage', () => {
  let component: MyPlanFitterPage;
  let fixture: ComponentFixture<MyPlanFitterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPlanFitterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyPlanFitterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
