"use client";

import { LeaderboardPage } from "../components/pages/LeaderboardPage";
import { CURRENT_WEEK } from "../constants/weeks";

export default function Page() {
  return <LeaderboardPage defaultWeek={CURRENT_WEEK} />;
}
