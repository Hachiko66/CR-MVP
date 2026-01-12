export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b border-gray-800">
      <span className="font-bold text-xl">Crypto Rooms</span>
      <div className="space-x-5 text-gray-300">
        <a href="/learn">Learn</a>
        <a href="/airdrop">Airdrop</a>
        <a href="/knowledge">Knowledge</a>
        <a href="/scam-alert">Scam Alert</a>
        <a href="/community">Community</a>
      </div>
    </nav>
  )
}
