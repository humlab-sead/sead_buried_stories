// The SEAD browser every "Open in SEAD" link points at. super.sead.se rather than
// browser.sead.se, whose site pages currently never finish loading.
export const SEAD_BROWSER_URL = "https://super.sead.se";

export const seadSiteUrl = (siteId: number) => `${SEAD_BROWSER_URL}/site/${siteId}`;
