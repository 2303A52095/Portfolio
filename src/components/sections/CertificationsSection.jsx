import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight, FiAward } from 'react-icons/fi'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const pdfJsUrl = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/+esm'
const pdfWorkerUrl = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.worker.mjs'

function FeaturedCertificate({ certification }) {
  return (
    <Reveal>
      <motion.article
        whileHover={{ y: -8 }}
        className="soft-border overflow-hidden rounded-[1.75rem] bg-white p-3 text-slate-950 shadow-2xl"
      >
        <div className="border-4 border-slate-950 px-5 py-8 text-center sm:px-10 sm:py-12">
          <div className="mx-auto flex max-w-xl items-center justify-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white">
              <FiAward className="text-3xl" />
            </div>
            <p className="text-3xl font-extrabold text-red-600 sm:text-5xl">
              {certification.issuer}
            </p>
          </div>

          <h3 className="mt-10 text-4xl font-black uppercase tracking-[0.08em] text-slate-950 sm:text-6xl lg:text-7xl">
            {certification.title}
          </h3>

          <p className="mt-12 text-lg tracking-[0.2em] text-slate-700">
            This certificate is presented to
          </p>
          <p className="mx-auto mt-5 max-w-xl border-b-2 border-slate-400 pb-3 font-mono text-3xl font-bold tracking-[0.08em] text-slate-800 sm:text-5xl">
            {certification.recipient}
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-800 sm:text-2xl">
            for successfully completing the Dynamic Programming Camp under the mentorship of{' '}
            <span className="font-bold">{certification.mentor}</span> and conquering Matrix
            Exponentiation and SQRT Decomposition.
          </p>

          <div className="mt-12 flex items-end justify-between gap-6 text-sm sm:text-base">
            <div className="max-w-xs">
              <div className="h-px bg-slate-500" />
              <p className="mt-3 font-semibold">Founder and CEO,</p>
              <p>AlgoUniversity</p>
            </div>
            <div className="text-4xl text-yellow-500 sm:text-5xl">***</div>
            <div className="max-w-xs">
              <div className="h-px bg-slate-500" />
              <p className="mt-3 font-semibold">Head of Placements,</p>
              <p>AlgoUniversity</p>
            </div>
          </div>

          {certification.href ? (
            <a
              href={certification.href}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              View Certificate
              <FiArrowUpRight />
            </a>
          ) : null}
        </div>
      </motion.article>
    </Reveal>
  )
}

function PdfCertificateCanvas({ href, title }) {
  const canvasRef = useRef(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let isMounted = true
    let renderTask

    async function renderPdf() {
      try {
        const pdfjsLib = await import(/* @vite-ignore */ pdfJsUrl)
        pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl
        const pdf = await pdfjsLib.getDocument(href).promise
        const page = await pdf.getPage(1)
        const viewport = page.getViewport({ scale: 1.7 })
        const canvas = canvasRef.current

        if (!canvas || !isMounted) return

        const context = canvas.getContext('2d')
        canvas.width = viewport.width
        canvas.height = viewport.height
        renderTask = page.render({ canvasContext: context, viewport })
        await renderTask.promise

        if (isMounted) setStatus('ready')
      } catch {
        if (isMounted) setStatus('error')
      }
    }

    renderPdf()

    return () => {
      isMounted = false
      renderTask?.cancel()
    }
  }, [href])

  return (
    <div className="relative min-h-[18rem] overflow-hidden rounded-xl bg-slate-100">
      {status === 'loading' ? (
        <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-slate-500">
          Loading certificate...
        </div>
      ) : null}
      {status === 'error' ? (
        <div className="absolute inset-0 flex items-center justify-center px-5 text-center text-sm font-semibold text-slate-500">
          Open the original certificate with the button below.
        </div>
      ) : null}
      <canvas
        ref={canvasRef}
        aria-label={title}
        className={`h-full w-full object-contain ${status === 'ready' ? 'block' : 'opacity-0'}`}
      />
    </div>
  )
}

function CertificatePreviewCard({ certification, delay }) {
  return (
    <Reveal delay={delay}>
      <motion.article
        whileHover={{ y: -8, rotate: -0.35 }}
        className="soft-border overflow-hidden rounded-[1.75rem] bg-white p-3 text-slate-950 shadow-xl"
      >
        <div className="border-2 border-slate-900 p-3">
          {certification.href ? (
            <PdfCertificateCanvas href={certification.href} title={certification.title} />
          ) : null}
          <div className="px-2 pb-3 pt-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
              {certification.issuer}
            </p>
            <h3 className="mt-2 text-lg font-black leading-tight text-slate-950">
            {certification.title}
            </h3>

            {certification.href ? (
              <a
                href={certification.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
              >
                View Original
                <FiArrowUpRight />
              </a>
            ) : null}
          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}

export function CertificationsSection({ certifications }) {
  const featuredCertificate = certifications.find((certification) => certification.featured)
  const recentCertificates = certifications.filter((certification) => !certification.featured)

  return (
    <section id="certifications" className="section-shell scroll-mt-24">
      <SectionHeading
        eyebrow="Certifications"
        title="Certifications"
        description="Courses and certificates I have completed."
      />

      {featuredCertificate ? <FeaturedCertificate certification={featuredCertificate} /> : null}

      {recentCertificates.length ? (
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {recentCertificates.map((certification, index) => (
            <CertificatePreviewCard
              key={certification.title}
              certification={certification}
              delay={index * 0.06}
            />
          ))}
        </div>
      ) : null}
    </section>
  )
}
