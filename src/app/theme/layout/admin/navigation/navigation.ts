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
  roles?: string[]; // Ajoutez cette ligne

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
    roles: ['client'], 

    children: [
      {
        id: 'button',
        title: 'Reservation',
        type: 'item',
        url: '/client/reservation',
        icon: 'feather icon-server',
        roles: ['client']

      },
    
      {
        id: 'collapse',
        title: 'Calendrier',
        type: 'item',
        url: '/client/calender',
        icon: 'feather icon-file-text'
        ,roles: ['client']

      },
    ]
  },

  {
    id: 'forms',
    title: 'Gestion des reservations prof',
    type: 'group',
    icon: 'icon-group',
    roles: ['professional'],
    children: [
      {
        id: 'forms-element',
        title: 'List Users',
        type: 'item',
        url: '/users/list',
        classes: 'nav-item',
        roles: ['professional'],
        icon: 'feather icon-book',
      },
      {
        id: 'tables',
        title: 'Calendrier',
        type: 'item',
        url: '/tables/bootstrap',
        classes: 'nav-item',
        roles: ['professional'],
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
