import { Container, Row, Col, ListGroup, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { removeFromFavourites } from "../redux/actions"
import { Link } from "react-router-dom"

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.list)
  const dispatch = useDispatch()

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-4">Favourite Companies</h1>
          <Link to="/">
            <Button variant="secondary" className="mb-3">
              Back to Search
            </Button>
          </Link>
          {favourites.length === 0 ? (
            <p>No favourite companies yet. Start adding some!</p>
          ) : (
            <ListGroup>
              {favourites.map((company, index) => (
                <ListGroup.Item
                  key={index}
                  className="d-flex justify-content-between align-items-center"
                >
                  <Link to={`/${company}`}>{company}</Link>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => dispatch(removeFromFavourites(company))}
                  >
                    Remove
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Favourites
