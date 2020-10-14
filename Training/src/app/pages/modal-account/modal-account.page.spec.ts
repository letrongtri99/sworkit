import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalAccountPage } from './modal-account.page';

describe('ModalAccountPage', () => {
  let component: ModalAccountPage;
  let fixture: ComponentFixture<ModalAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
