<Form onSubmit={submitHandlers}>
  <Row>
    <Col>
      <Form.Group as={Col} controlId="formGridname">
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Product name"
          />
        </FloatingLabel>
      </Form.Group>
    </Col>
    <Col>
      {" "}
      <Form.Group as={Col} controlId="formGridprice">
        <FloatingLabel controlId="floatingInput" label="price" className="mb-3">
          <Form.Control
            type="number"
            value={price}
            onChange={(e) => setprice(e.target.value)}
            placeholder="Enter your price"
          />
        </FloatingLabel>
      </Form.Group>
    </Col>
  </Row>
  <Row>
    <Col>
      <Form.Group as={Col} controlId="formGridescription">
        <FloatingLabel
          controlId="floatingInput"
          label="description"
          className="mb-3"
        >
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            placeholder="Enter your description"
          />
        </FloatingLabel>
      </Form.Group>
    </Col>
    <Col>
      {" "}
      <Form.Group>
        <FormFloating>
          <Form.Control
            // onChange={(e) => postDetails(e.target.files[0])}
            id="custom-file"
            type="file"
            label="Upload Profile Picture"
          />
        </FormFloating>
      </Form.Group>
    </Col>
  </Row>
  <Row>
    <Col>
      <Form.Group as={Col} controlId="formGridbrand">
        <FloatingLabel controlId="floatingInput" label="brand" className="mb-3">
          {" "}
          <Form.Control
            type="text"
            value={brand}
            onChange={(e) => setbrand(e.target.value)}
            placeholder="Enter your brand"
          />
        </FloatingLabel>
      </Form.Group>
    </Col>
    <Col>
      {" "}
      <Form.Group as={Col} controlId="formGridcategory">
        <FloatingLabel
          controlId="floatingInput"
          label="category"
          className="mb-3"
        >
          <Form.Control
            type="text"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            placeholder="Enter your category"
          />
        </FloatingLabel>
      </Form.Group>
    </Col>
  </Row>
  <Row>
    <Col>
      <Form.Group as={Col} controlId="formGridcountInStock">
        <FloatingLabel
          controlId="floatingInput"
          label="countInStock"
          className="mb-3"
        >
          {" "}
          <Form.Control
            type="number"
            value={countInStock}
            onChange={(e) => setcountInStock(e.target.value)}
            placeholder="Enter your countInStock"
          />
        </FloatingLabel>
      </Form.Group>
    </Col>
    <Col>
      <Form.Group as={Col} controlId="formGridnumReviews">
        <FloatingLabel
          controlId="floatingInput"
          label="numReviews"
          className="mb-3"
        >
          <Form.Control
            type="number"
            value={numReviews}
            onChange={(e) => setnumReviews(e.target.value)}
            placeholder="Enter your numReviews"
          />
        </FloatingLabel>
      </Form.Group>
    </Col>
  </Row>
  <div className="mt-5">
    <Row>
      {" "}
      <Col sm={6}>
        <Button variant="success" type="submit">
          ADD
        </Button>
      </Col>
      <Col sm={6}>
        <Button variant="secondary" type="submit">
          Back
        </Button>
      </Col>{" "}
    </Row>
  </div>
</Form>;
