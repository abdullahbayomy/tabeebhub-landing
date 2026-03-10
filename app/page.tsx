export default function Home() {
  const features = [
    { title: 'Patient Management', description: 'Keep patient records and history in one place.' },
    { title: 'Appointment Scheduling', description: 'Book and manage appointments with ease.' },
    { title: 'Digital Prescriptions', description: 'Create and share prescriptions digitally.' },
    { title: 'Clinic Analytics', description: 'Insights and reports for your clinic.' },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        {/* Hero */}
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">TabeebHub</h1>
          <p className="mt-3 text-xl text-gray-600 sm:text-2xl">
            Clinic Management System for Doctors and Clinics
          </p>
          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            TabeebHub helps clinics manage patients, appointments, prescriptions, and payments in one platform.
          </p>
        </section>

        {/* Features */}
        <section className="mt-20">
          <h2 className="text-center text-2xl font-semibold text-gray-900">Features</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f.title} className="rounded-lg border border-gray-200 bg-gray-50/50 p-5">
                <h3 className="font-medium text-gray-900">{f.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{f.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section className="mt-20">
          <h2 className="text-center text-2xl font-semibold text-gray-900">About</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-gray-500">
            TabeebHub is a healthcare SaaS platform that helps clinics digitize their workflow—from patient intake to prescriptions and analytics—so you can focus on care.
          </p>
        </section>

        {/* Contact */}
        <section className="mt-20 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>
          <p className="mt-4">
            <a href="mailto:support@tabeebhub.com" className="text-blue-600 hover:underline">
              support@tabeebhub.com
            </a>
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-24 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          © 2026 TabeebHub. All rights reserved.
        </footer>
      </main>
    </div>
  )
}
