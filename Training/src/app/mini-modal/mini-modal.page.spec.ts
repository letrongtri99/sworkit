import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiniModalPage } from './mini-modal.page';

describe('MiniModalPage', () => {
  let component: MiniModalPage;
  let fixture: ComponentFixture<MiniModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiniModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
