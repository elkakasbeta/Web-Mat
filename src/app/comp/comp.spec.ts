import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompComponent } from './comp';

describe('CompComponent', () => {
  let component: CompComponent;
  let fixture: ComponentFixture<CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CompComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
