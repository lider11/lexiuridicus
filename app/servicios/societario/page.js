import Link from 'next/link';
import { Users, Gavel, FileText, Handshake, Scale, CheckCircle, Target, ArrowLeft, ShieldCheck } from '../../../components/icons';

export const metadata = servicePages.societario.metadata;

export default function SocietarioPage() {
  return <ServicePageTemplate service={servicePages.societario} />;
}
