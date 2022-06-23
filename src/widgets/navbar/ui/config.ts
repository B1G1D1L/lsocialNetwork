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
    withNotice: false
  },
  {
    to: 'users',
    text: 'Users',
    Icon: Users,
    withNotice: false
  },
  {
    to: 'messages',
    text: 'Messages',
    Icon: Messages,
    withNotice: true
  },
  {
    to: 'notification',
    text: 'Notification',
    Icon: Notification,
    withNotice: true
  },
  {
    to: 'profile',
    text: 'Profile',
    Icon: Profile,
    withNotice: false
  },
  {
    to: 'setting',
    text: 'Setting',
    Icon: Setting,
    withNotice: false
  },
]
