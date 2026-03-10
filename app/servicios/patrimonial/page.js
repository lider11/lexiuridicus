import ServicePageTemplate from 'components/services/ServicePageTemplate';
import { servicePages } from 'data/servicePages';

export const metadata = servicePages.patrimonial.metadata;

export default function PatrimonialPage() {
  return <ServicePageTemplate service={servicePages.patrimonial} />;
}
