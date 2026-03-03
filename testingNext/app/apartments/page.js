import Link from 'next-intl/link'



export default function Page() {

  return (
    <>
      <div>Apartments:</div>
      <Link href={'/apartments/1'}>Apartment One</Link>
    </>
  )
}