import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { fetchJobsAction } from "../redux/actions/jobsActions"
import { useState } from "react"
import Job from "./Job"

const MainSearch = () => {
  const [query, setQuery] = useState("")
  const dispatch = useDispatch()

  // Seleziono i dati dal Redux Store
  const jobs = useSelector((state) => state.jobs.list)
  const isLoading = useSelector((state) => state.jobs.isLoading)
  const error = useSelector((state) => state.jobs.error)
  const favouritesCount = useSelector((state) => state.favourites.list.length)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (query.trim()) {
      dispatch(fetchJobsAction(query))
    }
  }

  return (
    <Container>
      <Row>
        <Col
          xs={10}
          className="mx-auto my-3 d-flex justify-content-between align-items-center"
        >
          <h1 className="display-1">Remote Jobs Search</h1>
          <Link to="/favourites">
            <Button variant="success">Favourites ({favouritesCount})</Button>
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
              disabled={isLoading}
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {/* Indicatore di caricamento */}
          {isLoading && (
            <div className="text-center my-5">
              <Spinner animation="border" role="status" variant="primary">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <p className="mt-3">Searching for jobs...</p>
            </div>
          )}

          {/* Messaggio di errore */}
          {error && (
            <Alert variant="danger" className="mt-3">
              <Alert.Heading>Error!</Alert.Heading>
              <p>{error}</p>
            </Alert>
          )}

          {/* Lista dei risultati */}
          {!isLoading && !error && jobs.length === 0 && query && (
            <Alert variant="info" className="mt-3">
              No jobs found. Try a different search term.
            </Alert>
          )}

          {!isLoading &&
            !error &&
            jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
