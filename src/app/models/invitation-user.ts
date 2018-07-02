import { InboxUser } from './user';
export class InvitationUser extends InboxUser {
  invitationType: string;
  dueDate: string;
  eventDate: string;
  needsReminder?: boolean;
}
