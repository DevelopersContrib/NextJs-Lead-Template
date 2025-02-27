"use client";

import { useFetchReferral } from "@/lib/hooks/useReferralFetcher";
import { useReferralStore } from "@/lib/store/useReferralStore";
import ReferralWidget from "@/components/ScriptWidget/ReferralScript";

const ReferralPage = () => {
  const { campaignId } = useReferralStore();
  useFetchReferral();

  return <ReferralWidget campaignId={campaignId} />;
};

export default ReferralPage;
