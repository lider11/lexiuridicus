import ServicePageTemplate from 'components/services/ServicePageTemplate';
import { servicePages } from 'data/servicePages';

export const metadata = servicePages.cumplimiento.metadata;

export default function CumplimientoPage() {
  return <ServicePageTemplate service={servicePages.cumplimiento} />;
}
