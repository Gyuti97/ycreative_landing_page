import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export function SEO({ title, description, keywords, ogImage, canonical }: SEOProps) {
  const { t, language } = useLanguage();
  const location = useLocation();
  
  const siteTitle = title || t('seo.title');
  const siteDescription = description || t('seo.description');
  const siteKeywords = keywords || t('seo.keywords');
  const siteUrl = 'https://ycreative.art';
  
  // Construct current URL dynamically if not provided
  const currentUrl = canonical || `${siteUrl}${location.pathname}${location.search}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <link rel="canonical" href={currentUrl} />
      <html lang={language} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={ogImage || `https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&h=630&auto=format&fit=crop`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={ogImage || `https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&h=630&auto=format&fit=crop`} />

      {/* Hreflang for multilingual SEO */}
      <link rel="alternate" hrefLang="en" href={`${siteUrl}${location.pathname}`} />
      <link rel="alternate" hrefLang="hu" href={`${siteUrl}${location.pathname}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${location.pathname}`} />
    </Helmet>
  );
}
