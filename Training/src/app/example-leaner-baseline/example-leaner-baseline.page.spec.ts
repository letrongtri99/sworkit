import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExampleLeanerBaselinePage } from './example-leaner-baseline.page';

describe('ExampleLeanerBaselinePage', () => {
  let component: ExampleLeanerBaselinePage;
  let fixture: ComponentFixture<ExampleLeanerBaselinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleLeanerBaselinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleLeanerBaselinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
