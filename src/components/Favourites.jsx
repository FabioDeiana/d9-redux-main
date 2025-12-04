import { Container, Row, Col, ListGroup, Button, Alert } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { removeFromFavouritesAction } from "../redux/actions/favouritesActions"
import { Link } from "react-router-dom"

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.list)
  const dispatch = useDispatch()

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-4">⭐ Favourite Companies</h1>
          <Link to="/">
            <Button variant="secondary" className="mb-3">
              ← Back to Search
            </Button>
          </Link>

          {favourites.length === 0 ? (
            <Alert variant="info">
              <Alert.Heading>No favourites yet!</Alert.Heading>
              <p>
                Start adding companies to your favourites from the search
                results.
              </p>
            </Alert>
          ) : (
            <>
              <p className="text-muted">
                You have {favourites.length} favourite{" "}
                {favourites.length === 1 ? "company" : "companies"}
              </p>
              <ListGroup>
                {favourites.map((company, index) => (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <Link to={`/${company}`} className="text-decoration-none">
                      <strong>{company}</strong>
                    </Link>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() =>
                        dispatch(removeFromFavouritesAction(company))
                      }
                    >
                      ❌ Remove
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Favourites
