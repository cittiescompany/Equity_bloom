import { NextResponse } from "next/server";

const API_KEY = "84d286cf753d40fc05b1c676"; // Replace with your key

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const amount = searchParams.get("amount");
  const from = searchParams.get("from");
  const to = searchParams.get("to");

  if (!amount || !from || !to) {
    return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
  }

  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`);
    const data = await response.json();

    if (data.result === "error") {
      return NextResponse.json({ error: "Invalid currency code" }, { status: 400 });
    }

    const exchangeRate = data.conversion_rates[to];
    if (!exchangeRate) {
      return NextResponse.json({ error: "Conversion rate not found" }, { status: 400 });
    }

    const convertedAmount = (amount * exchangeRate).toFixed(2);
    return NextResponse.json({ convertedAmount });
  } catch (error) {
    console.error("Currency Conversion Error:", error);
    return NextResponse.json({ error: "Conversion failed" }, { status: 500 });
  }
}
