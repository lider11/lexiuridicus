import Link from 'next/link';
import { ShieldCheck, CheckCircle, Target, AlertTriangle, BookOpen, Users, ArrowLeft } from '../../../components/icons';

export const metadata = servicePages.cumplimiento.metadata;

export default function CumplimientoPage() {
  return <ServicePageTemplate service={servicePages.cumplimiento} />;
}
