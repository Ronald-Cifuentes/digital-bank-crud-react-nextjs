import { IStep } from 'views/pages/tourguide/interfaces/step';
import { ITourGuideConfiguration } from 'views/pages/tourguide/interfaces/tourConfiguration';

const steps: IStep[] = [
  {
    title: 'Mi cuenta',
    description: 'En la sección Mi cuenta podrás agregar y actualizar tus datos personales.',
    classAttach: '#MyAccount',
    placement: 'bottom',
    position: 1,
  },
  {
    title: 'Notificaciones',
    description:
      'A través de las notificaciones te mantendremos informado sobre todas las novedades del Seller Center.',
    classAttach: '#Notifications',
    placement: 'bottom',
    position: 2,
  },
  {
    title: 'Paso a paso para convertirte en seller',
    description:
      '¿Tienes dudas sobre tu solicitud para convertirte en seller? Puedes revisar las etapas del proceso cuando quieras.',
    classAttach: '.cards-container',
    placement: 'top',
    position: 3,
  },
  {
    title: 'Productos',
    description: 'Revisa tu lista de productos disponibles.',
    classAttach: '#Pim',
    placement: 'right',
    position: 4,
  },
  {
    title: 'Ventas',
    description: 'Revisa tus ventas, envíos, boletas y solicitudes de cambios y devoluciones.',
    classAttach: '#Sales',
    placement: 'right',
    position: 5,
  },
  {
    title: 'Stock',
    description:
      'Revisa el listado de productos disponibles. Recuerda que puedes actualizar tu stock desde el integrador.',
    classAttach: '#Stock',
    placement: 'right',
    position: 6,
  },
  {
    title: 'Reportes',
    description:
      'Elige un periodo de tiempo y revisa reportes de rendimiento sobre finanzas, stock, estado de las ventas, productos, logística y órdenes.',
    classAttach: '#Reports',
    placement: 'right',
    position: 7,
  },
  {
    title: 'Finanzas',
    description:
      'Solicita tus pagos y revisa tu estado de cuenta. También puedes ubicar tus documentos tributarios electrónicos y transacciones',
    classAttach: '#Finances',
    placement: 'right',
    position: 8,
  },
  {
    title: 'Configuración',
    description: 'Revisa tus documentos como términos y condiciones cada vez que los necesites.',
    classAttach: '#Config',
    placement: 'right',
    position: 9,
  },
  {
    title: 'Ayuda',
    description:
      'Visita nuestro módulo de Ayuda para resolver tus dudas sobre  publicación y despacho de órdenes de compra, pago de ventas ¡Y mucho más!',
    classAttach: '#helpCenterRoute',
    placement: 'right',
    position: 10,
  },
];

export const SelleMultiCentryNoPublishedTour: ITourGuideConfiguration = {
  steps,
  canSkip: true,
};
