import { NextResponse } from "next/server";
import { UNIQUE_PLAYER_NAMES } from "@/lib/cricsight-data";

export async function GET() {
  return NextResponse.json({
    identifier: "player_name",
    total: UNIQUE_PLAYER_NAMES.length,
    players: UNIQUE_PLAYER_NAMES,
  });
}
