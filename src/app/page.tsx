const skills = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"];

const projects = [
  {
    title: "Project A - Sistem Kasir",
    description: "Aplikasi kasir web dengan laporan harian dan manajemen produk."
  },
  {
    title: "Project B - Website Company Profile",
    description: "Landing page responsif dengan optimasi SEO dan performa."
  },
  {
    title: "Project C - Dashboard Admin",
    description: "Dashboard statistik dengan otentikasi dan visualisasi data."
  }
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-12">
      <section className="rounded-2xl bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Hero</p>
        <h1 className="mt-2 text-4xl font-bold">Halo, saya Akmal 👋</h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Front-end developer yang suka bikin web cepat, rapi, dan mudah dipakai.
          Saat ini saya fokus belajar Next.js, TypeScript, dan best practice UI.
        </p>
      </section>

      <section className="rounded-2xl bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">About</p>
        <p className="mt-3 text-slate-700">
          Saya membangun portofolio ini untuk menunjukkan proses belajar saya, bukan hanya hasil
          akhir. Setiap project akan berisi tantangan, solusi, dan hal yang saya pelajari.
        </p>
      </section>

      <section className="rounded-2xl bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Skills</p>
        <ul className="mt-4 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li key={skill} className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Projects</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="rounded-xl border border-slate-200 p-4">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Contact</p>
        <p className="mt-3 text-slate-700">Email: akmal@example.com · LinkedIn: linkedin.com/in/akmal</p>
      </section>
    </main>
  );
}
