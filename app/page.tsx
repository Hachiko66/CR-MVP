import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="max-w-6xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4">Why Crypto Rooms?</h2>
        <p className="text-gray-300">
          Crypto Rooms adalah ruang aman untuk belajar Web3, crypto, dan airdrop tanpa takut scam.
        </p>
      </section>
    </main>
  )
}
