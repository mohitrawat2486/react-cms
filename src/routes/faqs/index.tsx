import { createFileRoute } from '@tanstack/react-router';
import FaqList from '@/components/faqs/FaqList';
import { faqData } from '@/data/faqData'; // your mock data file

export const Route = createFileRoute('/faqs/')({
  component: () => <FaqList data={faqData} />,
});




