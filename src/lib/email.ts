import { Resend } from "resend";

let _resend: Resend | null = null;
function getResend() {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY!);
  return _resend;
}

const FROM = "Kosher Connect <hello@kosherconnect.app>";

function baseTemplate(content: string, footer: string) {
  return `<!DOCTYPE html>
<html><body style="margin:0;padding:0;background-color:#FDF6EC;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FDF6EC;padding:40px 20px;">
<tr><td align="center">
<table width="100%" style="max-width:560px;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
<tr><td style="height:4px;background:linear-gradient(to right,#C5A55A,#8B2252,#1B3A5C);"></td></tr>
<tr><td style="padding:32px 40px 0;text-align:center;">
<div style="display:inline-block;background:#1B3A5C;border-radius:11px;width:40px;height:40px;line-height:40px;text-align:center;">
<span style="color:#C5A55A;font-size:20px;">&#9733;</span>
</div>
<p style="margin:12px 0 0;font-size:22px;font-weight:700;color:#1B3A5C;letter-spacing:-0.5px;">Kosher Connect</p>
</td></tr>
<tr><td style="padding:24px 40px 32px;">${content}
<p style="margin:16px 0 0;font-size:15px;color:#1B3A5C;font-weight:600;">&mdash; The Kosher Connect Team</p>
</td></tr>
<tr><td style="padding:20px 40px;background:#1B3A5C;text-align:center;">
<p style="margin:0 0 4px;font-size:12px;color:rgba(255,255,255,0.5);">Kosher Connect &middot; LA &middot; NYC &middot; Miami</p>
<p style="margin:0;font-size:11px;color:rgba(255,255,255,0.3);">${footer}</p>
</td></tr>
</table>
</td></tr>
</table>
</body></html>`;
}

function cta(text: string, href: string) {
  return `<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
<a href="${href}" style="display:inline-block;background:#8B2252;color:#ffffff;font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:1px;text-decoration:none;padding:14px 32px;border-radius:100px;">${text}</a>
</td></tr></table>`;
}

export async function sendWaitlistWelcome(email: string) {
  const content = `
<h1 style="margin:0 0 16px;font-size:26px;font-weight:700;color:#1B3A5C;text-align:center;">You're on the list!</h1>
<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#555;">Hey there,</p>
<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#555;">Welcome to <strong style="color:#1B3A5C;">Kosher Connect</strong> &mdash; the Jewish community hub for kosher spots, events, daily nudges, and your people.</p>
<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#555;">You're among the first to join, and we're building something special. Here's what's coming:</p>
<table width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0;">
<tr><td style="padding:8px 0;font-size:14px;color:#555;">&#128205; <strong style="color:#1B3A5C;">Kosher Hotspots</strong> &mdash; live map with ratings, filters &amp; kosher scanner</td></tr>
<tr><td style="padding:8px 0;font-size:14px;color:#555;">&#128197; <strong style="color:#1B3A5C;">Jewish Calendar</strong> &mdash; holidays, events, Shabbat times &amp; RSVP</td></tr>
<tr><td style="padding:8px 0;font-size:14px;color:#555;">&#127881; <strong style="color:#1B3A5C;">Simcha Table</strong> &mdash; vendors for catering, photography, music &amp; more</td></tr>
<tr><td style="padding:8px 0;font-size:14px;color:#555;">&#10024; <strong style="color:#1B3A5C;">Daily Nudges</strong> &mdash; Torah insights, Yiddish word of the day &amp; life hacks</td></tr>
</table>
<p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#555;">We'll send you a TestFlight invite as soon as your spot opens up. Stay tuned.</p>
${cta("Visit Kosher Connect", "https://kosherconnect.app")}
<p style="margin:24px 0 0;font-size:15px;line-height:1.6;color:#555;">Let's welcome Shabbat together.</p>`;

  await getResend().emails.send({
    from: FROM,
    to: email,
    subject: "Welcome to Kosher Connect!",
    html: baseTemplate(content, "You signed up at kosherconnect.app"),
  });
}

export async function sendVendorConfirmation(email: string, businessName: string) {
  const content = `
<h1 style="margin:0 0 16px;font-size:26px;font-weight:700;color:#1B3A5C;text-align:center;">We got your listing!</h1>
<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#555;">Hey there,</p>
<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#555;">Thank you for submitting <strong style="color:#1B3A5C;">${businessName}</strong> to Kosher Connect. We're excited to have you join the community.</p>
<p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#555;">Here's what happens next:</p>
<table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px;background:#FDF6EC;border-radius:12px;">
<tr><td style="padding:16px 20px;font-size:14px;line-height:2;color:#555;">
<strong style="color:#C5A55A;">Step 1</strong> &mdash; Our team reviews your submission (within 48 hours)<br>
<strong style="color:#C5A55A;">Step 2</strong> &mdash; We verify your details and kosher certification<br>
<strong style="color:#C5A55A;">Step 3</strong> &mdash; Your listing goes live and starts reaching customers
</td></tr>
</table>
<p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#555;">Once approved, your business will be discoverable by thousands of kosher consumers. No fees, no hidden costs &mdash; just community.</p>
${cta("Visit Kosher Connect", "https://kosherconnect.app/work-with-us")}
<p style="margin:24px 0 0;font-size:15px;line-height:1.6;color:#555;">Questions? Just reply to this email &mdash; we're here to help.</p>`;

  await getResend().emails.send({
    from: FROM,
    to: email,
    subject: "Your Business Submission is In!",
    html: baseTemplate(content, "You submitted a business listing at kosherconnect.app"),
  });
}

export async function sendModeratorConfirmation(email: string, name: string) {
  const content = `
<h1 style="margin:0 0 16px;font-size:26px;font-weight:700;color:#1B3A5C;text-align:center;">Welcome to the mission.</h1>
<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#555;">Hey ${name},</p>
<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#555;">We received your application to join the <strong style="color:#1B3A5C;">Kosher Connect</strong> moderator team. Thank you for wanting to help build something meaningful.</p>
<p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#555;">As a moderator, you'll help us:</p>
<table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px;">
<tr><td style="padding:8px 0;font-size:14px;color:#555;">&#128270; <strong style="color:#1B3A5C;">Discover</strong> &mdash; Find and add kosher vendors in your city</td></tr>
<tr><td style="padding:8px 0;font-size:14px;color:#555;">&#9989; <strong style="color:#1B3A5C;">Verify</strong> &mdash; Confirm business details and certifications</td></tr>
<tr><td style="padding:8px 0;font-size:14px;color:#555;">&#128737;&#65039; <strong style="color:#1B3A5C;">Moderate</strong> &mdash; Keep reviews honest and content quality high</td></tr>
<tr><td style="padding:8px 0;font-size:14px;color:#555;">&#127793; <strong style="color:#1B3A5C;">Grow</strong> &mdash; Help expand Kosher Connect to new neighborhoods</td></tr>
</table>
<p style="margin:0 0 8px;font-size:15px;line-height:1.6;color:#555;"><strong style="color:#1B3A5C;">What's next?</strong></p>
<p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#555;">We review every application personally. You'll hear back within a few days. If it's a match, we'll set you up with access and a quick onboarding call.</p>
${cta("Visit Kosher Connect", "https://kosherconnect.app")}
<p style="margin:24px 0 0;font-size:15px;line-height:1.6;color:#555;">We appreciate you. This community is built by people like you.</p>`;

  await getResend().emails.send({
    from: FROM,
    to: email,
    subject: "Moderator Application Received",
    html: baseTemplate(content, "You applied to moderate at kosherconnect.app"),
  });
}
