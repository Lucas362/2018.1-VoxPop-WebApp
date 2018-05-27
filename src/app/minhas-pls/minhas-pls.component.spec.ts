import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasPlsComponent } from './minhas-pls.component';
import { RequestsService } from '../requests.service';
import { HttpClientModule } from '@angular/common/http';
import { TokenService } from '../token.service';

describe('MinhasPlsComponent', () => {
  let component: MinhasPlsComponent;
  let fixture: ComponentFixture<MinhasPlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ MinhasPlsComponent ],
      providers: [
        RequestsService,
        TokenService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasPlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});