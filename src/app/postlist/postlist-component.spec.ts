import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponentComponent } from './postlist-component';

describe('PostListComponentComponent', () => {
  let component: PostListComponentComponent;
  let fixture: ComponentFixture<PostListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
