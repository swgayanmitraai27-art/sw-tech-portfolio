import { niches } from '@/data/niches';
import { notFound } from 'next/navigation';
import * as React from 'react';

// Education
import CoachingWidget from '../components/education/CoachingWidget';
import SchoolWidget from '../components/education/SchoolWidget';
import ComputerTrainingWidget from '../components/education/ComputerTrainingWidget';
import IITJEEWidget from '../components/education/IITJEEWidget';
import NEETWidget from '../components/education/NEETWidget';
import SpokenEnglishWidget from '../components/education/SpokenEnglishWidget';
import CompetitiveExamsWidget from '../components/education/CompetitiveExamsWidget';

// Hospitality
import RestaurantWidget from '../components/hospitality/RestaurantWidget';
import CafeWidget from '../components/hospitality/CafeWidget';
import HotelWidget from '../components/hospitality/HotelWidget';
import BanquetWidget from '../components/hospitality/BanquetWidget';
import BakeryWidget from '../components/hospitality/BakeryWidget';
import CloudKitchenWidget from '../components/hospitality/CloudKitchenWidget';
import SweetShopWidget from '../components/hospitality/SweetShopWidget';
import FamilyRestaurantWidget from '../components/hospitality/FamilyRestaurantWidget';

// Retail
import JewelryWidget from '../components/retail/JewelryWidget';
import BoutiqueWidget from '../components/retail/BoutiqueWidget';

export default async function NicheHome(props: { params: Promise<{ niche: string }> }) {
  const { niche } = await props.params;
  const data = niches[niche];
  if (!data) return notFound();

  // Full Page Delegation
  switch (niche) {
    case 'coaching': return <CoachingWidget />;
    case 'schools': return <SchoolWidget />;
    case 'computer-training': return <ComputerTrainingWidget />;
    case 'iit-jee': return <IITJEEWidget />;
    case 'neet': return <NEETWidget />;
    case 'spoken-english': return <SpokenEnglishWidget />;
    case 'competitive-exams': return <CompetitiveExamsWidget />;
    case 'restaurant': return <RestaurantWidget />;
    case 'cafe': return <CafeWidget />;
    case 'hotel': return <HotelWidget />;
    case 'banquet': return <BanquetWidget />;
    case 'bakery': return <BakeryWidget />;
    case 'cloud-kitchen': return <CloudKitchenWidget />;
    case 'sweet-shop': return <SweetShopWidget />;
    case 'family-restaurant': return <FamilyRestaurantWidget />;
    case 'jewelry': return <JewelryWidget />;
    case 'boutique': return <BoutiqueWidget />;
    default: 
      return (
        <main className="min-h-screen bg-slate-950 flex items-center justify-center">
          <h1 className="text-4xl text-white">Template Under Construction</h1>
        </main>
      );
  }
}
