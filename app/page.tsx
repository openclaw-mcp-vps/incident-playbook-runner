export default function Home() {
  const faqs = [
    {
      q: 'What integrations are included?',
      a: 'Slack, PagerDuty, and email notifications are built-in. Playbooks can trigger webhooks to any external service.'
    },
    {
      q: 'Can I customize playbooks for my team?',
      a: 'Yes. You can define custom runbooks with conditional steps, assignees, escalation paths, and automated checks.'
    },
    {
      q: 'Is there a free trial?',
      a: 'We offer a 14-day free trial with full access. No credit card required to start.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          DevOps &amp; SRE Tooling
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Automated Incident Response<br />
          <span className="text-[#58a6ff]">with Team Coordination</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Execute predefined incident playbooks, coordinate your team in real time, and send automated notifications to Slack, PagerDuty, and email — all from one dashboard.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial
        </a>
        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[['Playbook Engine', 'Run structured runbooks automatically'],['Real-Time Alerts', 'Slack, PagerDuty & email in seconds'],['Task Tracking', 'Assign, track, and close incident tasks']].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$79</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {['Unlimited playbooks','Slack, PagerDuty & email alerts','Real-time incident dashboard','Custom runbook steps & conditions','14-day free trial'].map(f => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">&#10003;</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started — $79/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Incident Playbook Runner. All rights reserved.
      </footer>
    </main>
  )
}
