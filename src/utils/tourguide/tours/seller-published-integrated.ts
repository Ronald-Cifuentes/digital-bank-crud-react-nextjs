import { IStep } from 'views/pages/tourguide/interfaces/step';
import { ITourGuideConfiguration } from 'views/pages/tourguide/interfaces/tourConfiguration';

const steps: IStep[] = [
  {
    title: 'Mi cuenta',
    description: 'En la sección Mi Cuenta podrás agregar y actualizar tus datos personales.',
    classAttach: '#MyAccount',
    placement: 'bottom',
    position: 1,
  },
  {
    title: 'Notificaciones',
    description: 'A través de las notificaciones te mantendremos informado sobre las novedades del Seller Center.',
    classAttach: '#Notifications',
    placement: 'bottom',
    position: 2,
  },
  {
    title: 'Productos',
    description: 'Revisa tu lista de productos disponibles.',
    classAttach: '#Pim',
    placement: 'right',
    position: 3,
  },
  {
    title: 'Ventas',
    description: 'Revisa tus boletas, órdenes, envíos y solicitudes de cambios y devoluciones.',
    classAttach: '#Sales',
    placement: 'right',
    position: 4,
  },
  {
    title: 'Stock',
    description:
      'Revisa el listado de productos disponibles. Recuerda que puedes actualizar tu stock desde el integrador.',
    classAttach: '#Stock',
    placement: 'right',
    position: 5,
  },
  {
    title: 'Reportes',
    description:
      'Elige un período de tiempo y revisa reportes de rendimiento sobre finanzas, stock, estado de las ventas, productos, logística y órdenes.',
    classAttach: '#Reports',
    placement: 'right',
    position: 6,
  },
  {
    title: 'Finanzas',
    description:
      'Revisa el estado de tu cuenta y el listado de pagos. También puedes ubicar tus documentos tributarios electrónicos y transacciones.',
    classAttach: '#Finances',
    placement: 'right',
    position: 7,
  },
  {
    title: 'Configuración',
    description: 'Revisa tus documentos como términos y condiciones cada vez que los necesites.',
    classAttach: '#Config',
    placement: 'right',
    position: 8,
  },
  {
    title: 'Ayuda',
    description:
      'Visita nuestro Centro de Ayuda para resolver tus dudas sobre  publicación, despacho de órdenes de compra, pago de ventas ¡Y mucho más!',
    classAttach: '#helpCenterRoute',
    placement: 'right',
    position: 9,
  },
];

export const SellerPublishedIntegrated: ITourGuideConfiguration = {
  steps,
  canSkip: true,
};
