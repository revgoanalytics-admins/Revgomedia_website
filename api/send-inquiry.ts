declare const process: { env: Record<string, string | undefined> }

const recipient = 'karthik.srinivas@revgomedia.com'
const growthOptions = [
  'Performance marketing (Meta Ads / Google Ads)',
  'Ecommerce web redesign',
  'New web design',
  'Conversion audit',
  'Other',
]

function textValue(value: unknown, maxLength: number): string {
  return typeof value === 'string' ? value.replace(/\0/g, '').trim().slice(0, maxLength) : ''
}

function jsonResponse(body: { success?: boolean; error?: string }, status: number): Response {
  return Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } })
}

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed.' }, 405)
    }

    const origin = request.headers.get('origin')
    if (origin && new URL(origin).host !== new URL(request.url).host) {
      return jsonResponse({ error: 'Request origin is not allowed.' }, 403)
    }

    let payload: unknown
    try {
      payload = await request.json()
    } catch {
      return jsonResponse({ error: 'Invalid request.' }, 400)
    }

    if (!payload || typeof payload !== 'object') {
      return jsonResponse({ error: 'Invalid request.' }, 400)
    }

    const form = payload as Record<string, unknown>
    if (textValue(form.companyWebsite, 200)) {
      return jsonResponse({ success: true }, 200)
    }

    const fullName = textValue(form.fullName, 120).replace(/[\r\n]+/g, ' ')
    const email = textValue(form.email, 254)
    const phone = textValue(form.phone, 40)
    const website = textValue(form.website, 300)
    const growthNeed = textValue(form.growthNeed, 100)
    const otherGrowthNeed = textValue(form.otherGrowthNeed, 200)
    const projectDetails = textValue(form.projectDetails, 5000)

    if (!fullName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || phone.replace(/\D/g, '').length < 7) {
      return jsonResponse({ error: 'Enter a valid name, email, and phone number.' }, 400)
    }

    if (growthNeed && !growthOptions.includes(growthNeed)) {
      return jsonResponse({ error: 'Select a valid growth need.' }, 400)
    }

    if (website) {
      try {
        const websiteUrl = new URL(website)
        if (websiteUrl.protocol !== 'http:' && websiteUrl.protocol !== 'https:') throw new Error('Invalid protocol')
      } catch {
        return jsonResponse({ error: 'Enter a valid website URL.' }, 400)
      }
    }

    const apiKey = process.env.RESEND_API_KEY
    const sender = process.env.RESEND_FROM_EMAIL
    if (!apiKey || !sender) {
      return jsonResponse({ error: 'Email delivery is not configured yet.' }, 503)
    }

    const message = [
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Store website: ${website || 'Not provided'}`,
      `Primary growth need: ${growthNeed || 'Not provided'}`,
      `Other: ${otherGrowthNeed || 'Not provided'}`,
      '',
      'Project details:',
      projectDetails || 'Not provided',
    ].join('\n')

    try {
      const providerResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: sender,
          to: [recipient],
          reply_to: email,
          subject: `Website inquiry from ${fullName}`,
          text: message,
        }),
      })

      if (!providerResponse.ok) {
        return jsonResponse({ error: 'We could not send your inquiry. Please try again.' }, 502)
      }

      return jsonResponse({ success: true }, 200)
    } catch {
      return jsonResponse({ error: 'We could not send your inquiry. Please try again.' }, 502)
    }
  },
}