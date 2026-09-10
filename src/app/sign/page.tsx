'use client';

import React, { useState, useRef, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  FileText,
  CheckCircle2,
  Printer,
  Send,
  Sparkles,
  ShieldCheck,
  Building2,
  Calendar,
  CreditCard,
  Phone,
  Check
} from 'lucide-react';

function SignContractComponent() {
  const searchParams = useSearchParams();

  // State
  const [clientName, setClientName] = useState('Client');
  const [businessName, setBusinessName] = useState('Business Firm');
  const [clientPhone, setClientPhone] = useState('');
  const [domainName, setDomainName] = useState('');
  const [planTitle, setPlanTitle] = useState('5-Page High-Speed Website');
  const [dealAmount, setDealAmount] = useState(1999);
  const [advancePaid, setAdvancePaid] = useState(1000);
  const [balanceRemaining, setBalanceRemaining] = useState(999);
  const [deliveryDays, setDeliveryDays] = useState('24 Hours');
  const [invoiceNumber, setInvoiceNumber] = useState('SWTS-2026-CONTRACT');
  const [dealDate, setDealDate] = useState('2026-09-10');
  const [upiId, setUpiId] = useState('8303994616@paytm');

  // Canvas
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSignedSubmitted, setIsSignedSubmitted] = useState(false);
  const [signatureTime, setSignatureTime] = useState('');

  useEffect(() => {
    try {
      const d = searchParams.get('d');
      if (d) {
        const decoded = JSON.parse(decodeURIComponent(escape(atob(d))));
        if (decoded.clientName) setClientName(decoded.clientName);
        if (decoded.businessName) setBusinessName(decoded.businessName);
        if (decoded.clientPhone) setClientPhone(decoded.clientPhone);
        if (decoded.domainName) setDomainName(decoded.domainName);
        if (decoded.planTitle) setPlanTitle(decoded.planTitle);
        if (decoded.dealAmount) setDealAmount(decoded.dealAmount);
        if (decoded.advancePaid) setAdvancePaid(decoded.advancePaid);
        if (decoded.balanceRemaining !== undefined) setBalanceRemaining(decoded.balanceRemaining);
        if (decoded.deliveryDays) setDeliveryDays(decoded.deliveryDays);
        if (decoded.invoiceNumber) setInvoiceNumber(decoded.invoiceNumber);
        if (decoded.dealDate) setDealDate(decoded.dealDate);
        if (decoded.upiId) setUpiId(decoded.upiId);
        return;
      }

      if (searchParams.get('name')) setClientName(searchParams.get('name') || '');
      if (searchParams.get('biz')) setBusinessName(searchParams.get('biz') || '');
      if (searchParams.get('phone')) setClientPhone(searchParams.get('phone') || '');
      if (searchParams.get('domain')) setDomainName(searchParams.get('domain') || '');
      if (searchParams.get('plan')) setPlanTitle(searchParams.get('plan') || '');
      if (searchParams.get('amt')) setDealAmount(Number(searchParams.get('amt')));
      if (searchParams.get('adv')) setAdvancePaid(Number(searchParams.get('adv')));
      if (searchParams.get('due')) setBalanceRemaining(Number(searchParams.get('due')));
      if (searchParams.get('days')) setDeliveryDays(searchParams.get('days') || '');
    } catch (err) {
      console.error('Error parsing contract payload:', err);
    }
  }, [searchParams]);

  // Drawing
  const startDrawing = (e: any) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    setIsDrawing(true);
    setHasSignature(true);
    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: any) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  };

  const handleSubmitSign = () => {
    if (!hasSignature) {
      alert('Please draw your signature in the signature box before submitting.');
      return;
    }
    if (!isAgreed) {
      alert('Please check the agreement box to accept the terms.');
      return;
    }
    setIsSignedSubmitted(true);
    setSignatureTime(new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
  };

  const sendConfirmationWhatsApp = () => {
    const msg = '*DIGITALLY SIGNED & ACCEPTED CONTRACT*\n' +
      '*Client Name:* ' + clientName + '\n' +
      '*Business Name:* ' + businessName + '\n' +
      '*Contract Ref:* ' + invoiceNumber + '\n' +
      '*Package:* ' + planTitle + '\n' +
      '*Total Value:* ?' + dealAmount + '\n' +
      '*Advance Paid:* ?' + advancePaid + '\n' +
      '*Balance Due on Delivery:* ?' + balanceRemaining + '\n' +
      '*Signed Date & Time:* ' + (signatureTime || new Date().toLocaleString()) + '\n\n' +
      '_I have reviewed and digitally signed the project agreement with SW Tech Solution. Please proceed with the development as per the terms._';

    window.open('https://wa.me/918303994616?text=' + encodeURIComponent(msg), '_blank');
  };
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* TOP NOTICE */}
        <div className="print:hidden mb-6 p-4 rounded-2xl bg-gradient-to-r from-orange-500/20 via-amber-500/10 to-transparent border border-orange-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold shadow-lg">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Digital Project Agreement & Sign Portal</h3>
              <p className="text-xs text-slate-400">SW Tech Solution  Garima Studio, Neori Bajar, Ambedkarnagar UP</p>
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white text-slate-950 text-xs font-bold hover:bg-slate-200 transition-colors shadow"
          >
            <Printer size={14} />
            <span>Print Contract</span>
          </button>
        </div>

        {/* PRINTABLE AGREEMENT DOCUMENT */}
        <div className="bg-white text-slate-900 p-8 sm:p-12 rounded-3xl shadow-2xl border border-slate-200 print:p-0 print:border-none print:shadow-none">
          
          {/* HEADER */}
          <div className="flex justify-between items-start border-b-2 border-slate-900 pb-6 mb-8">
            <div>
              <span className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-orange-600">
                SW TECH SOLUTION
              </span>
              <p className="text-xs uppercase tracking-widest text-slate-600 font-bold mt-1">
                Software Development & Digital Architecture Agency
              </p>
              <p className="text-xs text-slate-600 mt-1">
                Garima Studio, Neori Bajar, Ramnagar Road, Ambedkarnagar, UP
              </p>
              <p className="text-xs text-slate-600">
                Phone / WhatsApp: +91 8303994616  Official UPI: {upiId}
              </p>
            </div>
            <div className="text-right">
              <div className="inline-block bg-slate-900 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-2">
                Client Project Contract
              </div>
              <p className="text-xs font-bold text-slate-700">Agreement No: {invoiceNumber}</p>
              <p className="text-xs text-slate-500">Date: {dealDate}</p>
            </div>
          </div>

          {/* CLIENT DETAILS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 rounded-xl bg-slate-50 border border-slate-200 mb-8 text-xs">
            <div>
              <p className="text-slate-400 font-bold uppercase text-[10px] tracking-wider mb-1">CLIENT & BUSINESS DETAILS</p>
              <p className="text-sm font-bold text-slate-900">{clientName}</p>
              <p className="font-semibold text-slate-700">{businessName}</p>
              {clientPhone && <p className="text-slate-600">Contact: +91 {clientPhone}</p>}
            </div>
            <div>
              <p className="text-slate-400 font-bold uppercase text-[10px] tracking-wider mb-1">PROJECT SPECIFICATION</p>
              <p className="text-sm font-bold text-orange-600">{planTitle}</p>
              {domainName && <p className="text-slate-700"><strong>Registered Domain:</strong> {domainName}</p>}
              <p className="text-slate-700"><strong>Delivery Timeline:</strong> {deliveryDays}</p>
              <p className="text-slate-700"><strong>Validity:</strong> 1 Year Live Server & Domain Maintenance</p>
            </div>
          </div>

          {/* SCOPE OF DELIVERABLES */}
          <div className="mb-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b pb-2 mb-3">
              1. Project Deliverables & Service Inclusions
            </h4>
            <ul className="text-xs text-slate-700 space-y-2 list-disc pl-5 leading-relaxed">
              <li><strong>Custom Design & Development:</strong> Bespoke high-speed responsive layout tailored for {businessName}, optimized for mobile, tablet, and desktop screens.</li>
              <li><strong>Domain & High-Speed Hosting:</strong> 1 Year of top-level Domain registration ({domainName || 'Your Selected Domain'}) + 1 Year NVMe Cloud Hosting.</li>
              <li><strong>Professional Business Emails:</strong> Up to 5 domain-branded business mailboxes configured.</li>
              <li><strong>Security & SSL Certificate:</strong> Full HTTPS SSL encryption and security setup.</li>
              <li><strong>Support:</strong> 24/7 technical customer support and uptime monitoring by SW Tech Solution.</li>
            </ul>
          </div>

          {/* COMMERCIAL TERMS */}
          <div className="mb-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b pb-2 mb-3">
              2. Commercials & Payment Summary
            </h4>
            <table className="w-full text-xs text-left border border-slate-200">
              <thead className="bg-slate-100 text-slate-800">
                <tr>
                  <th className="p-2 border">Service Description</th>
                  <th className="p-2 border text-center">Term</th>
                  <th className="p-2 border text-right">Amount (?)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border font-medium">{planTitle}</td>
                  <td className="p-2 border text-center">1 Year</td>
                  <td className="p-2 border text-right font-bold">?{dealAmount}</td>
                </tr>
                <tr className="bg-slate-50 font-bold">
                  <td className="p-2 border text-right" colSpan={2}>Total Contract Value:</td>
                  <td className="p-2 border text-right text-sm">?{dealAmount}</td>
                </tr>
                <tr className="text-green-700 font-bold">
                  <td className="p-2 border text-right" colSpan={2}>Advance Amount Paid:</td>
                  <td className="p-2 border text-right">?{advancePaid}</td>
                </tr>
                <tr className="bg-orange-50 text-orange-900 font-bold text-sm">
                  <td className="p-2 border text-right" colSpan={2}>Balance Due on Delivery:</td>
                  <td className="p-2 border text-right">?{balanceRemaining}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* KEY GUARANTEES */}
          <div className="mb-8 text-[10px] text-slate-600 leading-normal space-y-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <p className="font-bold text-slate-800 uppercase text-[11px] mb-1">3. Key Terms & Service Guarantee:</p>
            <p> <strong>Timely Delivery:</strong> Development is scheduled for delivery within {deliveryDays}.</p>
            <p> <strong>Ownership & Handover:</strong> 100% full source and admin ownership transferred upon settlement of remaining balance.</p>
            <p> <strong>Annual Renewals:</strong> Year 2 renewal is charged at standard server/domain rates (Bundle: ?3,999/year).</p>
          </div>

          {/* SIGNATURE SECTION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t-2 border-slate-300">
            
            {/* CLIENT SIGNATURE */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                CLIENT DIGITAL SIGNATURE {isSignedSubmitted && <span className="text-green-600">(? SIGNED)</span>}
              </p>
              
              <div className="relative h-28 border-2 border-dashed border-slate-400 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden">
                <canvas
                  ref={canvasRef}
                  width={340}
                  height={112}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                  className="cursor-crosshair w-full h-full"
                />
                {!hasSignature && (
                  <span className="print:hidden absolute text-slate-400 text-xs pointer-events-none text-center px-4">
                    ?? Draw your signature here using finger (Touch) or mouse
                  </span>
                )}
              </div>

              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-slate-700 font-bold">{clientName} ({businessName})</span>
                {!isSignedSubmitted && (
                  <button
                    onClick={clearSignature}
                    className="print:hidden text-xs text-rose-500 hover:underline font-medium"
                  >
                    Clear Sign
                  </button>
                )}
              </div>

              {isSignedSubmitted && (
                <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded-lg text-[10px] text-green-800 flex items-center">
                  <Check size={12} className="mr-1 text-green-600 shrink-0" />
                  <span>Digitally Signed on {signatureTime}</span>
                </div>
              )}
            </div>

            {/* AGENCY STAMP */}
            <div className="text-right flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">AUTHORIZED AGENCY SEAL</p>
                <div className="h-28 border border-dashed border-orange-300 rounded-xl bg-orange-50/40 flex flex-col items-center justify-center text-center p-2">
                  <div className="border-2 border-orange-600 rounded-lg px-4 py-1.5 text-orange-700 font-bold text-xs uppercase tracking-widest rotate-[-2deg] shadow-sm">
                    SW TECH SOLUTION
                    <div className="text-[8px] font-normal text-slate-600">OFFICIAL SEAL & STAMP</div>
                  </div>
                  <p className="text-[9px] text-slate-500 mt-2">Garima Studio, Ambedkarnagar UP</p>
                </div>
              </div>
              <p className="text-[10px] text-slate-600 font-bold mt-2">Authorized Signatory  SW Tech Solution</p>
            </div>

          </div>

          {/* CLIENT ACCEPTANCE ACTION BAR */}
          <div className="print:hidden mt-8 pt-6 border-t border-slate-200">
            {!isSignedSubmitted ? (
              <div className="space-y-4">
                <label className="flex items-start space-x-3 cursor-pointer p-4 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={isAgreed}
                    onChange={(e) => setIsAgreed(e.target.checked)}
                    className="mt-1 h-4 w-4 text-orange-600 rounded border-slate-300 focus:ring-orange-500"
                  />
                  <span className="text-xs text-slate-700 leading-relaxed">
                    I, <strong>{clientName}</strong>, hereby accept the deliverables, pricing of ?{dealAmount} (Advance: ?{advancePaid}, Due: ?{balanceRemaining}), and terms outlined in this agreement by SW Tech Solution.
                  </span>
                </label>

                <button
                  onClick={handleSubmitSign}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-base transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center space-x-2"
                >
                  <CheckCircle2 size={20} />
                  <span>Accept & Digitally Sign Agreement</span>
                </button>
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-green-50 border border-green-200 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto shadow-lg">
                  <Check size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-green-900">Contract Successfully Signed!</h4>
                  <p className="text-xs text-green-700 mt-1">
                    Thank you! Your signed copy has been registered with SW Tech Solution.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={sendConfirmationWhatsApp}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-xs transition-colors flex items-center justify-center space-x-2 shadow"
                  >
                    <Send size={14} />
                    <span>Send Signed Receipt to WhatsApp</span>
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center justify-center space-x-2"
                  >
                    <Printer size={14} />
                    <span>Download Signed PDF</span>
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

export default function SignPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">Loading Contract...</div>}>
      <SignContractComponent />
    </Suspense>
  );
}
