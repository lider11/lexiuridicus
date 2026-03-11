import Link from 'next/link';
import { Briefcase, CheckCircle, Target, Users, ArrowLeft, Gavel, FileText, Handshake, Scale, ShieldCheck } from '../../../components/icons';

export const metadata = servicePages['gobierno-corporativo'].metadata;

export default function GobiernoCorporativoPage() {
  return <ServicePageTemplate service={servicePages['gobierno-corporativo']} />;
}
