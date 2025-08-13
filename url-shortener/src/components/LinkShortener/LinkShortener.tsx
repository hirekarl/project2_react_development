import { useState, type ChangeEvent } from "react"
import { Row, Col, Container } from "react-bootstrap"
import type { ShortLink } from "../../types"
import ShortLinkList from "./ShortLinkList"
import ThemedButton from "../ThemedButton"
import bgShorten from "../../assets/bg-shorten-desktop.png"

const API_ENDPOINT = "https://api-ssl.bitly.com/v4/shorten"
const ACCESS_TOKEN = import.meta.env.VITE_API_ACCESS_TOKEN

class APIError extends Error {
  constructor(message?: string) {
    super(message)
    this.name = "APIError"
  }
}

const LinkShortener = () => {
  const [longUrl, setLongUrl] = useState<string>("")
  const [inputEmpty, setInputEmpty] = useState<boolean>(true)
  const [shortLinks, setShortLinks] = useState<ShortLink[]>([
    {
      id: "1",
      link: "https://bit.ly/test",
      long_url: "https://www.example.com/very-long-lin-that-will-wrap-on-mobile-screens/",
      created_at: "2025-08-13",
    },
  ])

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    setLongUrl(value)
    setInputEmpty(value === "")
  }

  const handleClick = (): void => {
    if (longUrl !== "") {
      setLoading(true)
      fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          long_url: longUrl,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new APIError(`${response.status} - ${response.statusText}`)
          }
          return response.json()
        })
        .then((data) => {
          setShortLinks((prevShortLinks) => [data, ...prevShortLinks])
        })
        .catch((error) =>
          setError(`${(error as Error).name}: ${(error as Error).message}`)
        )
        .finally(() => {
          setLoading(false)
          setLongUrl("")
        })
    }
  }

  if (error) console.error(error)

  return (
    <>
      <Container
        className="mt-4 mb-3 mx-auto px-2 rounded-2"
        style={{
          backgroundColor: "var(--color-dark-violet)",
          backgroundImage: `url(${bgShorten})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "calc(100% - 1rem)",
        }}>
        <div className="p-4">
          <Row className="align-items-center">
            <Col xl="10" lg="10" md="8" sm="12" className="mb-1">
              <input
                id="linkInput"
                type="text"
                placeholder="Shorten a link here..."
                className="form-control border-0 rounded-2 p-2"
                aria-describedby={error ? "#linkInputHelp" : ""}
                onChange={handleChange}
                value={longUrl}
              />
              {error && (
                <p id="linkInputHelp" className="text-danger">
                  Error! Check the console for details.
                </p>
              )}
            </Col>
            <Col xl="2" lg="2" md="4" sm="12" className="mb-1">
              <ThemedButton
                pill={false}
                text={loading ? "Loading..." : "Shorten It!"}
                className="w-100 p-2"
                onClick={handleClick}
                disabled={inputEmpty || loading}
              />
            </Col>
          </Row>
        </div>
      </Container>
      <Container className="mt-4 mb-3 px-2 rounded-2">
        <ShortLinkList shortLinks={shortLinks} />
      </Container>
    </>
  )
}

export default LinkShortener
