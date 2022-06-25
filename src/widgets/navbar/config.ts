import { ReactComponent as Feed } from './ui/icons/feed.svg'
import { ReactComponent as Users } from './ui/icons/users.svg'
import { ReactComponent as Messages } from './ui/icons/messages.svg'
import { ReactComponent as Notification } from './ui/icons/notification.svg'
import { ReactComponent as Profile } from './ui/icons/profile.svg'
import { ReactComponent as Setting } from './ui/icons/setting.svg'
// import { ReactComponent as Logout } from './ui/icons/logout.svg'

export const navigationList = [
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
    notification: 22
  },
  {
    to: 'notification',
    text: 'Notification',
    Icon: Notification,
    notification: 10
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
