import { ReactComponent as Feed } from './icons/feed.svg'
import { ReactComponent as Users } from './icons/users.svg'
import { ReactComponent as Messages } from './icons/messages.svg'
import { ReactComponent as Notification } from './icons/notification.svg'
import { ReactComponent as Profile } from './icons/profile.svg'
import { ReactComponent as Setting } from './icons/setting.svg'
import { ReactComponent as Logout } from './icons/logout.svg'

export const navigation = [
  {
    to: 'feed',
    text: 'Feed',
    Icon: Feed,
  },
  {
    to: 'users',
    text: 'Users',
    Icon: Users,
  },
  {
    to: 'messages',
    text: 'Messages',
    Icon: Messages,
  },
  {
    to: 'notification',
    text: 'Notification',
    Icon: Notification,
  },
  {
    to: 'profile',
    text: 'Profile',
    Icon: Profile,
  },
  {
    to: 'setting',
    text: 'Setting',
    Icon: Setting,
  },
]
