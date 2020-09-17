import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyPlanLeanerPage } from './my-plan-leaner.page';

describe('MyPlanLeanerPage', () => {
  let component: MyPlanLeanerPage;
  let fixture: ComponentFixture<MyPlanLeanerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPlanLeanerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyPlanLeanerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
