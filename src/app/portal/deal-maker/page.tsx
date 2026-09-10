'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  CreditCard,
  RefreshCw,
  PlusCircle,
  Printer,
  Lock,
  Unlock,
  CheckCircle2,
  AlertCircle,
  Smartphone,
  Phone,
  Send,
  Copy,
  Check,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function PortalDealMaker() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);

  const [activeTab, setActiveTab] = useState('agreement');

  const [clientName, setClientName] = useState('Rahul Sharma');
  const [businessName, setBusinessName] = useState('Sharma Sweets');
  const [clientPhone, setClientPhone] = useState('9876543210');
  const [clientEmail, setClientEmail] = useState('sharma.business@gmail.com');
  const [clientAddress, setClientAddress] = useState('Shop No. 12, Main Market, Ambedkar Nagar, UP');
  
  const [selectedPackage, setSelectedPackage] = useState('website');
  const [customPackageName, setCustomPackageName] = useState('Custom Business Solution');
  const [dealAmount, setDealAmount] = useState(1999);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [advancePaid, setAdvancePaid] = useState(1000);
  const [deliveryDays, setDeliveryDays] = useState('24 Hours');
  const [invoiceNumber, setInvoiceNumber] = useState('SWTS-2026-849');
  const [dealDate, setDealDate] = useState('2026-09-10');
  const [domainName, setDomainName] = useState('sharmasweets.in');
  const [upiId, setUpiId] = useState('8303994616@paytm');
  const [copiedNotice, setCopiedNotice] = useState(false);

  const agencyCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isAgencyDrawing, setIsAgencyDrawing] = useState(false);
  const [hasAgencySign, setHasAgencySign] = useState(false);

  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [addonList, setAddonList] = useState([
    { id: 'gateway', name: 'Online Payment Gateway (Razorpay/PhonePe)', price: 1499, timeline: '+2 Days' },
    { id: 'whatsapp_bot', name: 'WhatsApp Auto-Order & Alerts Bot', price: 1999, timeline: '+2 Days' },
    { id: 'extra_pages', name: 'Extra 3 Custom Inner Pages', price: 999, timeline: '+1 Day' },
    { id: 'push_notif', name: 'Push Notification Broadcasting System', price: 1499, timeline: '+2 Days' },
    { id: 'admin_panel', name: 'Custom Dynamic Admin Control Panel', price: 2499, timeline: '+3 Days' },
    { id: 'hindi_switch', name: 'Dual-Language Support (Hindi + English)', price: 899, timeline: '+1 Day' },
    { id: 'live_tracking', name: 'Real-time GPS / Order Status Tracking', price: 2999, timeline: '+4 Days' },
  ]);

  const [newAddonName, setNewAddonName] = useState('');
  const [newAddonPrice, setNewAddonPrice] = useState(999);

  const handleAddCustomAddon = () => {
    if (!newAddonName.trim()) return;
    const newId = 'custom_' + Date.now();
    const item = { id: newId, name: newAddonName.trim(), price: Number(newAddonPrice) || 0, timeline: '+2 Days' };
    setAddonList([...addonList, item]);
    setSelectedAddons([...selectedAddons, newId]);
    setNewAddonName('');
    setNewAddonPrice(999);
  };

  const updateAddonPrice = (id: string, price: number) => {
    setAddonList(addonList.map(a => a.id === id ? { ...a, price: Number(price) || 0 } : a));
  };

  const handlePackageChange = (pkg: any) => {
    setSelectedPackage(pkg);
    if (pkg === 'website') {
      setDealAmount(1999);
      setAdvancePaid(1000);
      setDeliveryDays('24 Hours');
    } else if (pkg === 'webapp') {
      setDealAmount(4499);
      setAdvancePaid(2000);
      setDeliveryDays('7 Days (With Full Testing)');
    } else if (pkg === 'android') {
      setDealAmount(9999);
      setAdvancePaid(5000);
      setDeliveryDays('30 Days (Including Google 14-day Testing)');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('swtech_portal_auth');
      if (saved === 'true') {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (passcode === 'swtech2026' || passcode === '1234' || passcode === '8303') {
      setIsAuthenticated(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('swtech_portal_auth', 'true');
      }
      setPasscodeError(false);
    } else {
      setPasscodeError(true);
    }
  };

  const startAgencyDrawing = (e: any) => {
    const canvas = agencyCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    setIsAgencyDrawing(true);
    setHasAgencySign(true);
    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const drawAgency = (e: any) => {
    if (!isAgencyDrawing) return;
    const canvas = agencyCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.strokeStyle = '#15803d';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
  };

  const stopAgencyDrawing = () => {
    setIsAgencyDrawing(false);
  };

  const clearAgencySignature = () => {
    const canvas = agencyCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasAgencySign(false);
  };

  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const found = addonList.find(a => a.id === id);
    return sum + (found ? found.price : 0);
  }, 0);

  const subtotalBeforeDiscount = dealAmount + addonsTotal;
  const grandTotal = Math.max(0, subtotalBeforeDiscount - (Number(discountAmount) || 0));
  const balanceRemaining = Math.max(0, grandTotal - (Number(advancePaid) || 0));

  const handlePrint = () => {
    window.print();
  };
  const [copiedLink, setCopiedLink] = useState(false);

  const getClientSignUrl = () => {
    const pkgTitle = selectedPackage === 'website' ? '5-Page High-Speed Website' : selectedPackage === 'webapp' ? 'Full-Stack Custom Web App' : selectedPackage === 'android' ? 'Android Mobile App (Play Store)' : customPackageName;
    const payload = {
      clientName,
      businessName,
      clientPhone,
      domainName,
      planTitle: pkgTitle,
      dealAmount: grandTotal,
      originalAmount: subtotalBeforeDiscount,
      discountAmount: Number(discountAmount) || 0,
      advancePaid,
      balanceRemaining,
      deliveryDays,
      invoiceNumber,
      dealDate,
      upiId
    };
    try {
      const jsonStr = unescape(encodeURIComponent(JSON.stringify(payload)));
      const b64 = btoa(jsonStr);
      const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : 'https://sw-tech-portfolio.swgayanmitraai27.workers.dev';
      return origin + '/sign?d=' + b64;
    } catch (e) {
      return '';
    }
  };

  const copyClientSignLink = () => {
    const url = getClientSignUrl();
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const shareAgreementWhatsApp = () => {
    const pkgTitle = selectedPackage === 'website' ? '5-Page High-Speed Website' : selectedPackage === 'webapp' ? 'Full-Stack Custom Web App' : selectedPackage === 'android' ? 'Android Mobile App (Play Store)' : customPackageName;
    const signUrl = getClientSignUrl();
    const text = '*OFFICIAL PROJECT CONTRACT & AGREEMENT*\n' +
      '*Agency:* SW TECH SOLUTION\n' +
      '*Office:* Garima Studio, Neori Bajar, Ramnagar Road, Ambedkarnagar UP (+91 8303994616)\n' +
      '----------------------------------------\n' +
      '*Client Name:* ' + clientName + '\n' +
      '*Business:* ' + businessName + '\n' +
      '*Contact:* ' + clientPhone + '\n' +
      '*Domain:* ' + domainName + '\n' +
      '*Selected Plan:* ' + pkgTitle + '\n' +
      '*Delivery Timeline:* ' + deliveryDays + '\n\n' +
      '*COMMERCIALS:*\n' +
      '• Package Amount: ₹' + subtotalBeforeDiscount + '\n' +
      (discountAmount > 0 ? ('• Special Discount: -₹' + discountAmount + '\n') : '') +
      '• Final Deal Value: ₹' + grandTotal + '\n' +
      '• Advance Paid: ₹' + advancePaid + '\n' +
      '• Balance on Completion: ₹' + balanceRemaining + '\n' +
      '• Pay via UPI: ' + upiId + '\n\n' +
      '*INCLUDED SERVICES (1 YEAR):*\n' +
      '✓ 1 Year Free Domain (.com/.in)\n' +
      '✓ 1 Year Ultra-Fast Cloud Hosting\n' +
      '✓ 5 Official Business Emails\n' +
      '✓ 24/7 Maintenance & Support\n' +
      '✓ SSL Security & Mobile Responsive UI\n\n' +
      '✍️ *DIGITALLY SIGN YOUR CONTRACT HERE (Click to Open & Sign on Mobile):*\n' +
      signUrl + '\n\n' +
      '_This is a digitally generated contract binding SW Tech Solution and the client for software delivery._';

    window.open('https://wa.me/91' + clientPhone + '?text=' + encodeURIComponent(text), '_blank');
  };

  const copyRenewalNotice = () => {
    const renewalText = '*ANNUAL DOMAIN & HOSTING RENEWAL NOTICE*\n' +
      '*From:* SW TECH SOLUTION (Ambedkarnagar, UP)\n' +
      '*Client:* ' + clientName + ' (' + businessName + ')\n' +
      '*Website/Domain:* ' + domainName + '\n' +
      '----------------------------------------\n' +
      'Dear Client, your 1-Year Cloud Hosting, Domain & Business Email cycle is scheduled for renewal.\n\n' +
      '*RENEWAL PACKAGE DETAILS:*\n' +
      '1. 1 Year Domain Extension (.com/.in): ₹999\n' +
      '2. 1 Year High-Speed Cloud Server Hosting: ₹1,499\n' +
      '3. 5 Professional Email Accounts Maintenance: ₹499\n' +
      '4. 24/7 Security Patching & Bug Fixes: ₹999\n\n' +
      '*Total Annual Renewal Bundle: ₹3,999/-* (Discounted rate)\n' +
      'Pay UPI: ' + upiId + '\n\n' +
      'To keep your website live without interruption, please confirm renewal.\n' +
      'Thank you,\n' +
      '*SW Tech Solution* | +91 8303994616';

    navigator.clipboard.writeText(renewalText);
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 3000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 text-white font-sans">
        <div className="max-w-md w-full p-8 rounded-3xl bg-slate-900/90 border border-orange-500/30 backdrop-blur-xl shadow-2xl text-center">
          <div className="w-16 h-16 rounded-2xl bg-orange-500/20 border border-orange-500/40 text-orange-400 flex items-center justify-center mx-auto mb-6">
            <Lock size={32} />
          </div>
          <h2 className="text-2xl font-serif font-bold text-white mb-2">SW Tech Client & Deal Portal</h2>
          <p className="text-slate-400 text-sm mb-6">Restricted Admin Access for Agreements, Instant Invoices, and Renewal Control.</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter Secret Access PIN"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-slate-950 border border-white/10 focus:border-orange-500 focus:outline-none text-center text-lg tracking-widest text-white"
              autoFocus
            />
            {passcodeError && (
              <p className="text-rose-400 text-xs mt-2 flex items-center justify-center">
                <AlertCircle size={14} className="mr-1" /> Incorrect PIN. (Default: 1234 or swtech2026)
              </p>
            )}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold transition-all shadow-lg shadow-orange-500/20"
            >
              Unlock Deal Portal
            </button>
          </form>
          <p className="text-[11px] text-slate-500 mt-6">SW Tech Solution  Garima Studio, Neori Bajar, Ambedkarnagar UP</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
      
      {/* SCREEN-ONLY TOP BAR */}
      <div className="print:hidden sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-orange-500 text-white font-bold">SW</div>
            <div>
              <h1 className="text-lg font-bold font-serif text-white">SW Tech Deal & Agreement Suite</h1>
              <p className="text-xs text-slate-400">Garima Studio, Neori Bajar, Ambedkarnagar UP  +91 8303994616</p>
            </div>
          </div>

          {/* TAB BUTTONS */}
          <div className="flex items-center bg-slate-950 p-1.5 rounded-2xl border border-white/10 overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('agreement')}
              className={'flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ' + (activeTab === 'agreement' ? 'bg-orange-500 text-white shadow-lg' : 'text-slate-400 hover:text-white')}
            >
              <FileText size={16} />
              <span>Deal Agreement</span>
            </button>
            <button
              onClick={() => setActiveTab('invoice')}
              className={'flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ' + (activeTab === 'invoice' ? 'bg-orange-500 text-white shadow-lg' : 'text-slate-400 hover:text-white')}
            >
              <CreditCard size={16} />
              <span>Official Invoice</span>
            </button>
            <button
              onClick={() => setActiveTab('renewal')}
              className={'flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ' + (activeTab === 'renewal' ? 'bg-orange-500 text-white shadow-lg' : 'text-slate-400 hover:text-white')}
            >
              <RefreshCw size={16} />
              <span>Annual Renewals</span>
            </button>
            <button
              onClick={() => setActiveTab('addons')}
              className={'flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ' + (activeTab === 'addons' ? 'bg-orange-500 text-white shadow-lg' : 'text-slate-400 hover:text-white')}
            >
              <PlusCircle size={16} />
              <span>Extra Add-ons</span>
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white text-slate-950 text-sm font-bold hover:bg-slate-200 transition-colors shadow-md"
            >
              <Printer size={16} />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  localStorage.removeItem('swtech_portal_auth');
                }
                setIsAuthenticated(false);
              }}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-rose-400 hover:bg-slate-700 transition-colors"
              title="Lock Portal"
            >
              <Unlock size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8">
        
        {/* CLIENT INPUTS */}
        <div className="print:hidden mb-8 p-6 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
            <h3 className="text-lg font-serif font-bold text-white flex items-center">
              <Sparkles className="text-orange-400 mr-2" size={18} /> Client & Commercial Inputs
            </h3>
            <span className="text-xs text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20 font-medium">
              Live Auto-Sync
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div>
              <label className="block text-slate-400 text-xs mb-1">Client Full Name</label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-xs mb-1">Business / Firm Name</label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-xs mb-1">Client Phone (WhatsApp)</label>
              <input
                type="text"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-xs mb-1">Target Domain (.com/.in)</label>
              <input
                type="text"
                value={domainName}
                onChange={(e) => setDomainName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 text-sm mt-4">
            <div>
              <label className="block text-slate-400 text-xs mb-1">Project Package</label>
              <select
                value={selectedPackage}
                onChange={(e) => handlePackageChange(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:border-orange-500 focus:outline-none"
              >
                <option value="website">5-Page Website (₹1,999 Base)</option>
                <option value="webapp">Custom Web App (₹4,499 Base)</option>
                <option value="android">Android App (₹9,999 Base)</option>
                <option value="custom">Custom Deal / Package</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-400 text-xs mb-1">Package Price (₹ Editable)</label>
              <input
                type="number"
                value={dealAmount}
                onChange={(e) => setDealAmount(Number(e.target.value) || 0)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-orange-500/50 text-white font-bold focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-xs mb-1">Special Discount (₹ Off)</label>
              <input
                type="number"
                value={discountAmount}
                onChange={(e) => setDiscountAmount(Number(e.target.value) || 0)}
                placeholder="0"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-green-500/50 text-green-400 font-bold focus:border-green-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-xs mb-1">Advance Received (₹)</label>
              <input
                type="number"
                value={advancePaid}
                onChange={(e) => setAdvancePaid(Number(e.target.value) || 0)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-xs mb-1">Delivery Timeline</label>
              <input
                type="text"
                value={deliveryDays}
                onChange={(e) => setDeliveryDays(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
        {/* TAB 1: DEAL AGREEMENT */}
        {activeTab === 'agreement' && (
          <div className="space-y-6">
            
            {/* ACTION ROW */}
            <div className="print:hidden flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20">
              <div className="text-sm text-orange-200">
                ? <strong className="text-white">Deal Summary:</strong> Total: <strong>?{grandTotal}</strong> | Advance: <strong>?{advancePaid}</strong> | Due on Delivery: <strong>?{balanceRemaining}</strong>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={copyClientSignLink}
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all shadow border border-white/10"
                >
                  <Copy size={14} />
                  <span>{copiedLink ? 'Sign Link Copied!' : 'Copy Client Sign Link'}</span>
                </button>
                <button
                  onClick={shareAgreementWhatsApp}
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-xs transition-all shadow-lg"
                >
                  <Send size={14} />
                  <span>Send Agreement & Sign Link on WhatsApp</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition-all shadow-lg"
                >
                  <Printer size={14} />
                  <span>Download / Print PDF</span>
                </button>
              </div>
            </div>

            {/* PRINTABLE AGREEMENT DOCUMENT */}
            <div className="bg-white text-slate-900 p-6 sm:p-10 rounded-3xl shadow-2xl border border-slate-200 max-w-4xl mx-auto print:p-2 print:border-none print:shadow-none print:m-0 print:rounded-none">
              
              {/* HEADER */}
              <div className="flex justify-between items-start border-b-2 border-slate-900 pb-3 mb-3 print:pb-2 print:mb-2">
                <div>
                  <span className="text-2xl sm:text-3xl print:text-xl font-serif font-black tracking-tight text-orange-600">
                    SW TECH SOLUTION
                  </span>
                  <p className="text-[11px] uppercase tracking-widest text-slate-600 font-bold mt-0.5">
                    Software Development & Digital Architecture Agency
                  </p>
                  <p className="text-[10px] text-slate-600">
                    Garima Studio, Neori Bajar, Ramnagar Road, Ambedkarnagar, UP
                  </p>
                  <p className="text-[10px] text-slate-600">
                    Phone / WhatsApp: +91 8303994616 • UPI: {upiId}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <div className="inline-block bg-slate-900 text-white px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider mb-1 print:bg-slate-900 print:text-white">
                    Official Project Contract
                  </div>
                  <p className="text-[11px] font-bold text-slate-800">Agreement No: {invoiceNumber}</p>
                  <p className="text-[10px] text-slate-500">Date: {dealDate}</p>
                </div>
              </div>

              {/* CLIENT DETAILS */}
              <div className="grid grid-cols-2 gap-4 p-3 rounded-xl bg-slate-50 border border-slate-200 mb-3 print:p-2 print:mb-2 text-xs print:text-[10.5px]">
                <div>
                  <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider mb-0.5">CLIENT INFORMATION</p>
                  <p className="text-sm print:text-xs font-bold text-slate-900">{clientName}</p>
                  <p className="font-semibold text-slate-700">{businessName}</p>
                  <p className="text-slate-600">{clientAddress}</p>
                  <p className="text-slate-600">Ph: +91 {clientPhone} | Email: {clientEmail}</p>
                </div>
                <div>
                  <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider mb-0.5">PROJECT & TIMELINE</p>
                  <p className="text-sm print:text-xs font-bold text-orange-600">
                    {selectedPackage === 'website' ? '5-Page High-Conversion Business Website' : selectedPackage === 'webapp' ? 'Custom Full-Stack Web Application' : selectedPackage === 'android' ? 'Android Mobile App (Play Store Publishing)' : customPackageName}
                  </p>
                  <p className="text-slate-700"><strong>Target Domain:</strong> {domainName}</p>
                  <p className="text-slate-700"><strong>Guaranteed Delivery:</strong> {deliveryDays}</p>
                  <p className="text-slate-700"><strong>Contract Term:</strong> 1 Year Live Server & Domain Maintenance</p>
                </div>
              </div>

              {/* SCOPE OF WORK */}
              <div className="mb-3 print:mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-1.5 print:pb-0.5 print:mb-1">
                  1. Scope of Work & Deliverables
                </h4>
                <ul className="text-[11px] print:text-[9.5px] text-slate-700 space-y-1 print:space-y-0.5 list-disc pl-4 leading-tight">
                  <li><strong>Custom Design & Development:</strong> Bespoke responsive layout tailored for {businessName}, optimized for ultra-fast load speed and mobile screens.</li>
                  <li><strong>Free Domain & Hosting:</strong> 1 Year top-level Domain ({domainName}) + 1 Year High-Speed Cloud Server Hosting.</li>
                  <li><strong>Business Email Setup:</strong> Up to 5 professional domain-branded mail accounts (e.g. contact@{domainName}).</li>
                  <li><strong>Security & SSL:</strong> Full HTTPS SSL Certificate configuration and automated protection against attacks.</li>
                  {selectedPackage === 'android' && (
                    <li><strong>Google Play Store Deployment:</strong> Full packaging (.aab/.apk) and publishing on developer account with complete 14-day testing verification.</li>
                  )}
                  {selectedPackage === 'webapp' && (
                    <li><strong>Database & Admin Console:</strong> Secure MongoDB/SQL backend architecture with password-protected control dashboard for business operations.</li>
                  )}
                  {selectedAddons.map(id => {
                    const found = addonList.find(a => a.id === id);
                    return found ? <li key={id}><strong>Extra Addon:</strong> {found.name}</li> : null;
                  })}
                </ul>
              </div>

              {/* COMMERCIALS */}
              <div className="mb-3 print:mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-1.5 print:pb-0.5 print:mb-1">
                  2. Commercials & Payment Terms
                </h4>
                <table className="w-full text-xs print:text-[10px] text-left border border-slate-200">
                  <thead className="bg-slate-100 text-slate-800">
                    <tr>
                      <th className="p-1.5 print:p-1 border">Service Description</th>
                      <th className="p-1.5 print:p-1 border text-center">Qty / Period</th>
                      <th className="p-1.5 print:p-1 border text-right">Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-1.5 print:p-1 border font-medium">
                        {selectedPackage === 'website' ? '5-Page Website (Website Dev FREE • ₹1,999 Server/Domain Fee)' : selectedPackage === 'webapp' ? 'Custom Web Application Engineering' : selectedPackage === 'android' ? 'Android Mobile App + 1 Free Website' : customPackageName}
                      </td>
                      <td className="p-1.5 print:p-1 border text-center">1 Year</td>
                      <td className="p-1.5 print:p-1 border text-right font-bold">₹{dealAmount}</td>
                    </tr>
                    {selectedAddons.map(id => {
                      const found = addonList.find(a => a.id === id);
                      return found ? (
                        <tr key={id}>
                          <td className="p-1.5 print:p-1 border">{found.name}</td>
                          <td className="p-1.5 print:p-1 border text-center">1 Item</td>
                          <td className="p-1.5 print:p-1 border text-right">₹{found.price}</td>
                        </tr>
                      ) : null;
                    })}
                    {discountAmount > 0 && (
                      <tr className="text-green-700 font-bold bg-green-50">
                        <td className="p-1.5 print:p-1 border text-right" colSpan={2}>Special Promotional Discount:</td>
                        <td className="p-1.5 print:p-1 border text-right">-₹{discountAmount}</td>
                      </tr>
                    )}
                    <tr className="bg-slate-50 font-bold">
                      <td className="p-1.5 print:p-1 border text-right" colSpan={2}>Grand Total Deal Value:</td>
                      <td className="p-1.5 print:p-1 border text-right">₹{grandTotal}</td>
                    </tr>
                    <tr className="text-green-700 font-bold">
                      <td className="p-1.5 print:p-1 border text-right" colSpan={2}>Advance Paid / Received:</td>
                      <td className="p-1.5 print:p-1 border text-right">₹{advancePaid}</td>
                    </tr>
                    <tr className="bg-orange-50 text-orange-900 font-bold">
                      <td className="p-1.5 print:p-1 border text-right" colSpan={2}>Balance Due on Final Delivery & Handover:</td>
                      <td className="p-1.5 print:p-1 border text-right">₹{balanceRemaining}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* TERMS */}
              <div className="mb-3 print:mb-2 text-[10px] print:text-[9px] text-slate-600 leading-tight space-y-0.5 bg-slate-50 p-2.5 print:p-1.5 rounded-xl border border-slate-200">
                <p className="font-bold text-slate-800 uppercase text-[10px] print:text-[9px] mb-0.5">3. Key Terms & Guarantees:</p>
                <p>• <strong>Timely Delivery:</strong> SW Tech Solution commits to delivering the primary prototype within {deliveryDays}.</p>
                <p>• <strong>Annual Renewals:</strong> Domain and Cloud Server are valid for 1 full year. Year 2 renewals are charged at standard server/domain bundle rates (₹3,999/yr).</p>
                <p>• <strong>Content & Approvals:</strong> Client shall provide required business logos, phone numbers, and photos. Minor revisions are completed at zero extra cost.</p>
                <p>• <strong>Handover:</strong> Admin credentials and ownership are fully transferred once the final balance of ₹{balanceRemaining} is settled.</p>
              </div>

              {/* SIGNATURE SECTION WITH GREEN VERIFIED STAMP & ONLINE AGENCY SIGNATURE */}
              <div className="grid grid-cols-2 gap-4 pt-2.5 border-t-2 border-slate-300 print:break-inside-avoid print:pt-1.5">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1">CLIENT SIGNATURE & ACCEPTANCE</p>
                  <div className="h-20 print:h-16 border border-dashed border-slate-300 rounded-xl bg-slate-50 flex flex-col items-center justify-center text-center p-2">
                    <p className="text-xs font-bold text-slate-800">{clientName}</p>
                    <p className="text-[10px] text-slate-600 font-medium">{businessName}</p>
                    <p className="text-[8.5px] text-slate-400 mt-0.5">Signable online via Client Link</p>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-[10px] text-slate-600 font-bold">{clientName} ({businessName})</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex justify-between items-center mb-1">
                    <button
                      onClick={clearAgencySignature}
                      className="print:hidden text-[10px] text-rose-500 hover:underline"
                    >
                      Clear Sign
                    </button>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">AUTHORIZED AGENCY SIGNATURE & SEAL</p>
                  </div>

                  {/* GREEN EMBOSSED STAMP + SIGNATURE PAD */}
                  <div className="relative h-20 print:h-16 border-2 border-dashed border-green-600/40 rounded-xl bg-green-50/50 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-80 pointer-events-none select-none">
                      <div className="border border-green-700 bg-white/90 rounded px-2.5 py-0.5 text-green-800 font-extrabold text-[10px] uppercase tracking-widest rotate-[-2deg] shadow-sm flex items-center space-x-1">
                        <ShieldCheck size={12} className="text-green-700 inline mr-0.5" />
                        <span>VERIFIED BY SW TECH SOLUTION</span>
                      </div>
                      <p className="text-[7.5px] font-bold text-green-900 mt-0.5 tracking-wider">GARIMA STUDIO, AMBEDKARNAGAR UP • GOVT REG. COMPLIANT</p>
                    </div>

                    <canvas
                      ref={agencyCanvasRef}
                      width={320}
                      height={80}
                      onMouseDown={startAgencyDrawing}
                      onMouseMove={drawAgency}
                      onMouseUp={stopAgencyDrawing}
                      onMouseLeave={stopAgencyDrawing}
                      onTouchStart={startAgencyDrawing}
                      onTouchMove={drawAgency}
                      onTouchEnd={stopAgencyDrawing}
                      className="cursor-crosshair w-full h-full relative z-10"
                    />
                  </div>
                  <p className="text-[9px] text-green-900 font-bold mt-1">Authorized Signatory • SW Tech Solution</p>
                </div>
              </div>

            </div>
          </div>
        )}
        {/* TAB 2: OFFICIAL INVOICE */}
        {activeTab === 'invoice' && (
          <div className="space-y-6">
            <div className="print:hidden flex justify-between items-center p-4 rounded-2xl bg-slate-900 border border-white/10">
              <div>
                <h4 className="font-bold text-white">Instant Invoice Generator</h4>
                <p className="text-xs text-slate-400">Generate, print, or download clean PDF bills for clients.</p>
              </div>
              <button
                onClick={handlePrint}
                className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-all shadow-lg"
              >
                <Printer size={16} />
                <span>Print Official Invoice</span>
              </button>
            </div>

            {/* INVOICE PAPER */}
            <div className="bg-white text-slate-900 p-6 sm:p-10 rounded-3xl shadow-2xl border border-slate-200 max-w-4xl mx-auto print:p-2 print:border-none print:shadow-none print:rounded-none">
              
              <div className="flex justify-between items-start border-b-2 border-slate-900 pb-3 mb-3 print:pb-2 print:mb-2">
                <div>
                  <h2 className="text-2xl sm:text-3xl print:text-xl font-serif font-black text-orange-600 tracking-tight">SW TECH SOLUTION</h2>
                  <p className="text-[10px] text-slate-600 mt-0.5">Garima Studio, Neori Bajar, Ramnagar Road, Ambedkarnagar, UP</p>
                  <p className="text-[10px] text-slate-600">Phone: +91 8303994616 • Email: swgayanmitraai27@gmail.com</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xl print:text-lg font-serif font-black text-slate-900 tracking-wider">TAX INVOICE</span>
                  <p className="text-[11px] font-bold text-slate-700 mt-0.5">Invoice #: {invoiceNumber}</p>
                  <p className="text-[10px] text-slate-500">Invoice Date: {dealDate}</p>
                  <p className="text-[10px] text-slate-500">Payment Status: <span className={'font-bold ' + (balanceRemaining === 0 ? 'text-green-600' : 'text-orange-600')}>{balanceRemaining === 0 ? 'FULLY PAID' : 'PARTIAL / ADVANCE PAID'}</span></p>
                </div>
              </div>

              {/* INVOICE BILL TO */}
              <div className="grid grid-cols-2 gap-4 p-3 rounded-xl bg-slate-50 border border-slate-200 mb-3 print:p-2 print:mb-2 text-xs print:text-[10.5px]">
                <div>
                  <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider mb-0.5">INVOICED TO:</p>
                  <p className="text-sm print:text-xs font-bold text-slate-900">{clientName}</p>
                  <p className="font-semibold text-slate-700">{businessName}</p>
                  <p className="text-slate-600">{clientAddress}</p>
                  <p className="text-slate-600">Ph: +91 {clientPhone}</p>
                </div>
                <div>
                  <p className="text-slate-400 font-bold uppercase text-[9px] tracking-wider mb-0.5">PAYMENT & PROJECT REF:</p>
                  <p className="text-slate-700"><strong>Domain:</strong> {domainName}</p>
                  <p className="text-slate-700"><strong>Timeline:</strong> {deliveryDays}</p>
                  <p className="text-slate-700"><strong>Payment Mode:</strong> UPI / Online Transfer ({upiId})</p>
                </div>
              </div>

              {/* INVOICE ITEMS */}
              <table className="w-full text-xs print:text-[10px] text-left border border-slate-200 mb-3 print:mb-2">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-1.5 print:p-1 border border-slate-800">#</th>
                    <th className="p-1.5 print:p-1 border border-slate-800">Description of Service</th>
                    <th className="p-1.5 print:p-1 border border-slate-800 text-center">Validity</th>
                    <th className="p-1.5 print:p-1 border border-slate-800 text-right">Rate (₹)</th>
                    <th className="p-1.5 print:p-1 border border-slate-800 text-right">Total (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-1.5 print:p-1 border text-center">1</td>
                    <td className="p-1.5 print:p-1 border font-medium">
                      {selectedPackage === 'website' ? '5-Page Website (Website Dev 100% FREE • ₹1,999 Server/Domain Fee)' : selectedPackage === 'webapp' ? 'Full-Stack Custom Web App with Database & Admin Dashboard' : selectedPackage === 'android' ? 'Android Mobile App Deployment on Google Play Store + 1 Free Website' : customPackageName}
                    </td>
                    <td className="p-1.5 print:p-1 border text-center">1 Year</td>
                    <td className="p-1.5 print:p-1 border text-right">₹{dealAmount}</td>
                    <td className="p-1.5 print:p-1 border text-right font-bold">₹{dealAmount}</td>
                  </tr>
                  {selectedAddons.map((id, index) => {
                    const found = addonList.find(a => a.id === id);
                    return found ? (
                      <tr key={id}>
                        <td className="p-1.5 print:p-1 border text-center">{index + 2}</td>
                        <td className="p-1.5 print:p-1 border">{found.name}</td>
                        <td className="p-1.5 print:p-1 border text-center">Lifetime</td>
                        <td className="p-1.5 print:p-1 border text-right">₹{found.price}</td>
                        <td className="p-1.5 print:p-1 border text-right font-bold">₹{found.price}</td>
                      </tr>
                    ) : null;
                  })}
                </tbody>
              </table>

              {/* INVOICE TOTALS */}
              <div className="flex justify-between items-start text-xs print:text-[10px]">
                <div className="text-slate-600 max-w-xs space-y-0.5">
                  <p className="font-bold text-slate-800">Bank & Payment Details:</p>
                  <p>UPI ID: <strong>{upiId}</strong></p>
                  <p>Bank: State Bank of India / Paytm Payments Bank</p>
                  <p>Account Holder: SW Tech Solution</p>
                </div>

                <div className="w-60 space-y-1 text-xs print:text-[10px]">
                  <div className="flex justify-between py-0.5 border-b text-slate-700">
                    <span>Subtotal:</span>
                    <span>₹{grandTotal}</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b text-green-700 font-bold">
                    <span>Advance Received:</span>
                    <span>₹{advancePaid}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b-2 border-slate-900 font-black text-slate-900 bg-slate-50 px-1.5 rounded">
                    <span>Balance Due:</span>
                    <span>₹{balanceRemaining}</span>
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div className="mt-6 pt-3 border-t border-slate-200 flex justify-between items-end text-xs print:text-[10px] text-slate-500 print:break-inside-avoid">
                <div>
                  <p className="font-semibold text-slate-700">Thank you for partnering with SW Tech Solution!</p>
                  <p className="text-[9px]">For queries: +91 8303994616 • swgayanmitraai27@gmail.com</p>
                </div>
                <div className="text-right">
                  <div className="h-8 border-b border-slate-400 w-36 mb-1"></div>
                  <p className="font-bold text-slate-800 text-[10px]">Authorized Signatory</p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: ANNUAL RENEWAL & AMC REVENUE */}
        {activeTab === 'renewal' && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900 border border-white/10 backdrop-blur-xl">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white flex items-center">
                    <RefreshCw className="text-orange-400 mr-2" size={24} />
                    Annual Recurring Revenue (ARR) & Renewal Manager
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">
                    Keep track of client 2nd-year renewals for domain, hosting, emails, and maintenance.
                  </p>
                </div>

                <button
                  onClick={copyRenewalNotice}
                  className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-all shadow-lg"
                >
                  {copiedNotice ? <Check size={16} /> : <Copy size={16} />}
                  <span>{copiedNotice ? 'Copied to Clipboard!' : 'Copy WhatsApp Renewal Notice'}</span>
                </button>
              </div>

              {/* RENEWAL PRICING TIERS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">Tier 1  Basic</span>
                    <h4 className="text-xl font-bold text-white mt-1">Domain Only</h4>
                    <p className="text-slate-400 text-xs mt-2">Annual .com or .in registry extension renewal.</p>
                    <div className="text-3xl font-serif font-bold text-orange-400 mt-4">?999 <span className="text-xs text-slate-500">/ year</span></div>
                  </div>
                  <ul className="mt-6 space-y-2 text-xs text-slate-300">
                    <li className="flex items-center"><CheckCircle2 size={14} className="text-orange-500 mr-2" /> Domain Extension 1 Year</li>
                    <li className="flex items-center"><CheckCircle2 size={14} className="text-orange-500 mr-2" /> DNS Management</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-slate-950 border border-orange-500/40 shadow-xl shadow-orange-500/10 flex flex-col justify-between relative">
                  <div className="absolute -top-3 right-4 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Recommended Bundle
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-orange-400 tracking-wider">Tier 2  Standard</span>
                    <h4 className="text-xl font-bold text-white mt-1">Domain + Cloud Hosting</h4>
                    <p className="text-slate-400 text-xs mt-2">Ultra-fast NVMe cloud hosting + domain + 5 emails.</p>
                    <div className="text-3xl font-serif font-bold text-orange-400 mt-4">?2,499 <span className="text-xs text-slate-500">/ year</span></div>
                  </div>
                  <ul className="mt-6 space-y-2 text-xs text-slate-300">
                    <li className="flex items-center"><CheckCircle2 size={14} className="text-orange-500 mr-2" /> 1 Year Domain Included</li>
                    <li className="flex items-center"><CheckCircle2 size={14} className="text-orange-500 mr-2" /> High-speed Cloud Hosting</li>
                    <li className="flex items-center"><CheckCircle2 size={14} className="text-orange-500 mr-2" /> 5 Business Emails Active</li>
                    <li className="flex items-center"><CheckCircle2 size={14} className="text-orange-500 mr-2" /> SSL Security Certificate</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase font-bold text-purple-400 tracking-wider">Tier 3  Full AMC</span>
                    <h4 className="text-xl font-bold text-white mt-1">Complete Care & Support</h4>
                    <p className="text-slate-400 text-xs mt-2">Server + Domain + 24/7 dedicated support & monthly updates.</p>
                    <div className="text-3xl font-serif font-bold text-purple-400 mt-4">?3,999 <span className="text-xs text-slate-500">/ year</span></div>
                  </div>
                  <ul className="mt-6 space-y-2 text-xs text-slate-300">
                    <li className="flex items-center"><CheckCircle2 size={14} className="text-purple-400 mr-2" /> Everything in Standard Tier</li>
                    <li className="flex items-center"><CheckCircle2 size={14} className="text-purple-400 mr-2" /> Monthly Text / Banner Updates</li>
                    <li className="flex items-center"><CheckCircle2 size={14} className="text-purple-400 mr-2" /> 24/7 Priority Emergency Support</li>
                    <li className="flex items-center"><CheckCircle2 size={14} className="text-purple-400 mr-2" /> Automated Weekly Backups</li>
                  </ul>
                </div>
              </div>

              {/* RENEWAL PREVIEW BOX */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-white/5">
                <h5 className="text-sm font-bold text-white mb-2">WhatsApp Renewal Message Preview:</h5>
                <pre className="text-xs text-slate-400 whitespace-pre-wrap font-sans bg-slate-900 p-4 rounded-xl border border-white/5">
{'*ANNUAL DOMAIN & HOSTING RENEWAL NOTICE*\n*From:* SW TECH SOLUTION (Ambedkarnagar, UP)\n*Client:* ' + clientName + ' (' + businessName + ')\n*Website/Domain:* ' + domainName + '\n----------------------------------------\nDear Client, your 1-Year Cloud Hosting, Domain & Business Email cycle is scheduled for renewal.\n\n*Total Annual Renewal Bundle: ?3,999/-* (Includes Domain, Hosting, 5 Emails & Support)\nPay UPI: ' + upiId + '\n\nTo keep your website live without interruption, please confirm renewal.\nThank you,\n*SW Tech Solution* | +91 8303994616'}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: EXTRA FEATURES & UPSELLS */}
        {activeTab === 'addons' && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900 border border-white/10 backdrop-blur-xl">
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold text-white flex items-center">
                  <PlusCircle className="text-orange-400 mr-2" size={24} />
                  Extra Feature Add-ons & Quotation Calculator
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  Select custom features requested by the client to instantly add to their contract and invoice.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addonList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => {
                        if (isChecked) {
                          setSelectedAddons(selectedAddons.filter((id) => id !== addon.id));
                        } else {
                          setSelectedAddons([...selectedAddons, addon.id]);
                        }
                      }}
                      className={'p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ' + (
                        isChecked
                          ? 'bg-orange-500/15 border-orange-500 text-white shadow-lg'
                          : 'bg-slate-950 border-white/5 text-slate-300 hover:border-white/20'
                      )}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={'mt-0.5 w-5 h-5 rounded-md flex items-center justify-center border ' + (isChecked ? 'bg-orange-500 border-orange-500 text-white' : 'border-slate-600')}>
                          {isChecked && <Check size={14} />}
                        </div>
                        <div>
                          <p className="font-bold text-sm">{addon.name}</p>
                          <p className="text-xs text-slate-400 mt-0.5">Timeline: {addon.timeline}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold font-serif text-orange-400">+?{addon.price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-slate-950 border border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Selected Extra Addons Total</p>
                  <p className="text-3xl font-serif font-bold text-orange-400 mt-1">?{addonsTotal}</p>
                </div>
                <button
                  onClick={() => setActiveTab('agreement')}
                  className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-all"
                >
                  Apply to Agreement & Invoice ?
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
