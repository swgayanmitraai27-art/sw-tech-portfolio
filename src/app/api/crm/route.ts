import { NextResponse } from 'next/server';

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const DATABASE_ID = process.env.CLOUDFLARE_D1_DATABASE_ID;
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

async function queryD1(sql: string, params: any[] = []) {
  if (!ACCOUNT_ID || !DATABASE_ID || !API_TOKEN) {
    throw new Error('Cloudflare D1 environment credentials not configured.');
  }

  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/d1/database/${DATABASE_ID}/query`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ sql, params }),
    cache: 'no-store',
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.errors?.[0]?.message || 'D1 Query failed');
  }
  return data.result?.[0]?.results || [];
}

// GET: Fetch all clients from Cloudflare D1
export async function GET() {
  try {
    const rows = await queryD1('SELECT * FROM clients ORDER BY createdAt DESC');
    const clients = rows.map((r: any) => ({
      ...r,
      settled: Boolean(r.settled),
      addons: r.addons ? JSON.parse(r.addons) : [],
    }));
    return NextResponse.json({ success: true, clients });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST: Upsert a client in Cloudflare D1
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      id,
      clientName,
      businessName,
      clientPhone,
      clientEmail = '',
      domainName,
      selectedPackage,
      customPackageName,
      dealAmount,
      originalAmount,
      discountAmount,
      advancePaid,
      balanceRemaining,
      deliveryDays,
      dealDate,
      expiryDate,
      projectStage = 'development',
      settled = false,
      invoiceNumber,
      notes = '',
      addons = [],
      createdAt = new Date().toISOString(),
      updatedAt = new Date().toISOString(),
    } = body;

    const sql = `
      INSERT INTO clients (
        id, clientName, businessName, clientPhone, clientEmail,
        domainName, selectedPackage, customPackageName, dealAmount,
        originalAmount, discountAmount, advancePaid, balanceRemaining,
        deliveryDays, dealDate, expiryDate, projectStage, settled,
        invoiceNumber, notes, addons, createdAt, updatedAt
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET
        clientName = excluded.clientName,
        businessName = excluded.businessName,
        clientPhone = excluded.clientPhone,
        clientEmail = excluded.clientEmail,
        domainName = excluded.domainName,
        selectedPackage = excluded.selectedPackage,
        customPackageName = excluded.customPackageName,
        dealAmount = excluded.dealAmount,
        originalAmount = excluded.originalAmount,
        discountAmount = excluded.discountAmount,
        advancePaid = excluded.advancePaid,
        balanceRemaining = excluded.balanceRemaining,
        deliveryDays = excluded.deliveryDays,
        dealDate = excluded.dealDate,
        expiryDate = excluded.expiryDate,
        projectStage = excluded.projectStage,
        settled = excluded.settled,
        invoiceNumber = excluded.invoiceNumber,
        notes = excluded.notes,
        addons = excluded.addons,
        updatedAt = excluded.updatedAt;
    `;

    const params = [
      id,
      clientName,
      businessName,
      clientPhone,
      clientEmail,
      domainName,
      selectedPackage,
      customPackageName,
      dealAmount,
      originalAmount,
      discountAmount,
      advancePaid,
      balanceRemaining,
      deliveryDays,
      dealDate,
      expiryDate,
      projectStage,
      settled ? 1 : 0,
      invoiceNumber,
      notes,
      JSON.stringify(addons || []),
      createdAt,
      updatedAt,
    ];

    await queryD1(sql, params);
    return NextResponse.json({ success: true, message: 'Client saved to Cloudflare D1' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// DELETE: Delete a client
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });
    }

    await queryD1('DELETE FROM clients WHERE id = ?', [id]);
    return NextResponse.json({ success: true, message: 'Client deleted from Cloudflare D1' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
