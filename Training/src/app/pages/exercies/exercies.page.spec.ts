import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExerciesPage } from './exercies.page';

describe('ExerciesPage', () => {
  let component: ExerciesPage;
  let fixture: ComponentFixture<ExerciesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
