export const metadata = {
  title: 'FarmerPay Project Tracker',
  description: 'Track your FarmerPay project progress with comments and history',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
