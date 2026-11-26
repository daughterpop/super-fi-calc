import { useEffect } from 'react';

// AdSense backfill unit. DO NOT MERGE until real ad unit slot IDs exist:
// 1. Submit this site in AdSense and wait for approval.
// 2. Create an ad unit in AdSense and replace AD_SLOT below with its data-ad-slot ID.
const AD_CLIENT = 'ca-pub-3388682648764850';
const AD_SLOT = 'PASTE_AD_SLOT_HERE';

export default function AdSenseUnit() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense not ready (e.g. before approval) — renders nothing.
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
