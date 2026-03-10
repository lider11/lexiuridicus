import ServicePageTemplate from 'components/services/ServicePageTemplate';
import { servicePages } from 'data/servicePages';

export const metadata = servicePages.societario.metadata;

export default function SocietarioPage() {
  return <ServicePageTemplate service={servicePages.societario} />;
}
