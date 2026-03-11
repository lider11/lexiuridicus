import Link from 'next/link';
import { Scale, CheckCircle, Target, Users, HeartHandshake, ShieldCheck, FileText, ArrowLeft } from '../../../components/icons';

export const metadata = servicePages.patrimonial.metadata;

export default function PatrimonialPage() {
  return <ServicePageTemplate service={servicePages.patrimonial} />;
}
