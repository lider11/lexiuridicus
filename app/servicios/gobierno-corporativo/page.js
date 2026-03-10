import ServicePageTemplate from 'components/services/ServicePageTemplate';
import { servicePages } from 'data/servicePages';

export const metadata = servicePages['gobierno-corporativo'].metadata;

export default function GobiernoCorporativoPage() {
  return <ServicePageTemplate service={servicePages['gobierno-corporativo']} />;
}
