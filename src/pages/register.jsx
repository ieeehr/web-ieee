import * as React from "react"
import { useEffect } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const EventPage = () => {
  useEffect(() => {
    window.location.href = "https://www.ieee.org/" // Replace with the desired URL
  }, [])

  return (
    <Layout route="/register">
      <Seo title="IEEE Membership Form"  description="Join IEEE Now!" />
      <p>Redirecting...</p>
    </Layout>
  )
}

export default EventPage

