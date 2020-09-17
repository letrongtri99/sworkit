import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateCustomWokroutModalPage } from './create-custom-wokrout-modal.page';

describe('CreateCustomWokroutModalPage', () => {
  let component: CreateCustomWokroutModalPage;
  let fixture: ComponentFixture<CreateCustomWokroutModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCustomWokroutModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCustomWokroutModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
