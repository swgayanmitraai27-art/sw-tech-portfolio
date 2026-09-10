# 🔐 SW TECH SOLUTION — ADMIN PORTAL ACCESS & CREDENTIALS

Yeh file aapke portal ke secret PIN, URLs aur zaroori jankari ke liye banayi gayi hai taaki aap kabhi bhi isse dekh kar portal open kar sakein.

---

## 🔑 1. Portal Secret PIN (Admin Passcode)

Aap in dono mein se koi bhi PIN use kar sakte hain portal unlock karne ke liye:

* **Primary PIN:** 1234
* **Master PIN:** swtech2026

---

## 🌐 2. Official Portal Links & URLs

| Portal Section | URL Route | Description & Purpose |
| :--- | :--- | :--- |
| **Admin Deal Maker & CRM** | /portal/deal-maker | Agreement generator, GST invoice, CRM Client Database & 1-Year Expiry Tracker. (PIN Protected) |
| **Client Digital Signature** | /sign | Public link for clients to sign deals on mobile with green verified stamp & single-page A4 PDF download. |
| **Main Website** | / | SW Tech Solution Agency portfolio & services landing page. |

---

## 🏢 3. Registered Agency Information

* **Agency Name:** SW TECH SOLUTION
* **Office Address:** Garima Studio, Neori Bajar, Ramnagar Road, Ambedkar Nagar, UP
* **Official WhatsApp / Phone:** +91 8303994616
* **Official Email:** info@swtechsolution.in

---

## 💾 4. Client Data & Backup

* Saara client data aapke browser ke secure **Local Storage** (swtech_crm_clients) mein save hota hai.
* Data ka offline backup lene ke liye Deal Maker ke **Clients & Expiry (CRM)** tab mein jaakar **Export Backup (JSON)** button par click karein.

---

## 🛠️ 5. PIN Kaise Badle (Agar Future Mein Change Karna Ho)

Agar aapko passcode badalna ho to aap src/app/portal/deal-maker/page.tsx mein jakar passcode === '1234' || passcode === 'swtech2026' ko edit kar sakte hain.
