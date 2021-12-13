import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RateTripePage } from './rate-tripe.page';

describe('RateTripePage', () => {
  let component: RateTripePage;
  let fixture: ComponentFixture<RateTripePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateTripePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RateTripePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
