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


/*import * as React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const EventPage = () => {
  const container = React.useRef()

  React.useEffect(() => {
    createWidget("qAxpT6jn", { container: container.current })
  }, [])

  return (
    <Layout route="/register">
      <Seo title="IEEE Membership Form" description="Join IEEE Now!" />

      <div
        style={{ height: "calc(var(--vh, 1vh) * 100 - 5rem )" }}
        ref={container}
      ></div>
    </Layout>
  )
}

export default EventPage*/
