const CONTACT_EMAIL = "hi@aaruchudar.com";

export function openMailto(subject: string, body: string, to = CONTACT_EMAIL) {
  const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
}
