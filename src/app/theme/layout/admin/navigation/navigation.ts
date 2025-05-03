export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;

  children?: NavigationItem[];
}
export const NavigationItems: NavigationItem[] = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard',
        icon: 'feather icon-home',
        classes: 'nav-item'
      }
    ]
  },
  {
    id: 'reservationC',
    title: 'Gestion des réservations client',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'button',
        title: 'Reservation',
        type: 'item',
        url: '/basic/reservation',
        icon: 'feather icon-server'

      },
    
      {
        id: 'collapse',
        title: 'Calendrier',
        type: 'item',
        url: '/basic/calender',
        icon: 'feather icon-file-text'

      },
    ]
  },

  {
    id: 'forms',
    title: 'Gestion des reservations prof',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'forms-element',
        title: 'List Users',
        type: 'item',
        url: '/users/list',
        classes: 'nav-item',
        icon: 'feather icon-book',
      },
      {
        id: 'tables',
        title: 'Calendrier',
        type: 'item',
        url: '/tables/bootstrap',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      }
    ]
  },
 
  {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    icon: 'icon-pages',
    children: [
      {
        id: 'auth',
        title: 'Authentication',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'signup',
            title: 'Sign up',
            type: 'item',
            url: '/auth/signup',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'signin',
            title: 'Sign in',
            type: 'item',
            url: '/auth/signin',
            target: true,
            breadcrumbs: false
          }
        ]
      },
      
    ]
  }
];
