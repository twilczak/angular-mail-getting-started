import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { MessageComposerComponent } from './message-composer.component';
import { MailService } from '../mail.service';
import { MailboxService } from '../mailbox.service';
import { MessageFormComponent } from './message-form/message-form.component';

class MockMailService extends MailService {
  constructor() {
    super(null);
  }
}

describe('MessageComposerComponent', () => {
  let component: MessageComposerComponent;
  let fixture: ComponentFixture<MessageComposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageComposerComponent, MessageFormComponent ],
      imports: [ ReactiveFormsModule, FormsModule, RouterTestingModule ],
      providers: [
        MailboxService,
        {provide: MailService, useValue: new MockMailService()}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
